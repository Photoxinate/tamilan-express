import React, { useState, useEffect } from 'react';
import Quantity from '../../UI/Quantity/Quantity';
import DeleteButton from '../../UI/DeleteButton/DeleteButton';
import Product from '../Product/Product';
import classes from '../CartTable.module.scss';

const ProductRow = ({ product, ...props }) => {
  const [qty, setQty] = useState(product.qty);

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
          <Quantity qty={qty} id={product.id} onChangeQty={props.onChangeQty} setQty={setQty} max={product.maxQty} />
        </div>
        <div className={classes.col}>
          $ {product.price * qty}
          <DeleteButton onClicked={() => props.onRemoveProduct(product.id)} />
        </div>
      </div>
    </div>
  );
};




export default ProductRow;
