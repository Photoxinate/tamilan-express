import React from 'react';
import ProductPrice from '../ProductPrice/ProductPrice';
import classes from './ProductDetail.module.scss';

const ProductDetail = ({ productDetail }) => {
  return (
    <div className={classes.prodDetail}>
      <div className={classes.prodName}>{productDetail.name}</div>
      <div className={classes.prodCategory}>{productDetail.category}</div>
      <ProductPrice
        price={productDetail.price}
        discount={productDetail.discount}
      />
      Stock :<span className={classes.prodStock}>In Stock </span>
      Weight : <span className={classes.prodWeight}>{productDetail.weight}</span>

    </div>
  );
};

export default ProductDetail;
