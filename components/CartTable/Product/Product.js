import React from 'react';
import classes from './Product.module.scss';

const Product = ({ product }) => {
  return (
    <div className={classes.product}>
      <img src={product.img} alt={product.alt} />
      <div className={classes.detail}>
        <div className={classes.name}>{product.name}</div>
        <div className={classes.price}>{product.price}</div>
      </div>
    </div>
  );
};

export default Product;
