import React from 'react';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import * as actionTypes from '../../store/actions/actionTypes';
import Button from 'semantic-ui-react/dist/commonjs/elements/Button';
import useTranslation from 'next-translate/useTranslation';

import classes from './ProductCard2.module.scss';

const ProductCard2 = ({ product, ...props }) => {
  const dispatch = useDispatch();

  const { t } = useTranslation('common');

  const addToCartHandler = (e) => {
    e.preventDefault();
    dispatch({ type: actionTypes.SHOW_MODAL, product: product });
  };

  const price =
    product.discount > 0
      ? product.price - (product.price * product.discount) / 100
      : product.price;

  const discountLabel =
    product.discount > 0 ? (
      <span className={classes.discount}> {product.discount}% </span>
    ) : null;

  const originalPrice =
    product.discount > 0 ? (
      <div className={classes.originalPrice}> ${product.price} </div>
    ) : null;

  return (
    <article
      itemProp="itemListElement"
      itemScope
      itemType="https://schema.org/Product"
      className={classes.card}
    >
      <div className={classes.image}>
        <Link href={'/product/' + product._id}>
          <a>
            <img
              loading="lazy"
              itemProp="image"
              // src={product.image}
              src="https://workmacro.com/wp-content/uploads/2018/02/1-by-1-1024x1024.png"
              alt={product.name}
            />
          </a>
        </Link>
        {discountLabel}
      </div>

      <Link href={'/categories/' + product.category._id}>
        <a itemProp="category" className={classes.category}>
          {product.category.name}
        </a>
      </Link>

      <Link href={'/product/' + product._id}>
        <a itemProp="url">
          <h3 itemProp="name" className={classes.name}>
            {product.name}
          </h3>
        </a>
      </Link>

      <div
        itemProp="offers"
        itemScope
        itemType="https://schema.org/Offer"
        className={classes.price}
      >
        {originalPrice}
        <span itemProp="priceCurrency" content="USD">
          {' '}
          $
        </span>
        <span itemProp="price" content={price}>
          {price}
        </span>
      </div>

      <Button
        fluid
        primary
        compact
        content={t('add-to-cart')}
        onClick={addToCartHandler}
      />
    </article>
  );
};

export default ProductCard2;
