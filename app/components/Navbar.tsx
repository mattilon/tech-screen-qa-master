/* eslint-disable react/destructuring-assignment */
import React, { memo } from "react";
import { Link, withRouter } from "react-router-dom";
import { Toolbar, AppBar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { orange, green } from "@material-ui/core/colors";

import { HOME_PAGE_URL } from "../config";

/* istanbul ignore next */
const useStyles = makeStyles(theme => ({
  link: {
    color: theme.palette.primary.contrastText,
    textDecoration: "none"
  },
  menuLink: {
    textDecoration: "none"
  },
  flex1: {
    flex: 1
  },
  appbar: {
    // maxHeight: 55,
    // position: "sticky",
    // top: 0,
    // zIndex: theme.zIndex.drawer + 1
  },
  avatar: {
    width: 26,
    height: 26,
    marginRight: 8,
    color: "#fff",
    backgroundColor: orange[800]
  },
  switchBase: {
    color: "white",
    "&$checked": {
      color: green[400]
    },
    "&$checked + $track": {
      backgroundColor: green[400]
    }
  },
  checked: {},
  track: {},
  appbarTitle: {}
}));

/** Navbar component */
export const Navbar = () => {
  const classes = useStyles({});

  return (
    <>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <Link
            to={HOME_PAGE_URL}
            className={`${classes.link} ${classes.flex1}`}
            data-testid="titleLink"
          >
            <Typography
              variant="h6"
              className={classes.appbarTitle}
              color="inherit"
            >
              Assemble Store
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default withRouter(memo(Navbar));
