import React, { useState, useEffect } from 'react';
import Quantity from '../../UI/Quantity/Quantity';
import DeleteButton from '../../UI/DeleteButton/DeleteButton';
import classes from '../CartTable.module.scss';

const ProductRow = ({product, onChangeQty, onRemoveProduct}) => {

  const [qty, setQty] = useState(product.qty)

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
          <Quantity qty={qty} setQty={setQty} id={product.id} onChangeQty={onChangeQty} max={product.maxQty} />
        </div>
        <div className={classes.col}>
          $ {product.price * qty}
          <DeleteButton onClicked={() => onRemoveProduct(product.id)} />
        </div>
      </div>
    </div>
  );
};




export default ProductRow;
