import React, { ReactElement, memo } from "react";
import { Button, Divider, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import AdapterLink from "../AdapterLink";

const useStyles = makeStyles({
  root: {
    margin: "50px auto 10px auto",
    width: "80%",
    height: "100%",
    padding: 15,
    // backgroundColor: '#e6e6e6',
    textAlign: "center"
  },
  title: {
    // fontSize: 16,
    // textAlign: "left"
    marginTop: 30,
    marginBottom: 30
  },
  divider: {
    marginTop: 15,
    marginBottom: 15
  }
});

export const OrderComplete = (): ReactElement => {
  const classes = useStyles({});
  return (
    <div className={classes.root}>
      <Typography align="left" variant="h4">
        Checkout
      </Typography>
      <Divider className={classes.divider} />
      <Grid container direction="row" justify="center" alignItems="center">
        <Typography align="left" variant="h5" className={classes.title}>
          Hooray! Way to order those products.
        </Typography>
      </Grid>
      <div>
        <Button
          variant="contained"
          color="primary"
          component={AdapterLink}
          to="/home"
        >
          GO HOME
        </Button>
      </div>
    </div>
  );
};
export default memo(OrderComplete);
