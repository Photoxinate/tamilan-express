import React, { useRef } from 'react';
import { Plus, Minus } from '../../Icons/Icons';
import classes from './Quantity.module.scss';

const Quantity = (props) => {
  const quantityField = useRef(null);
 
  const increaseQuantity = () => {
    if (quantityField.current.value !== props.max) {
      props.setQty(props.qty+1)
      if(props.onChangeQty){
        props.onChangeQty(props.id, props.qty)
      }
    }
  };

  const decreaseQuantity = () => {
    if (quantityField.current.value !== '1') {
      props.setQty(props.qty-1)
      if(props.onChangeQty){
        props.onChangeQty(props.id, props.qty)
      }
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
