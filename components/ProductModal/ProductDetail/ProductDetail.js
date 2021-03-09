import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as actionTypes from '../../../store/actions/actionTypes';
import Link from 'next/link'
import ProductPrice from '../ProductPrice/ProductPrice';
import classes from './ProductDetail.module.scss';
import Quantity from '../../UI/Quantity/Quantity';
import Button from 'semantic-ui-react/dist/commonjs/elements/Button';

const ProductDetail = (props) => {

  const product = props.product
  const dispatch = useDispatch()
  const [qty, setQty] = useState(product.qty)

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
     
      <Quantity max={product.maxQty} setQty={setQty}  qty={qty}/>
      <div className={classes.btnWrap}>
        <Button content="Contniue Shopping" onClicked={() => addToCart(product, qty)}/>
        <Link href="/cart" >
          <a>
            <Button content="Check Out" onClicked={() => addToCart(product, qty)}/>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ProductDetail;
