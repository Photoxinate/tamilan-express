import React from 'react';
import { connect } from 'react-redux'
import Coupon from './Coupon/Coupon';
import Button from '../../components/UI/Button/Button';
import classes from './Cheque.module.scss';

const Cheque = (props) => {
 let subTotal = 0
  const getTotalPrice = () => {
    props.cartproducts.map((prod, i) => {
      console.log();
       subTotal = (prod.price * prod.qty) + subTotal
    })
  }
  
  getTotalPrice()

  return (
    <div className={classes.cheque}>
      <Coupon />
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
        <Button text="Continue Shopping" />
        <Button text="Check Out" />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return{
    cartproducts: state.prdCart.products
  }
}

export default connect(mapStateToProps)(Cheque);
