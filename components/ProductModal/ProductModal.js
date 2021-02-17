import React from 'react';
import ProductDetail from './ProductDetail/ProductDetail';
import { Close } from '../Icons/Icons';
import classes from './ProductModal.module.scss';

const ProductModal = (props) => {

  if (!props.isShowModal) {
    return null;
  }
  return (
    <div className={classes.wrap}>
      <div className={classes.productModal}>
        <button className={classes.closeBtn} onClick={props.closeModal}>
          <Close size="24" color="var(--accent)" />
        </button>
        <div className={classes.imgWrap}>
          <img src={props.product.img} alt={props.product.alt} />
        </div>
        <ProductDetail product={props.product} setShow={props.setShow} />
      </div>
    </div>
  );
};

export default ProductModal;
