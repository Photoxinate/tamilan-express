import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../../store/actions/actionTypes';
import Link from 'next/link'
import ProductPrice from '../ProductPrice/ProductPrice';
import classes from './ProductDetail.module.scss';
import Quantity from '../../UI/Quantity/Quantity';
import Button from '../../UI/Button/Button';

const ProductDetail = (props) => {

  const product = props.product

  const addToCart = (product, qty) => {
    props.onAddProduct(product, qty)
    props.closeModal()
  }

  const [qty, setQty] = useState(1)

  return (
    <div className={classes.prodDetail}>
      <div className={classes.prodName}>{product.name}</div>
      <div className={classes.prodCategory}>{product.category}</div>
      <ProductPrice
        price={product.price}
        discount={product.discount}
      />
      <div className={classes.detail}>
        Stock :<span className={classes.prodStock}>In Stock </span>
      </div>
      <div className={classes.detail}>
        Weight :
        <span className={classes.prodWeight}>{product.weight}</span>
      </div>
      <hr />
      <Quantity max={product.maxQuantity} qty={qty} setQty={setQty}/>
      <div className={classes.btnWrap}>
        <Button text="Contniue Shopping" onClicked={() => addToCart(product, qty)}/>
        <Link href="/cart" passHref>
          <a>
            <Button text="Check Out" />
          </a>
        </Link>
      </div>
    </div>
  );
};


const mapDispatchToProps = dispatch => {
  return {
      onAddProduct: (product, qty) => dispatch({type: actionTypes.ADD_TO_CART, payload:{product:product, qty:qty}}),
      onRemoveProduct: (id) => dispatch({type: actionTypes.REMOVE_FROM_CART, payload:{id:id}}),
      closeModal: () => dispatch({type: actionTypes.CLOSE_MODAL})
  }
};

export default connect(null, mapDispatchToProps)(ProductDetail);
