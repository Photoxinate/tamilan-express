import React from 'react';
import classes from '../ProductCard.module.scss';

const ProductImage = (props) => (
  <div className={classes.imgWrap}>
    <img src={props.img} alt={props.alt} />
  </div>
);

export default ProductImage;
