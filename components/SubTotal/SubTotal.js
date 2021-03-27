import React, { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import Button from 'semantic-ui-react/dist/commonjs/elements/Button';
import classes from './SubTotal.module.scss';
import useTranslation from 'next-translate/useTranslation'


const SubTotal = (props) => {

  const cartProducts = useSelector(state => state.cart.products)

  const { t } = useTranslation('cart')

  const getTotalPrice = () => {
    let subTotal = 0;
    cartProducts.map((prod, i) => {
      subTotal = ((prod.price * prod.qty) + subTotal);
    });

    return subTotal
  }

  const subTotal = getTotalPrice()


  return (
    <div className={classes.wrap}>
      
      <div className={classes.row}>
        <div className={classes.col}>Sub-total</div>
        <div className={classes.col}>${subTotal}</div>
      </div>
      <div className={classes.btnWrap}>
      <Button fluid primary compact content={t('cart-checkout')}   />
      <Button fluid primary compact content={t('cart-continue')}  />
      </div>
    </div>
  );
};


export default SubTotal;
