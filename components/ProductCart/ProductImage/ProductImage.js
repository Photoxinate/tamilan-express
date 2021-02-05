import React from 'react';
import classes from '../ProductCart.module.scss';

const ProductImage = (props) => (
  <div className={classes.imgWrap}>
    <img width='100%' src='./product-images/anchor.png' alt={props.alt} />
  </div>
);

export default ProductImage;
