import React from 'react';
import classes from '../ProductCart.module.scss';

const ProductPrice = (props) => {
  let price;
  price = (props.price * props.discount) / 100;
  if (props.discount) {
    return (
      <div className={classes.priceWrap}>
        <div className={classes.originalPrice}>${props.price}</div>${price}
      </div>
    );
  } else {
    return <div className={classes.priceWrap}>${price}</div>;
  }
};

export default ProductPrice;
