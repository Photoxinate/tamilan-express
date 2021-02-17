import React, {useState} from 'react';
import { connect } from 'react-redux'
import * as actionTypes from '../../../store/actions/actionTypes'
import ProductPrice from '../ProductPrice/ProductPrice';
import Quantity from '../../UI/Quantity/Quantity'
import ProductBuy from '../ProductBuy/ProductBuy'
import classes from './ProductDetail.module.scss';

const ProductDetail = ({ product, ...props }) => {

  const [qty, setQty] = useState(1);

  return (
    <div className={classes.prodDetail}>
      <div className={classes.prodName}>{product.name}</div>
      <div className={classes.prodCategory}>{product.category}</div>
      <ProductPrice
        price={product.price}
        discount={product.discount}
      />
      <div className={classes.itemWrap}>
        Stock :<span className={classes.prodStock}> In Stock </span>
      </div>
      <div className={classes.itemWrap}>
        Weight :{' '}
        <span className={classes.prodWeight}>{product.weight}</span>
      </div>
      <hr/>
      <Quantity qty={qty} id={product.id} onChangeQty={props.onChangeQty} setQty={setQty} max={product.maxQty} />
      <ProductBuy onAddProduct={()=>onAddProduct(product, )}/>
    </div>
  );
};

const mapStateToProps = state => {

}
const mapDispatchToProps = dispatch => {
  return{
    onAddProduct: (product, qty) => dispatch({type: actionTypes.ADD_TO_CART, payload:{product:product, qty:qty}})
  }
}


export default connect(mapStateToProps , mapDispatchToProps)(ProductDetail);
