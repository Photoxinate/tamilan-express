import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Quantity from '../../UI/Quantity/Quantity';
import DeleteButton from '../../UI/DeleteButton/DeleteButton';
import Product from '../Product/Product';
import classes from '../CartTable.module.scss';

const ProductRow = ({ product, ...props }) => {
  const [qty, setQty] = useState(product.qty);

  return (
    <div key={product.id} className={classes.row}>
      <div className={classes.imgCol}>
        <img src={product.img} alt={product.alt} />
      </div>
      <div className={classes.detailCol}>
        <div className={classes.col}>
          <div className={classes.name}>{product.name}</div>
          <div className={classes.price}>${product.price}</div>
        </div>
        <div className={classes.col}>
          <Quantity qty={qty} setQty={setQty} max={product.maxQty} />
        </div>
        <div className={classes.col}>
          $ {product.price * qty}
          <DeleteButton onClicked={() => props.onRemoveProduct(product.id)} />
        </div>
      </div>
    </div>
  );
};

// const mapStateToProps = state => {
//     return {
//         products: state.prdCart.products,
//     }
//   };

//   const mapDispatchToProps = dispatch => {
//     return {
//         onAddProduct: (product, qty) => dispatch({type: actionTypes.ADD_TO_CART, payload:{product:product, qty:qty}}),
//         onRemoveProduct: (id) => dispatch({type: actionTypes.REMOVE_FROM_CART, payload:{id:id}}),
//     }
//   }
// export default connect(mapStateToProps, mapDispatchToProps)(ProductRow);
export default ProductRow;
