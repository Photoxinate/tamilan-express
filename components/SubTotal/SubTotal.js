import React from 'react';
import { connect } from 'react-redux';
import Button from 'semantic-ui-react/dist/commonjs/elements/Button';
import classes from './SubTotal.module.scss';

const SubTotal = (props) => {
  let subTotal = 0;
  const getTotalPrice = () => {
    props.cartproducts.map((prod, i) => {
      console.log();
      subTotal = prod.price * prod.qty + subTotal;
    });
  };

  getTotalPrice();

  return (
    <div className={classes.wrap}>
      
      <div className={classes.row}>
        <div className={classes.col}>Sub-total</div>
        <div className={classes.col}>${subTotal}</div>
      </div>
      <div className={classes.btnWrap}>
        <Button > Check out </Button>
        <Button > Continue Shopping </Button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartproducts: state.prdCart.products,
  };
};

export default connect(mapStateToProps)(SubTotal);
