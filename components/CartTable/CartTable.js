import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actionTypes from '../../store/actions/actionTypes';
import ProductRow from './ProductRow/ProductRow';
import classes from './CartTable.module.scss';
import useTranslation from 'next-translate/useTranslation'


const CartTable = (props) => {
  const dispatch = useDispatch();

  const onChangeQty = (id, qty) =>
    dispatch({
      type: actionTypes.CHANGE_QUANTITY,
      payload: { id: id, qty: qty },
    });

  const onRemoveProduct = (id) =>
    dispatch({ type: actionTypes.REMOVE_FROM_CART, payload: { id: id } });

  const products = useSelector((state) => state.prdCart.products);

  const { t } = useTranslation('cart')

  return (
    <div className={classes.table}>
      <div className={classes.cartHead}>
        <div className={classes.col}><h2>{t('cart-title')}</h2></div>
      </div>
      {products.map((product, i) => (
        <ProductRow
          key={product.id}
          onChangeQty={onChangeQty}
          onRemoveProduct={onRemoveProduct}
          product={product}
        />
      ))}
    </div>
  );
};

export default CartTable;
