import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from 'semantic-ui-react/dist/commonjs/elements/Button';
import Label from 'semantic-ui-react/dist/commonjs/elements/Label';
import * as actionTypes from '../../../store/actions/actionTypes';
import { updateCart } from '../../../store/actions/cart';
import Quantity from '../../UI/Quantity/Quantity';
import ProductPrice from '../ProductPrice/ProductPrice';
import classes from './ProductDetail.module.scss';

const ProductDetail = ({ product }) => {
  const { t } = useTranslation('common');

  const [isStock, setIsStock] = useState(product.stock > 0 ? true : false);

  const [qty, setQty] = useState(1);

  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch({ type: actionTypes.CLOSE_MODAL });
    dispatch(updateCart(product, qty));
  };

  return (
    <div className={classes.prodDetail}>
      <div className={classes.prodCategory}>{product.category.name}</div>

      <div className={classes.prodName}>{product.name}</div>

      <ProductPrice price={product.price} discount={product.discount} />

      {product.type === 'buy 1 get 1 free' ? (
        <div className={classes.itemWrap}>
          <Label as="a" color="red" tag>
            Buy 1 get 1 free
          </Label>
        </div>
      ) : null}

      {product.type === 'buy 1 get 2nd off' ? (
        <div className={classes.itemWrap}>
          <Label as="a" color="red" tag>
            Buy 1 get 2nd {product.offDiscount} off
          </Label>
        </div>
      ) : null}

      <div className={classes.itemWrap}>
        {isStock ? (
          <span className={classes.prodStock}> In Stock </span>
        ) : (
          <span className={classes.prodNoStock}> Out of Stock </span>
        )}
      </div>

      {product.weight && (
        <div className={classes.itemWrap}>
          Weight :<span className={classes.prodWeight}>{product.weight}</span>
        </div>
      )}

      <Quantity max={product.maxCount} setQty={setQty} qty={qty} />

      <div className={classes.btnWrap}>
        <Button
          content={t('add-to-cart')}
          onClick={addToCart}
          primary
          compact
        />
        <Link href="/cart">
          <a>
            <Button content={t('Buy-now')} onClick={addToCart} compact />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ProductDetail;
