import React, { memo, useEffect, ReactElement } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import {
  Button,
  Divider,
  Hidden,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography
} from "@material-ui/core";

import AdapterLink from "../AdapterLink";
import { fetchCart as fetchCartAction } from "../../store/Cart/actions";
import { CartType } from "../../store/Cart/types";
import cartData from "../../store/Cart/data";
import Product from "../Product";
import { BILLING_PAGE_URL } from "../../config";

const useStyles = makeStyles({
  root: {
    margin: "50px auto 10px auto",
    width: "80%",
    height: "100%"
    // padding: 15
    // backgroundColor: "#e6e6e6"
  },
  table: {
    minWidth: 250
  },
  productImg: {
    width: 100,
    height: 100,
    borderRadius: 100
  },
  title: {
    fontSize: 20
  },
  smallFont: {
    fontSize: 16,
    color: "#919191"
  },
  smallDarkerFont: {
    fontSize: 16,
    color: "#4f4f4f"
  },
  btnDiv: {
    textAlign: "right",
    marginTop: 40
  },
  divider: {
    marginTop: 15,
    marginBottom: 15
  },
  hidden: {
    color: "#fff"
  }
});

type PropType = {
  cart: CartType;
  fetchCart: Function;
};

let totalAmount = null;

export const Cart = ({ fetchCart, cart }: PropType): ReactElement => {
  const classes = useStyles({});
  if (totalAmount === null && cart) {
    totalAmount = cart
      .reduce(
        (total, product) =>
          (total * 100 + product.unitPrice * 100 * product.quantity) / 100,
        0
      )
      .toFixed(2);
  }

  const cartCount = cartData
    .map(item => item.quantity)
    .reduce((prev, next) => prev + next);

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <div className={classes.root}>
      <Typography align="left" variant="h4">
        Your Cart
      </Typography>

      <Hidden xsDown>
        <Divider className={classes.divider} />
      </Hidden>

      <Table className={classes.table}>
        <TableHead>
          <TableRow key="header">
            <TableCell colSpan={2}></TableCell>
            <Hidden xsDown>
              <TableCell align="right" className={classes.smallFont}>
                Qunatity
              </TableCell>
              <TableCell align="right" className={classes.smallFont}>
                Price
              </TableCell>
            </Hidden>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart &&
            cart.map(product => (
              <Product key={product.sku} product={product} />
            ))}
          <TableRow key="subtotal">
            <Hidden xsDown>
              <TableCell className={`${classes.smallFont}`}></TableCell>
            </Hidden>
            <Hidden xsDown>
              <TableCell className={`${classes.smallFont} ${classes.hidden}`}>
                SUBTOTAL
              </TableCell>
            </Hidden>
            <TableCell
              colSpan={2}
              className={classes.smallDarkerFont}
              align="right"
            >
              Subtotal ({cartCount}
              &nbsp;items): ${totalAmount !== null && totalAmount}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <div className={classes.btnDiv}>
        <Button
          variant="contained"
          color="primary"
          component={AdapterLink}
          to={BILLING_PAGE_URL}
        >
          Checkout
        </Button>
      </div>
    </div>
  );
};
const mapStateToProps = ({ cart }) => ({
  cart
});
const mapDispatchToProps = { fetchCart: fetchCartAction };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(memo(Cart));
