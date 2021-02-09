import React from 'react';
import classes from '../ProductCard.module.scss';

const ProductData = ({ product }) => {
  return (
    <div className={classes.dataWrap}>
      <div className={classes.prodCategory}>{product.category}</div>
      <div className={classes.prodName}>{product.name}</div>
    </div>
  );
};

export default ProductData;
