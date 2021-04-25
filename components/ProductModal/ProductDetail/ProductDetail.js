import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from 'semantic-ui-react/dist/commonjs/elements/Button';
import * as actionTypes from '../../../store/actions/actionTypes';
import { updateCart } from '../../../store/actions/cart';
import ProductVariation from '../../ProductVariation/ProductVariation';
import Quantity from '../../UI/Quantity/Quantity';
import ProductPrice from '../ProductPrice/ProductPrice';
import { useRouter } from 'next/router'
import classes from './ProductDetail.module.scss';

const ProductDetail = ({ product }) => {
  const { t } = useTranslation('common');

  const dispatch = useDispatch();

  const isStock = product.stock > 0 ? true : false

  const [variation, setVariation] = useState([]);

  const [isError, setIsError] = useState(false);

  const [qty, setQty] = useState(1);

  const { push } = useRouter()

  const addToCart = (now) => {
    if (product.variation) {
      const error = product.variation.length !== variation.length
      setIsError(error)

      if (!error) {
        product.variations = variation
        dispatch({ type: actionTypes.CLOSE_MODAL });
        dispatch(updateCart(product, qty));

        if(now) 
          push('/cart')
      }
    } else {
      product.variations = variation
      dispatch({ type: actionTypes.CLOSE_MODAL });
      dispatch(updateCart(product, qty));

      if(now) 
        push('/cart')
    }
  };

  return (
    <div className={classes.prodDetail}>
      {product.category && <div className={classes.prodCategory}>{product.category.name}</div>}

      <div className={classes.prodName}>
          {product.name}
      </div>

      <ProductPrice price={product.price} discount={product.discount} />

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
      {product.variation && (
        <div className={classes.itemWrap}>
          <ProductVariation
            error={isError}
            setVariation={setVariation}
            variation={product.variation}
            addedVariations={variation}
          />
        </div>
      )}
      <Quantity max={product.maxCount} setQty={setQty} qty={qty} />

      <div className={classes.btnWrap}>
        <Button
          content={t('add-to-cart')}
          onClick={() => addToCart(false)}
          primary
          compact
        />
        <Button 
          content={t('Buy-now')} 
          onClick={() => addToCart(true)} 
          compact 
        />
      </div>
    </div>
  );
};

export default ProductDetail;
