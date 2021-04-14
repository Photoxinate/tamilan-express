import React, { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import Button from 'semantic-ui-react/dist/commonjs/elements/Button';
import classes from './SubTotal.module.scss';
import useTranslation from 'next-translate/useTranslation'


const SubTotal = (props) => {

  const total = useSelector(state => state.cart.total)

  const { t } = useTranslation('cart')


  return (
    <div className={classes.wrap}>
      
      <div className={classes.row}>
        <div className={classes.col}>Sub-total</div>
        <div className={classes.col}>${total}</div>
      </div>
      <div className={classes.btnWrap}>
      <Button fluid primary compact content={t('cart-checkout')}   />
      <Button fluid primary compact content={t('cart-continue')}  />
      </div>
    </div>
  );
};


export default SubTotal;
