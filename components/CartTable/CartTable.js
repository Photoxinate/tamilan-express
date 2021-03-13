import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as actionTypes from '../../store/actions/actionTypes'
import ProductRow from './ProductRow/ProductRow'
import classes from './CartTable.module.scss'
import useTranslation from 'next-translate/useTranslation'


const CartTable = (props) => {
  const dispatch = useDispatch()
  
  const products = useSelector(state => state.cart.products)

  const qtyChangeHandler = (id, qty, price) => {
    dispatch({ type: actionTypes.UPDATE_CART, id, qty, price })
  }

  const removeProductHandler = (id, price) => {
    dispatch({ type: actionTypes.UPDATE_CART, id, qty: 0, price })
  }


  const { t } = useTranslation('cart')

  return (
    <div className={classes.table}>
      <div className={classes.cartHead}>
        <div className={classes.col}><h2>{t('cart-title')}</h2></div>
      </div>
      {products.map((product, i) => (
        <ProductRow
          key={product.id}
          onChangeQty={qtyChangeHandler}
          onRemoveProduct={removeProductHandler}
          product={product}
        />
      ))}
    </div>
  );
};

export default CartTable;
