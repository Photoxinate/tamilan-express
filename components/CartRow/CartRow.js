import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Input from 'semantic-ui-react/dist/commonjs/elements/Input';
import { updateCart } from '../../store/actions/cart';
import classes from './CartRow.module.scss';


const CartRow = ({ product }) => {

  const [qty, setQty] = useState(product.qty)

  const dispatch = useDispatch()

  let total = product.discount && product.discount > 0 ? product.discount * product.qty : product.price * product.qty

  const qtyEnterHandler = e => {
    setQty(+e.target.value)
  }

  const qtyChangeHandler = () => {
    dispatch(updateCart(product, qty, 'cartPage'))
  }

  const productRemoveHandler = () => {
    dispatch(updateCart(product, 0, 'cartPage'))
  }

  const updateHTML = (qty != product.qty && qty > 0) ? (
    <button 
      type='submit' 
      className={classes.update} 
      aria-label='update product quantity' 
      onClick={qtyChangeHandler}>Update</button>
  ) : null

  const priceHTML = product.discount && product.discount > 0 ? (
    <div className={classes.prices}>
      <span className={classes.price}>{ `$${product.discount}` }</span>
      <span className={classes.old}>{ `$${product.price}` }</span>
      <span className={classes.percent}>{Math.round(100 - product.price * 100 / product.discount)}%</span>
    </div>
  ) : (
    <div className={classes.prices}>
      <span className={classes.price}>{ `$${product.price}` }</span>
    </div>
  )

  const variationHTML = product.variation ? (
    <div className={classes.options}>
      {product.variation.map(vari => (<span className={classes.option}> {vari.value} </span>))}
    </div>
  ) : null

  return (
    <div className={classes.grid}>
      <div className={classes.image}>
        <img width={120} height={120} src={'https://specials-images.forbesimg.com/imageserve/5f3c29cb61683479eecdf8fb/960x0.jpg?fit=scale'} alt={product.name} />
      </div>
      <div className={classes.details}>
        <div className={classes.name}><Link href={`/products/${product._id}`}><a>
          {product.name}
        </a></Link></div>
        {variationHTML}
        {priceHTML}
      </div>
      
      <div className={classes.change}>
        <Input label='Qty' size='mini' type='number' className={classes.input} min={0} defaultValue={product.qty} onChange={qtyEnterHandler} />
        <div className={classes.total}>
          ${total}
        </div>
        <div className={classes.actions}>
          {updateHTML}
          <button aria-label='remove product from cart' onClick={productRemoveHandler}>Remove</button>
        </div>
      </div>
    </div>
  )
};




export default CartRow;
