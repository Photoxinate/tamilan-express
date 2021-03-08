import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as actionTypes from '../../../store/actions/actionTypes';
import Link from 'next/link'
import ProductPrice from '../ProductPrice/ProductPrice';
import classes from './ProductDetail.module.scss';
import Quantity from '../../UI/Quantity/Quantity';
import Button from '../../UI/Button/Button';

const ProductDetail = (props) => {

  const product = props.product
  const dispatch = useDispatch()
  const [qtyVal, setQtyVal] = useState(product.qty)

  const addToCart = (product, qty) => {
    dispatch({type: actionTypes.ADD_TO_CART, payload:{product:product, qty:qty}})
    dispatch({type: actionTypes.CLOSE_MODAL})
  }


  return (
    <div className={classes.prodDetail}>
      <div className={classes.prodCategory}>{product.category}</div>
      <div className={classes.prodName}>{product.name}</div>
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
     
      <Quantity max={product.maxQty} setQtyVal={setQtyVal} qty={product.qty}/>
      <div className={classes.btnWrap}>
        <Button text="Contniue Shopping" onClicked={() => addToCart(product, qtyVal)}/>
        <Link href="/cart" >
          <a>
            <Button text="Check Out" onClicked={() => addToCart(product, qtyVal)}/>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ProductDetail;
