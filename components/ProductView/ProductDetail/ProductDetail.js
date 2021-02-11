import React from 'react';
import ProductPrice from '../ProductPrice/ProductPrice';
import ProductBuy from '../ProductBuy/ProductBuy'
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
      <div className={classes.itemWrap}>
        Stock :<span className={classes.prodStock}> In Stock </span>
      </div>
      <div className={classes.itemWrap}>
        Weight :{' '}
        <span className={classes.prodWeight}>{productDetail.weight}</span>
      </div>
      <hr/>
      <ProductBuy/>
    </div>
  );
};

export default ProductDetail;
