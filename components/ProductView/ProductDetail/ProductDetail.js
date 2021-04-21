import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from 'semantic-ui-react/dist/commonjs/elements/Button';
import Label from 'semantic-ui-react/dist/commonjs/elements/Label';
import { updateCart } from '../../../store/actions/cart';
import Quantity from '../../UI/Quantity/Quantity';
import ProductPrice from '../ProductPrice/ProductPrice';
import ProductVariation from '../../ProductVariation/ProductVariation';
import classes from './ProductDetail.module.scss';

const ProductDetail = ({ product, ...props }) => {
  const dispatch = useDispatch();

  const { t } = useTranslation('common');

  const isStock = product.stock > 0 ? true : false;

  const [variation, setVariation] = useState([]);

  const [isError, setIsError] = useState(false);

  const [qty, setQty] = useState(1);

  const addToCart = () => {
    if (product.variation) {
      const error = product.variation.length !== variation.length;
      setIsError(error);

      if (!error) {
        product.variations = variation;
        dispatch(updateCart(product, qty));
      }
    } else {
      product.variations = variation;
      dispatch(updateCart(product, qty));
    }
  };

  // const onAddProduct = (product, qty) => {
  //   dispatch({
  //     type: actionTypes.ADD_TO_CART,
  //     payload: { product: product, qty: qty },
  //   });
  // };

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
          Weight : <span className={classes.prodWeight}>{product.weight}</span>
        </div>
      )}
      {product.variation && (
        <div className={classes.itemWrap}>
          <ProductVariation
            error={isError}
            setVariation={setVariation}
            variation={product.variation}
          />
        </div>
      )}
      <div className={classes.qtyWrap}>
        <Quantity
          qty={qty}
          id={product.id}
          setQty={setQty}
          max={product.maxCount}
        />
      </div>

      <div className={classes.productBuy}>
        <Button
          primary
          disabled={!isStock}
          content={t('add-to-cart')}
          onClick={addToCart}
        />
        <Link href="/cart">
          <a>
            <Button
              primary
              disabled={!isStock}
              onClick={addToCart}
              content={t('Buy-now')}
            />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ProductDetail;
