import React, { ReactElement, memo } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  Input,
  Link,
  InputLabel,
  Typography
} from "@material-ui/core";
import { useHistory } from "react-router";
import useForm from "react-hook-form";

import AdapterLink from "../AdapterLink";
import StateSelect from "../StateSelect";
import CountrySelect from "../CountrySelect";

import { COMPLETE_PAGE_URL, HOME_PAGE_URL } from "../../config";

const useStyles = makeStyles({
  root: {
    margin: "50px auto 10px auto",
    width: "80%",
    height: "100%",
    padding: 15
  },
  title: {
    marginBottom: 20
  },
  flexDiv: {
    display: "flex",
    marginTop: 40
  },
  label: {
    width: "100%",
    marginBottom: 10,
    display: "flex",
    justifyContent: "flex-start"
  },
  textInput: {
    border: 0,
    color: "#999",
    width: "100%"
  },
  info: {
    width: "100%",
    marginRight: 20
  },
  right: {
    textAlign: "right"
  },
  bottomDiv: {
    marginTop: 30
  },
  smallDarkerFont: {
    fontSize: 11,
    color: "#4f4f4f"
  },
  labelSpan: {
    fontSize: 16,
    lineHeight: "32px",
    color: "#4f4f4f",
    minWidth: 150,
    textAlign: "right",
    paddingRight: 20
  },
  titleDiv: {
    marginBottom: 20
    // fontSize: 16
  },
  divider: {
    marginTop: 15,
    marginBottom: 15
  },
  "@media (max-width: 735px)": {
    flexDiv: {
      display: "block"
    }
  }
});

export const BillInformation = (): ReactElement => {
  const classes = useStyles({});
  let history = useHistory();
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = (values: any) => {
    console.log("values", values);
    console.log("errors", errors);
    history.push(COMPLETE_PAGE_URL);
  };

  return (
    <div className={classes.root}>
      <Typography align="left" variant="h4" className={classes.title}>
        Check Out
      </Typography>

      <Divider className={classes.divider} />

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.flexDiv}>
          <div className={classes.info}>
            <Typography
              align="center"
              variant="h5"
              className={classes.titleDiv}
            >
              Payment Information
            </Typography>

            <InputLabel className={classes.label} htmlFor="cardName">
              <span className={classes.labelSpan}>Name on card</span>
              <Input
                className={classes.textInput}
                type="text"
                name="cardName"
                id="cardName"
              />
            </InputLabel>
            <InputLabel className={classes.label} htmlFor="cardNumber">
              <span className={classes.labelSpan}>Card Number</span>
              <Input
                className={classes.textInput}
                name="cardNumber"
                id="cardNumber"
                placeholder="XXXX XXXX XXXX XXXX"
                autoComplete="cc-number"
                error={!!(errors && errors.cardNumber)}
                inputRef={register({
                  required: "Required",
                  pattern: {
                    value: /^[A-Z0-9]{4}\s?[A-Z0-9]{4}\s?[A-Z0-9]{4}\s?[A-Z0-9]{4}$/i,
                    message: "invalid credit card number"
                  }
                })}
              />
            </InputLabel>
            <InputLabel className={classes.label} htmlFor="cardDate">
              <span className={classes.labelSpan}>Expiration Date</span>
              <Input
                className={classes.textInput}
                type="month"
                name="cardCVV"
                id="cardCVV"
              />
            </InputLabel>
            <InputLabel className={classes.label} htmlFor="cardCVV">
              <span className={classes.labelSpan}>CVV</span>
              <Input
                className={classes.textInput}
                type="text"
                name="cardCVV"
                id="cardCVV"
              />
            </InputLabel>
          </div>

          <div className={classes.info}>
            <Typography
              align="center"
              variant="h5"
              className={classes.titleDiv}
            >
              Shipping Address
            </Typography>

            <InputLabel className={classes.label} htmlFor="name">
              <span className={classes.labelSpan}>Name</span>
              <Input
                className={classes.textInput}
                type="text"
                name="name"
                id="name"
              />
            </InputLabel>
            <InputLabel className={classes.label} htmlFor="address">
              <span className={classes.labelSpan}>Address</span>
              <Input
                className={classes.textInput}
                type="text"
                name="address"
                id="address"
              />
            </InputLabel>
            <InputLabel className={classes.label} htmlFor="apt">
              <span className={classes.labelSpan}>Apt/suite/etc</span>
              <Input
                className={classes.textInput}
                type="text"
                name="apt"
                id="apt"
              />
            </InputLabel>
            <InputLabel className={classes.label} htmlFor="city">
              <span className={classes.labelSpan}>City</span>
              <Input
                className={classes.textInput}
                type="text"
                name="city"
                id="city"
              />
            </InputLabel>
            <StateSelect />

            <InputLabel className={classes.label} htmlFor="zipcode">
              <span className={classes.labelSpan}>Zipcode</span>
              <Input
                className={classes.textInput}
                type="text"
                name="zipcode"
                id="zipcode"
              />
            </InputLabel>
            <CountrySelect />
            <Typography
              align="right"
              variant="subtitle1"
              className={classes.smallDarkerFont}
            >
              <FormControlLabel
                value="end"
                control={<Checkbox color="primary" />}
                label="Billing address same as shipping"
                labelPlacement="end"
                onChange={handleSubmit}
              />
            </Typography>
          </div>
        </div>

        <Divider className={classes.divider} />
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Link
            variant="inherit"
            color="primary"
            component={AdapterLink}
            to={HOME_PAGE_URL}
          >
            Back
          </Link>
          <Button variant="contained" color="primary" type="submit">
            Place Order
          </Button>
        </Grid>
      </form>
    </div>
  );
};
export default memo(BillInformation);
