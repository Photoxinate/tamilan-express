import React from 'react';
import Product from './Product/Product';
import Quantity from '../UI/Quantity/Quantity'
import DeleteButton from '../UI/DeleteButton/DeleteButton'
import classes from './CartTable.module.scss';

const CartTable = (props) => {
  return (
    <div className={classes.table}>
      <div className={classes.row}>
        <div className={classes.col}><h2>SHOPPING CART</h2></div>
      </div>
      <hr/>
      {props.products.map((product, i) => (
        <div key={product.id} className={classes.row}>
          <div className={classes.col}>
            <Product product={product} />
          </div>
          <div className={classes.col}><Quantity max='10'/></div>
          <div className={classes.col}>$ {product.price}</div>
          <div className={classes.col}><DeleteButton/></div>
        </div>
      ))}
    </div>
  );
};

export default CartTable;
