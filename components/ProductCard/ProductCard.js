import React from 'react';
import ProductImage from './ProductImage/ProductImage';
import ProductData from './ProductData/ProductData'
import ProductPrice from './ProductPrice/ProductPrice'
import Button from '../UI/Button/Button'
import DiscountLabel from './DiscountLabel/DiscountLabel'
import ProductModal from '../ProductModal/ProductModal'
import classes from './ProductCard.module.scss';

const ProductCard = ({product}) => {

  const displayModal = () => {

  }

  const discountLabel = (product.discount)?<DiscountLabel discount={product.discount}/>:null
  return (
    <div className={classes.prodCard}>
      <ProductImage img={product.img} alt={product.alt} />
      {discountLabel}
      <ProductData product={product}/>
      <ProductPrice price={product.price} discount={product.discount}/>
      <Button text='Add to Cart' onClick={displayModal}/>
    </div>
  );
};

export default ProductCard