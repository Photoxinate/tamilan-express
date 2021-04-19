import React, { useState } from 'react'
import { Minus, Plus } from '../../Icons/Icons'

import classes from './Quantity.module.scss'


const Quantity = ({ setQty, qty, max, }) => {


  const qtyIncrementtHandler = () => {
    setQty(prev => {
      if(prev !== max) {
        return prev + 1
      }
      return prev
    })
  }

  const qtyDecrementHandler = () => {
    if (qty > 1) {
      setQty(prev => {
        return prev - 1
      })
      return prev
    }
  }

  return (
    <div className={classes.quantity}>
      <button className={classes.minus} onClick={qtyDecrementHandler}>
        <Minus size={16} color={'#333'}/>
      </button>
      <input
        name="quantity"
        type="number"
        value={qty}
        min="1"
        size="2"
        max={max}
      />
      <button className={classes.plus} onClick={qtyIncrementtHandler}>
        <Plus size={16} color={'#333'}/>
      </button>
    </div>
  );
};

export default Quantity;
