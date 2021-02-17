import React from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/actionTypes'
import ProductRow from './ProductRow/ProductRow'
import classes from './CartTable.module.scss';

const CartTable = (props) => {
  return (
    <div className={classes.table}>
      <div className={classes.row}>
        <div className={classes.col}><h2>SHOPPING CART</h2></div>
      </div>
      <hr/>
      {props.products.map((product, i) => (
        <ProductRow key={product.id} onChangeQty={props.onChangeQty} onRemoveProduct={props.onRemoveProduct} product={product}/>
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
      products: state.prdCart.products,
  }
};


const mapDispatchToProps = dispatch => {
  return {
    onChangeQty: (id, qty) => dispatch({type: actionTypes.CHANGE_QUANTITY, payload:{id:id, qty:qty}}),
      onAddProduct: (product, qty) => dispatch({type: actionTypes.ADD_TO_CART, payload:{product:product, qty:qty}}),
      onRemoveProduct: (id) => dispatch({type: actionTypes.REMOVE_FROM_CART, payload:{id:id}}),
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(CartTable);
