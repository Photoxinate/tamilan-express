import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as actionTypes from '../../../store/actions/actionTypes';
import Link from 'next/link'
import ProductPrice from '../ProductPrice/ProductPrice';
import classes from './ProductDetail.module.scss';
import Quantity from '../../UI/Quantity/Quantity';
import Button from 'semantic-ui-react/dist/commonjs/elements/Button';
import useTranslation from 'next-translate/useTranslation'


const ProductDetail = (props) => {

  const { t } = useTranslation('common')

  const product = props.product
  const dispatch = useDispatch()
  const [qty, setQty] = useState(product.qty)

  const addToCart = (product, qty) => {
    dispatch({type: actionTypes.CLOSE_MODAL})
    dispatch({ type: actionTypes.UPDATE_CART, id: product.id, qty, price: product.price })
  }

  const qtyChangeHandler = (_, qty) => {
    setQty(qty)
  }

  return (
    <div className={classes.prodDetail}>
      <div className={classes.prodCategory}>{product.category}</div>
      <div className={classes.prodName}>{product.name}</div>
      <ProductPrice
        price={product.price}
        discount={product.discount}
      />
      <div className={classes.detail}>
        Stock :<span className={classes.prodStock}>In Stock </span>
      </div>
      <div className={classes.detail}>
        Weight :
        <span className={classes.prodWeight}>{product.weight}</span>
      </div>
     
      <Quantity max={product.maxQty} onChangeQty={qtyChangeHandler} qty={qty}/>
      <div className={classes.btnWrap}>
        <Button content={t('add-to-cart')} onClick={() => addToCart(product, qty)} primary compact />
        <Link href="/cart" >
          <a>
            <Button content={t('Buy-now')} onClick={() => addToCart(product, qty)} compact/>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ProductDetail;
