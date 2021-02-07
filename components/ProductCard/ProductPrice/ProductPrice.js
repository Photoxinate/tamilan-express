import React from 'react';
import classes from '../ProductCard.module.scss';

const ProductPrice = (props) => {
  let price;
  
  if (props.discount>0) {
    price = props.price - ((props.price * props.discount) / 100);
    return (
      <div className={classes.priceWrap}>
        <div className={classes.originalPrice}>${props.price}</div>${price}
      </div>
    );
  } else {
    price = props.price
    return <div className={classes.priceWrap}>${price}</div>;
  }
};

export default ProductPrice;
