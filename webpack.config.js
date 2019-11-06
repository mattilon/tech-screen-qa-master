const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");
const { InjectManifest } = require("workbox-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CompressionPlugin = require("compression-webpack-plugin");

const config = {
  entry: ["./app/index.tsx"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    chunkFilename: "[name].bundle.js",
    publicPath: "/"
  },
  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",
  module: {
    rules: [
      { test: /\.(ts|tsx)$/, loader: "awesome-typescript-loader" },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      { test: /\.(js)$/, exclude: /node_modules/, use: "babel-loader" },
      {
        // Use the MiniCssExtractPlugin to extract css file
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it uses publicPath in webpackOptions.output
              publicPath: "../",
              hmr: process.env.NODE_ENV === "development",
              reloadAll: true
            }
          },
          "css-loader"
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [{ loader: "url-loader", options: { limit: 8192 } }]
      }
    ]
  },
  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  // externals: {
  //   react: 'React',
  //   'react-dom': 'ReactDOM',
  // },
  devServer: {
    historyApiFallback: true,
    hot: true,
    https: false
  },
  optimization: {
    splitChunks: {
      name: false
    }
  },
  resolve: {
    alias: {
      "react-dom": "@hot-loader/react-dom"
    },
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "app/index.html" }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new CopyWebpackPlugin([
      // Copy directory contents to {output}/
      { from: "app/pwa" }
    ]),
    new InjectManifest({
      swSrc: "./app/service-worker.jsx",
      swDest: "./service-worker.jsx"
    })
  ]
};

if (process.env.NODE_ENV && process.env.NODE_ENV.trim() === "production") {
  config.mode = "production";
  delete config.resolve.alias; // Remove the react hot loader dom
  config.devtool = ""; // Remove the source map
  config.plugins.push(
    new CompressionPlugin({
      filename: "[file]",
      algorithm: "gzip",
      test: /\.ts|\.tsx|\.js$|\.css$|\.html$/,
      minRatio: 0.7,
      deleteOriginalAssets: false
    })
  );
}

module.exports = config;
