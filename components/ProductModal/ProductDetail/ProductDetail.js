import React from 'react';
import ProductPrice from '../ProductPrice/ProductPrice';
import classes from './ProductDetail.module.scss';
import Quantity from '../../UI/Quantity/Quantity';
import Button from '../../UI/Button/Button';

const ProductDetail = ({ productDetail }) => {
  return (
    <div className={classes.prodDetail}>
      <div className={classes.prodName}>{productDetail.name}</div>
      <div className={classes.prodCategory}>{productDetail.category}</div>
      <ProductPrice
        price={productDetail.price}
        discount={productDetail.discount}
      />
      <div className={classes.detail}>
        Stock :<span className={classes.prodStock}>In Stock </span>
      </div>
      <div className={classes.detail}>
        Weight :
        <span className={classes.prodWeight}>{productDetail.weight}</span>
      </div>
      <hr />
      <Quantity max="10" />
      <div className={classes.btnWrap}>
        <Button text="Contniue Shopping" />
        <Button text="Check Out" />
      </div>
    </div>
  );
};

export default ProductDetail;
