import React from 'react';
import * as actionTypes from '../../store/actions/actionTypes'
import Link from 'next/link'
import { useDispatch } from 'react-redux';
import ProductImage from './ProductImage/ProductImage';
import ProductData from './ProductData/ProductData'
import ProductPrice from './ProductPrice/ProductPrice'
import Button from "semantic-ui-react/dist/commonjs/elements/Button"
import DiscountLabel from './DiscountLabel/DiscountLabel'
import ProductModal from '../NewModal/ProductModal'
import classes from './ProductCard.module.scss';
import useTranslation from 'next-translate/useTranslation'


const ProductCard = ({product, ...props}) => {

  const dispatch = useDispatch()
  const { t } = useTranslation('common')


  const discountLabel = (product.discount>0)?<DiscountLabel discount={product.discount}/>:null

  const onClicked = (e) =>{
    e.preventDefault()
    dispatch({type:actionTypes.SHOW_MODAL, payload:{product:product}})
  }
  

  return (
    <Link href={`/product/${encodeURIComponent(product.id)}`}>
      <div className={classes.prodCard} >
      <ProductImage img={product.img} alt={product.alt} />
      {discountLabel}
      <ProductData product={product}/>
      <ProductPrice price={product.price} discount={product.discount}/>
     <div className={classes.buttonWrap}>
     <Button primary content={t('add-to-cart')} onClick={onClicked}/>

     </div>
      {/* <ProductModal product={product} /> */}
    </div>
    </Link>
    
  );
};


export default ProductCard;
