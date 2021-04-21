import React from 'react';
import classes from './ProductPrice.module.scss';

const ProductPrice = ({price, discount}) => {

  if (discount > 0) {
    const savePrice = (price * discount) / 100
    const calculatedPrice = price - savePrice;
    return (
        <div className={classes.priceWrap}>
          <span className={classes.originalPrice}>${price}</span><span className={classes.calPrice}>${calculatedPrice}</span>
          <span className={classes.priceSave}>SAVE ${savePrice}</span>
        </div>
      );
  } else{
      return <div className={classes.priceWrap}>${price}</div>

  }
};

export default ProductPrice;
