import React, { Suspense, lazy, ReactElement } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { CircularProgress, Grid, Typography } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";

import Navbar from "./Navbar";
import { HOME_PAGE_URL, BILLING_PAGE_URL, COMPLETE_PAGE_URL } from "../config";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#4081f5",
      main: "#1a4fad",
      dark: "#08275e",
      contrastText: "#fff"
    },
    secondary: {
      light: "#497ca4",
      main: "#105075",
      dark: "#002884",
      contrastText: "#fff"
    }
  }
});

const CartPage = lazy(() => import("./containers/Cart"));
const BillPage = lazy(() => import("./containers/BillInformation"));
const OrderCompletePage = lazy(() => import("./containers/OrderComplete"));

export const App = (): ReactElement => (
  <MuiThemeProvider theme={theme}>
    <Router>
      <CssBaseline />
      <Navbar />
      <main>
        <Suspense
          fallback={
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <CircularProgress />
            </Grid>
          }
        >
          <Switch>
            <Route exact path={HOME_PAGE_URL} component={CartPage} />
            <Route exact path={BILLING_PAGE_URL} component={BillPage} />
            <Route
              exact
              path={COMPLETE_PAGE_URL}
              component={OrderCompletePage}
            />
            <Route
              render={() => (
                <Grid
                  className="four-o-four"
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                >
                  <Typography variant="h2">Not Found</Typography>
                </Grid>
              )}
            />
          </Switch>
        </Suspense>
      </main>
    </Router>
  </MuiThemeProvider>
);
export default App;
