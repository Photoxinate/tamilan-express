import React from 'react';
import fetch from '../../config/fetch'
import ProductDescription from '../../components/ProductView/ProductDescription/ProductDescription';
import ProductDetail from '../../components/ProductView/ProductDetail/ProductDetail';
import ProductImageCarousel from '../../components/ProductView/ProductImageCarousel/ProductImageCarousel';
import classes from './ProductView.module.scss';
import BreadCrumb from '../../components/UI/BreadCrumb/BreadCrumb';
import Link from 'next/link'




const index = ({product}) => {
 
const sections = [
  { key: 'home', content: 'Home', as:Link, href:"/", link: true},
  { key: product.category.name, content: product.category.name, as:Link, href:"/categories/"+product.category._id, link: true },
  { key: product.name, content: product.name, active: true },
]

  return (
    <div className={classes.productContainer}>
      <BreadCrumb sections={sections}/>
      <div className={classes.productFlex}>
        <div className={classes.imgWrap}>
        <ProductImageCarousel type={product.type} images={product.image} name={product.name}/>
        </div>
        <ProductDetail product={product} />
      </div>
      <ProductDescription
        description={product.description}
        warranty={product.warranty}
      />
    </div>
  );
};

export const getStaticProps = async ctx => {
  const id = ctx.params.pid;
  // const response = await fetch(`products/${id}`)
  const response = await fetch(`products/${id}`)
  const product = { ...response.data }
  console.log("RESPONSE>>>>>",product);
  return {
      props: { product },
      revalidate: 60*5
  }
}

export const getStaticPaths = async () => {

  let products = []
  const response = await fetch('products?limit=30')
  const error = response.error
  const data = response.data

  if(!error)
      products = [ ...data.docs ]
  
  const paths = products.map(prod => ({
      params: { pid: prod._id }
  }))

  return {
      fallback: 'blocking',
      paths
  }
}

export default index;
