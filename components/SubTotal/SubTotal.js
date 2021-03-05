import React from 'react';
import { connect } from 'react-redux';
import Button from 'semantic-ui-react/dist/commonjs/elements/Button';
import classes from './SubTotal.module.scss';
import useTranslation from 'next-translate/useTranslation'


const SubTotal = (props) => {

  const { t } = useTranslation('cart')

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
        <Button > {t('cart-checkout')} </Button>
        <Button > {t('cart-continue')} </Button>
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
