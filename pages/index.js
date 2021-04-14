import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';
import React from 'react';
import Banner from '../components/Banner/Banner';
import Category from '../components/Category/Category';
import HomeItemContainer from '../components/HomeItemContainer/HomeItemContainer';
import ProductCarousel from '../components/ProductCarousel/ProductCarousel';
import { banners, products } from '../config/config';
import fetch from '../config/fetch';

const Home = ({ categories, error }) => {

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
  const categoriesResponse = await fetch('categories?limit=10')
  const error = categoriesResponse.error

  if(!error)
    categories = [...categoriesResponse.data]

  return {
    props: {
      // initialReduxState: {
      //   cart: {
      //     products: [],
      //     count: 0,
      //     total: 0,
      //   },
      //   ui: {
      //     show: false,
      //     product: null,
      //   },
      // },
      categories,
      error
    },
    revalidate: 60,
  };
};

export default Home;
