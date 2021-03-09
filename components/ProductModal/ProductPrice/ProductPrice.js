import React from 'react';
import classes from './ProductPrice.module.scss';

const ProductPrice = ({price, discount}) => {

  let discountedprice;

  if (discount > 0) {
    const savePrice = (price * discount) / 100
    discountedprice = price - savePrice;
    return (
        <div className={classes.priceWrap}>
          <div className={classes.originalPrice}>${price}</div>${discountedprice}
          <span className={classes.priceSave}>SAVE&nbsp;{savePrice}</span>
        </div>
      );
  } else{
      price = props.price
      return <div className={classes.priceWrap}>${price}</div>

  }
};

export default ProductPrice;
