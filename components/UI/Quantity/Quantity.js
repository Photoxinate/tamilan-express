import React, { useState } from 'react'
import { Minus, Plus } from '../../Icons/Icons'

import classes from './Quantity.module.scss'


const Quantity = ({ id, qty, price, max, onChangeQty }) => {

  const [_qty, setQty] = useState(qty)

  const qtyIncrementtHandler = () => {
    setQty(prev => {
      if(prev !== max) {
        // onChangeQty(id, prev + 1, price)
        return prev + 1
      }
      return prev
    })
  }

  const qtyDecrementHandler = () => {
    if (_qty > 1) {
      setQty(prev => {
        // onChangeQty(id, prev - 1, price)
        return prev - 1
      })
    }
  }

  const qtyChangeHandler = e => {
    const qty = +e.target.value
    // if(qty > 1 && qty <= max)
    //   onChangeQty(id, qty, price)
  }

  return (
    <div className={classes.quantity}>
      <button className={classes.minus} onClick={qtyDecrementHandler}>
        <Minus size={16} color={'#333'}/>
      </button>
      <input
        name="quantity"
        type="number"
        onChange={qtyChangeHandler}
        value={_qty}
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
