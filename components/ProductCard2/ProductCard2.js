import React from 'react';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import * as actionTypes from '../../store/actions/actionTypes';
import Button from 'semantic-ui-react/dist/commonjs/elements/Button';
import useTranslation from 'next-translate/useTranslation';

import classes from './ProductCard2.module.scss';

const ProductCard2 = ({ product }) => {
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
      <div className={classes.discount}> <span>{product.discount}%</span> </div>
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
              // src='https://betterstudio.com/wp-content/uploads/2019/05/1-1-instagram-1024x1024.jpg'
              src={"https://media.tamilanexpress.ca/product/thumb400/" + product.image[0]}
              alt={"image of" + product.name}
            />
          </a>
        </Link>
      </div>

      {discountLabel}

      <div className={classes.details}>

        {product.category ? 
          <Link href={'/categories/' + product.category._id}>
            <a itemProp="category" className={classes.category}>
              {product.category.name}
            </a>
          </Link> : 
          <a className={classes.category} style={{color: 'white', cursor: 'default'}}>
            No Category
          </a>
        }

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

      </div>

    </article>
  );
};

export default ProductCard2;
