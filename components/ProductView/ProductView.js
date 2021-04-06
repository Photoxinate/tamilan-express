import React from 'react';
import ProductDescription from './ProductDescription/ProductDescription';
import ProductDetail from './ProductDetail/ProductDetail';
import { productDescription } from '../../config/config';
import classes from './ProductView.module.scss';

const ProductView = ({ product }) => {
  return (
    <>
      <div className={classes.productView}>
        <div className={classes.imgWrap}>
          <img src={product.img} alt={product.alt} />
        </div>
        <ProductDetail product={product} />
      </div>
      <ProductDescription
        description={productDescription.desc}
        warranty={productDescription.warranty}
      />
    </>
  );
};

export default ProductView;
