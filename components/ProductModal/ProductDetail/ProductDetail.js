import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from 'semantic-ui-react/dist/commonjs/elements/Button';
import * as actionTypes from '../../../store/actions/actionTypes';
import { updateCart } from '../../../store/actions/cart';
import Quantity from '../../UI/Quantity/Quantity';
import ProductPrice from '../ProductPrice/ProductPrice';
import classes from './ProductDetail.module.scss';


const ProductDetail = ({ product }) => {

  const { t } = useTranslation('common')

  const dispatch = useDispatch()

  const [qty, setQty] = useState(product.qty)

  const addToCart = () => {
    dispatch({type: actionTypes.CLOSE_MODAL})
    dispatch(updateCart(product, qty))
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
        <Button content={t('add-to-cart')} onClick={addToCart} primary compact />
        <Link href="/cart" >
          <a>
            <Button content={t('Buy-now')} onClick={addToCart} compact/>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ProductDetail;
