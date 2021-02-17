import React from 'react';
import * as actionTypes from '../../store/actions/actionTypes'
import { useRouter } from 'next/router'
import { connect } from 'react-redux';
import ProductImage from './ProductImage/ProductImage';
import ProductData from './ProductData/ProductData'
import ProductPrice from './ProductPrice/ProductPrice'
import Button from '../UI/Button/Button'
import DiscountLabel from './DiscountLabel/DiscountLabel'
import classes from './ProductCard.module.scss';

const ProductCard = ({product, ...props}) => {

  const router = useRouter()
  const discountLabel = (product.discount>0)?<DiscountLabel discount={product.discount}/>:null

  const onClicked = () => {
    router.push({
      pathname: '/product/[pid]',
      query: { pid: product.id },
    })
  }

  return (
    <div className={classes.prodCard} onClick={onClicked}>
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