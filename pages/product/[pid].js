import React from 'react';
import fetch from '../../config/fetch';
import ProductDescription from '../../components/ProductView/ProductDescription/ProductDescription';
import ProductDetail from '../../components/ProductView/ProductDetail/ProductDetail';
import ProductImageCarousel from '../../components/ProductView/ProductImageCarousel/ProductImageCarousel';
import ProductCarousel from '../../components/ProductCarousel/ProductCarousel';
import classes from './ProductView.module.scss';
import BreadCrumb from '../../components/UI/Breadcrumb/Breadcrumb';
import Link from 'next/link';
import { stringify } from 'qs';
import Head from 'next/head'

const index = ({ product, relatedProds }) => {
  const sections = [
    { key: 'home', content: 'Home', as: Link, href: '/' },
    {
      key: product.category.name,
      content: product.category.name,
      as: Link,
      href: '/categories/' + product.category._id,
    },
    { key: product.name, content: product.name, active: true },
  ];

  return (
    <div className={classes.productContainer}>
      <Head>
        <title>{product.name} - Tamilan Express</title>
        <meta name='description' content={product.description.replace(/(&nbsp;|<([^>]+)>)/ig, '')} />
      </Head>
      <BreadCrumb sections={sections} />
      <div className={classes.productFlex}>
        <div className={classes.imgWrap}>
          <ProductImageCarousel
            type={product.type}
            images={product.image}
            name={product.name}
          />
        </div>
        <div className={classes.prodDetailWrap}>
          <ProductDetail product={product} />
        </div>
      </div>
      <ProductDescription
        description={product.description}
        warranty={product.warranty}
      />
      {relatedProds && <div className={classes.carouselWrap}>
        <ProductCarousel
          className={classes.carouselWrap}
          products={relatedProds}
          carouselTitle="Related Products"
        />
      </div>}
    </div>
  );
};

export const getStaticProps = async (ctx) => {
  const id = ctx.params.pid;

  const response = await fetch(`products/${id}?populate=category`);
  const product = { ...response.data };

  const relatedProdsFilter = {
    filter: {
      category: product.category._id,
    },
  };

  const relatedProdsresponse = await fetch(
    `products/?${stringify(relatedProdsFilter)}&populate=category`
  );
  const relatedProds = [...relatedProdsresponse.data.docs];

  return {
    props: { product, relatedProds },
    revalidate: 60 * 5,
  };
};

export const getStaticPaths = async () => {
  let products = [];
  const response = await fetch('products?limit=30');
  const error = response.error;
  const data = response.data;

  if (!error) products = [...data.docs];

  const paths = products.map((prod) => ({
    params: { pid: prod._id },
  }));

  return {
    fallback: 'blocking',
    paths,
  };
};

export default index;
