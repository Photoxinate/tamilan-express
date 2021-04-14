import { useSession } from 'next-auth/client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Input from 'semantic-ui-react/dist/commonjs/elements/Input';
import { updateCart } from '../../store/actions/cart';
import classes from './CartRow.module.scss';


const CartRow = ({product, onChangeQty, onRemoveProduct}) => {

  const [qty, setQty] = useState(product.qty)

  const dispatch = useDispatch()

  const [session] = useSession()

  let total = product.price * product.qty

  useEffect(() => {
    total = product.price * product.qty
  }, [product])

  const qtyEnterHandler = e => {
    setQty(+e.target.value)
  }

  const qtyChangeHandler = () => {
    dispatch(updateCart(session, product.name, product._id, qty))
  }

  const productRemoveHandler = () => {
    dispatch(updateCart(session, product.name, product._id, 0))
  }

  const updateHTML = (qty != product.qty && qty > 0) ? (
    <button 
      type='submit' 
      className={classes.update} 
      aria-label='update product quantity' 
      onClick={qtyChangeHandler}>Update</button>
  ) : null

  return (
    <div className={classes.grid}>
      <div className={classes.image}>
        <img width={120} height={120} src={'https://specials-images.forbesimg.com/imageserve/5f3c29cb61683479eecdf8fb/960x0.jpg?fit=scale'} alt={product.name} />
      </div>
      <div className={classes.details}>
        <div className={classes.name}><Link href={`/products/001`}><a>
          Name of the product - goes here little doodle
        </a></Link></div>
        <div className={classes.options}>
          <span className={classes.option}>
            Color
          </span>
          <span className={classes.option}>
            Size
          </span>
        </div>
        <div className={classes.prices}>
          <span className={classes.price}>$1.25</span>
          <span className={classes.old}>$1.95</span>
          <span className={classes.percent}>15%</span>
        </div>
      </div>
      
      <div className={classes.change}>
        <Input label='Qty' size='mini' type='number' className={classes.input} min={0} defaultValue={product.qty} onChange={qtyEnterHandler} />
        <div className={classes.total}>
          $1.25
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
