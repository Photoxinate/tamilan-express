import React from 'react';
import ProductDetail from './ProductDetail/ProductDetail';
import classes from './ProductModal.module.scss';

const ProductModal = ({ product }) => {
  return (
    <div className={classes.productModal}>
      <div className={classes.imgWrap}>
          <img src={product.img} alt={product.alt}/>
      </div>
      <ProductDetail productDetail={product} />
    </div>
  );
};

export default ProductModal;
