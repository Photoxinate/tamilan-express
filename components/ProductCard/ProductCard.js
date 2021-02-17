import React from 'react';
import * as actionTypes from '../../store/actions/actionTypes'
import { connect } from 'react-redux';
import ProductImage from './ProductImage/ProductImage';
import ProductData from './ProductData/ProductData'
import ProductPrice from './ProductPrice/ProductPrice'
import Button from '../UI/Button/Button'
import DiscountLabel from './DiscountLabel/DiscountLabel'
import classes from './ProductCard.module.scss';

const ProductCard = (props) => {

 
  const product = props.product
  const discountLabel = (product.discount>0)?<DiscountLabel discount={product.discount}/>:null
  return (
    <div className={classes.prodCard}>
      <ProductImage img={product.img} alt={product.alt} />
      {discountLabel}
      <ProductData product={product}/>
      <ProductPrice price={product.price} discount={product.discount}/>
      <Button text='Add to Cart' onClicked={() => props.showModal(product)}/>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return{
    showModal: (product) => dispatch({type:actionTypes.SHOW_MODAL, payload:{product:product}})
  }
}

export default connect(null, mapDispatchToProps)(ProductCard)