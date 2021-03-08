import React, { useRef } from 'react';
import { Plus, Minus } from '../../Icons/Icons';
import classes from './Quantity.module.scss';

const Quantity = (props) => {
  const quantityField = useRef(null);

  const increaseQuantity = () => {
    console.log('CLICKED');
    if (quantityField.current.value !== props.max) {
      console.log('QTY_FROM_QUANTITY_BEFORE', props.qty);
      props.setQty(props.qty+1)
      if(props.onChangeQty){
        console.log('QTY_FROM_QUANTITY', props.qty);
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
      <button className={classes.minusIcon} onClick={decreaseQuantity}>
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
