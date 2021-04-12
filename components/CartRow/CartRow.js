import React, { useEffect } from 'react';
import { XCircle } from '../Icons/Icons';
import Quantity from '../UI/Quantity/Quantity';
import Input from 'semantic-ui-react/dist/commonjs/elements/Input';
import classes from './CartRow.module.scss';


const CartRow = ({product, onChangeQty, onRemoveProduct}) => {

  let total = product.price * product.qty

  useEffect(() => {
    total = product.price * product.qty
  }, [product])

  return (
    <div className={classes.grid}>
      <div className={classes.image}>
        <img width={120} height={120} src={'https://specials-images.forbesimg.com/imageserve/5f3c29cb61683479eecdf8fb/960x0.jpg?fit=scale'} alt={product.name} />
      </div>
      <div className={classes.details}>
        <div className={classes.name}>
          Name of the product - goes here little doodle
        </div>
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
        <Input label='qty' size='mini' type='number' className={classes.input} min={0} defaultValue={product.qty} />
        <div className={classes.total}>
          $1.25
        </div>
        <div className={classes.actions}>
          <button className={classes.update} aria-label='update product quantity'>Update</button>
          <button aria-label='remove product from cart'>Remove</button>
        </div>
      </div>
    </div>
  )

  return (
    <div className={classes.row}>
      <div className={classes.imgCol}>
        <img src={product.image[0]} alt={product.alt} />
      </div>
      <div className={classes.detailCol}>
        <div className={classes.col}>
          <div className={classes.name}>{product.name}</div>
          <div className={classes.price}>${product.price}</div>
        </div>
        <div className={classes.col}>
          <Input label='qty' size='mini' type='number' className={classes.input} min={0} defaultValue={product.qty} />
          <span>
            $ {total}
          </span>
        </div>  
        <div className={[classes.col, classes.delete].join(' ')}>
          <button onClick={() => onRemoveProduct(product.id, product.price)} aria-label='remove' title='remove'> 
            <XCircle size={20} /> 
          </button>
        </div>
      </div>
    </div>
  );
};




export default CartRow;
