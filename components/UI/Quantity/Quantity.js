import React from 'react';
import classes from './Quantity.module.scss'

const Quantity = (props) => {
  return (
    <div className={classes.quantity}>
      <button>Minus</button>
      <input type="number" id="quantity" name="quantity" min="1" max={props.max}/>
      <button>Plus</button>
    </div>
  );
};

export default Quantity;
