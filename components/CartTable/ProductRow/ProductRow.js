import React, { useEffect, useState } from 'react'
import Quantity from '../../UI/Quantity/Quantity'
import { XCircle } from '../../Icons/Icons'

import classes from '../CartTable.module.scss'


const ProductRow = ({product, onChangeQty, onRemoveProduct}) => {

  let total = product.price * product.qty

  useEffect(() => {
    total = product.price * product.qty
  }, [product])

  return (
    <div className={classes.row}>
      <div className={classes.imgCol}>
        <img src={product.img} alt={product.alt} />
      </div>
      <div className={classes.detailCol}>
        <div className={classes.col}>
          <div className={classes.name}>{product.name}</div>
          <div className={classes.price}>${product.price}</div>
        </div>
        <div className={classes.col}>
          <Quantity qty={product.qty} id={product.id} price={product.price} onChangeQty={onChangeQty} />
        </div>  
        <div className={classes.col}>
          $ {total}
        </div>
        <div className={[classes.col, classes.delete].join(' ')}>
          <button onClick={() => onRemoveProduct(product.id, product.price)} aria-label='remove' title='remove'> 
            <XCircle size={20} /> 
          </button>
        </div>
      </div>
    </div>
  );
};




export default ProductRow;
