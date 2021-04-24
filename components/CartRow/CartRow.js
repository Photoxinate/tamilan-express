import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Input from 'semantic-ui-react/dist/commonjs/elements/Input';
import { updateCart } from '../../store/actions/cart';
import classes from './CartRow.module.scss';


const CartRow = ({ product, checkout }) => {

  const [qty, setQty] = useState(product.qty)

  const dispatch = useDispatch()

  let total = product.discount && product.discount > 0 ? 
    (product.price - (product.price * product.discount / 100)) * product.qty : product.price * product.qty

  const qtyEnterHandler = e => {
    setQty(+e.target.value)
  }

  const qtyChangeHandler = () => {
    dispatch(updateCart(product, qty, 'cartPage'))
  }

  const productRemoveHandler = () => {
    dispatch(updateCart(product, 0, 'cartPage'))
  }

  const updateHTML = (qty != product.qty && qty > 0 && qty <= product.stock && qty <= product.maxCount) ? (
    <button 
      type='submit' 
      className={classes.update} 
      aria-label='update product quantity' 
      onClick={qtyChangeHandler}>Update</button>
  ) : null

  const priceHTML = product.discount && product.discount > 0 ? (
    <div className={classes.prices}>
      <span className={classes.price}>{ `$${(product.price - (product.price * product.discount / 100))}` }</span>
      <span className={classes.old}>{ `$${product.price}` }</span>
      <span className={classes.percent}>-{product.discount}%</span>
    </div>
  ) : (
    <div className={classes.prices}>
      <span className={classes.price}>{ `$${product.price}` }</span>
    </div>
  )

  const variationHTML = product.variations ? (
    <div className={classes.options}>
      {product.variations.map(vari => (<span className={classes.option}> {vari.value} </span>))}
    </div>
  ) : null

  return (
    <div className={checkout ? [classes.grid, classes.checkout].join(' ') : classes.grid}>
      <div className={classes.image}>
        <img width={120} height={120} src={`https://media.tamilanexpress.ca/product/thumb200/${product.image[0]}`} alt={product.name} />
      </div>
      <div className={classes.details}>
        <div className={classes.name}><Link href={`/product/${product._id}`}><a>
          {product.name}
        </a></Link></div>
        {variationHTML}
        {priceHTML}
      </div>
      
      <div className={classes.change}>
        <Input 
          label='Qty' 
          size='mini' 
          type='number' 
          className={classes.input} 
          min={0} 
          max={product.stock < product.maxCount ? product.stock : product.maxCount}
          defaultValue={product.qty} 
          onChange={qtyEnterHandler} />
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
