import React from 'react';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import * as actionTypes from '../../store/actions/actionTypes';
import Button from 'semantic-ui-react/dist/commonjs/elements/Button';
import useTranslation from 'next-translate/useTranslation';

import classes from './ProductCard2.module.scss';

const ProductCard2 = ({ product, ...props }) => {
  const dispatch = useDispatch();

  let price;

  const { t } = useTranslation('common');

  const onClicked = (e) => {
    e.preventDefault();
    dispatch({ type: actionTypes.SHOW_MODAL, payload: { product: product } });
  };

  const getPrice = () => {
    if (product.discount > 0) {
      price = product.price - (product.price * product.discount) / 100;
      return (
        <div
          itemProp="offers"
          itemScope
          itemType="https://schema.org/Offer"
          className={classes.price}
        >
          <div className={classes.originalPrice}>${product.price}</div>
          <span itemProp="priceCurrency" content="USD">
            $
          </span>
          <span itemProp="price" content={price}>
            {price}
          </span>
        </div>
      );
    } else {
      price = product.price;
      return (
        <div
          itemProp="offers"
          itemScope
          itemType="https://schema.org/Offer"
          className={classes.price}
        >
          ${price}
        </div>
      );
    }
  };

  const priceComp = getPrice();

  return (
    <article
      itemProp="itemListElement"
      itemScope
      itemType="https://schema.org/Product"
      className={classes.card}
    >

      <div className={classes.image}>
        <Link href={`/product/${encodeURIComponent(product.id)}`}>
          <a>
            <img itemProp="image" src={product.img} alt={product.name} />
          </a>
        </Link>
        {product.discount > 0 ? (
          <span className={classes.discount}>{product.discount}%</span>
        ) : null}
      </div>

      <span itemProp="category" className={classes.category}>
        {product.category}
      </span>

      <Link href={'/product/' + product.id}>
        <a itemProp="url">
          <h3 itemProp="name" className={classes.name}>
            {product.name}
          </h3>
        </a>
      </Link>
      {priceComp}
      <Button fluid primary content={t('add-to-cart')} onClick={onClicked} />
    </article>
  );
};

export default ProductCard2;
