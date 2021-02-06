import React from 'react';
import ProductImage from './ProductImage/ProductImage';
import ProductData from './ProductData/ProductData'
import ProductPrice from './ProductPrice/ProductPrice'
import AddCartButton from '../UI/AddCartButton/AddCartButton'
import DiscountLabel from './DiscountLabel/DiscountLabel'
import {products} from '../../config/config'
import classes from './ProductCart.module.scss';

const ProductCart = (props) => {

  const product = products[0]

  const discountLabel = (product.discount)?<DiscountLabel discount={product.discount}/>:null
  return (
    <div className={classes.prodCard}>
      <ProductImage img={product.img} alt={product.alt} />
      {discountLabel}
      <ProductData product={product}/>
      <ProductPrice price={product.price} discount={product.discount}/>
      <AddCartButton/>
    </div>
  );
};

export default ProductCart