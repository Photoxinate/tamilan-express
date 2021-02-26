import React from 'react';
import { connect } from 'react-redux';
import Coupon from './Coupon/Coupon';
import Button from 'semantic-ui-react/dist/commonjs/elements/Button';
import Input from 'semantic-ui-react/dist/commonjs/elements/Input';
import classes from './Cheque.module.scss';

const Cheque = (props) => {
  let subTotal = 0;
  const getTotalPrice = () => {
    props.cartproducts.map((prod, i) => {
      console.log();
      subTotal = prod.price * prod.qty + subTotal;
    });
  };

  getTotalPrice();

  return (
    <div className={classes.cheque}>
      <div className={classes.inputWrap}>
        <Input action="Redeem" fluid placeholder="Enter credits to redeem" />
      </div>
      <div className={classes.inputWrap}>
        <Input action="&nbsp;&nbsp;Apply&nbsp;&nbsp;" fluid placeholder="Enter coupon here" />
      </div>

      <div className={classes.row}>
        <div className={classes.col}>Sub-total</div>
        <div className={classes.col}>${subTotal}</div>
      </div>
      <div className={classes.row}>
        <div className={classes.col}>Shipping</div>
        <div className={classes.col}>$ 0.00</div>
      </div>
      <hr />
      <div className={classes.row}>
        <div className={classes.col}>Total</div>
        <div className={classes.col}>$ 40.00</div>
      </div>
      <div className={classes.btnWrap}>
        <Button content="Proceed To Payment" />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartproducts: state.prdCart.products,
  };
};

export default connect(mapStateToProps)(Cheque);
