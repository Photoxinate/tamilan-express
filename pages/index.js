import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';
import React from 'react';
import Banner from '../components/Banner/Banner';
import Category from '../components/Category/Category';
import HomeItemContainer from '../components/HomeItemContainer/HomeItemContainer';
import ProductCarousel from '../components/ProductCarousel/ProductCarousel';
import { banners } from '../config/config';
import fetch from '../config/fetch';

const Home = ({ categories, products, error }) => {

  console.log('[home] rendered')

  const { t } = useTranslation('common')

  return (
    <>
      <Head>
        <title>Tamilan Express</title>
      </Head>
      <Banner banners={banners}/>
      <HomeItemContainer title={t('home:explore-categories')} id='categories'>
        <Category categories={categories} />
      </HomeItemContainer>

      <ProductCarousel products={products} carouselTitle={t('Caro-DOD')}/>
      <ProductCarousel products={products} carouselTitle={t('Caro-New')}/>
      <ProductCarousel products={products} carouselTitle={t('add-to-cart')}/>
    </>
  );
};

export const getStaticProps = async () => {

  let categories = []
  let products = []
  const categoriesResponse = await fetch('categories?limit=10&sort=parent')
  const prodResponse = await fetch('products?limit=10')
  const prodError = prodResponse.error
  const error = categoriesResponse.error
  const data = categoriesResponse.data
  const prodData = prodResponse.data


  if(!error)
    categories = [...data.docs]

  if(!prodError)
    products = [...prodData.docs]
    
  return {
    props: {
      categories,
      products,
      error,
      prodError
    },
    revalidate: 60,
  };
};
export default Home;
