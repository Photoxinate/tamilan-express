import React from 'react';
import ProductImage from './ProductImage/ProductImage';
import ProductData from './ProductData/ProductData'
import ProductPrice from './ProductPrice/ProductPrice'
import AddCartButton from '../UI/AddCartButton/AddCartButton'
import classes from './ProductCart.module.scss';

const product = {
  category: 'Dairy and Milk',
  name: 'Anchor',
  alt: 'anchor image',
  weight: '400g',
  tamil: '',
  price: '40.50',
  discount: '40',
};

const ProductCart = (props) => {
  return (
    <div className={classes.card}>
      <ProductImage img={product.img} alt={product.alt} />
      <ProductData product={product}/>
      <ProductPrice price={product.price} discount={product.discount}/>
      <AddCartButton/>
    </div>
  );
};

export default ProductCart