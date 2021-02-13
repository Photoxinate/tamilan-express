import React from 'react';
import { products } from '../../config/config';
import ProductDetail from './ProductDetail/ProductDetail';
import { Close } from '../Icons/Icons';
import classes from './ProductModal.module.scss';

const ProductModal = (props) => {
  // const product = {...props.product}
  const product = products[0];
  if (!props.show) {
    return null;
  }
  return (
    <div className={classes.wrap}>
      <div className={classes.productModal}>
        <button className={classes.closeBtn}>
          <Close size="24" color="var(--accent)" />
        </button>
        <div className={classes.imgWrap}>
          <img src={product.img} alt={product.alt} />
        </div>
        <ProductDetail productDetail={product} />
      </div>
    </div>
  );
};

export default ProductModal;
