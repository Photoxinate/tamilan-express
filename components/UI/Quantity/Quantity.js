import React, { useRef } from 'react';
import { Plus, Minus } from '../../Icons/Icons';
import classes from './Quantity.module.scss';

const Quantity = (props) => {
  const quantityField = useRef(null);
  let qty = props.qty
  const increaseQuantity = () => {
    if (quantityField.current.value !== props.max) {
      // quantityField.current.value++
      props.setQty(qty++)
    }
  };

  const decreaseQuantity = () => {
    if (quantityField.current.value !== '1') {
      // quantityField.current.value--
      props.setQty(qty--)

    }
  };

  return (
    <div className={classes.quantity}>
      <button onClick={decreaseQuantity}>
        <Minus size={24} color="var(--accent)" />
      </button>
      <input
        ref={quantityField}
        name="quantity"
        type="number"
        readOnly
        value={props.qty}
        min="1"
        size="2"
        max={props.max}
      />
      <button onClick={increaseQuantity}>
        <Plus size={24} color="var(--accent)" />
      </button>
    </div>
  );
};

export default Quantity;
