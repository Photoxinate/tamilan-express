import React from 'react';
import classes from './ProductPrice.module.scss';

const ProductPrice = (props) => {

  let price;

  if (props.discount > 0) {
    const savePrice = (props.price * props.discount) / 100
    price = props.price - savePrice;
    return (
        <div className={classes.priceWrap}>
          <div className={classes.originalPrice}>${props.price}</div>${price}
          <span className={classes.priceSave}>SAVE&nbsp;{savePrice}</span>
        </div>
      );
  } else{
      price = props.price
      return <div className={classes.priceWrap}>${price}</div>

  }
};

export default ProductPrice;
