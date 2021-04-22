import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';
import React from 'react';
import Banner from '../components/Banner/Banner';
import Category from '../components/Category/Category';
import HomeItemContainer from '../components/HomeItemContainer/HomeItemContainer';
import ProductCarousel from '../components/ProductCarousel/ProductCarousel';
import { banners } from '../config/config';
import fetch from '../config/fetch';

const Home = ({ categories, cartProds, recentProds, dealProds, buy1get1Prods, buy1get2Prods }) => {

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

      {dealProds && <ProductCarousel products={dealProds} carouselTitle={t('Caro-DOD')}/>}
      {buy1get1Prods && <ProductCarousel products={buy1get1Prods} carouselTitle={t('home:buy1-get1')}/>}
      {buy1get2Prods && <ProductCarousel products={buy1get2Prods} carouselTitle={t('home:buy1-get2')}/>}
      {recentProds && <ProductCarousel products={recentProds} carouselTitle={t('Caro-New')}/>}
      {cartProds && <ProductCarousel products={cartProds} carouselTitle={t('add-to-cart')}/>}
    </>
  );
};

export const getStaticProps = async () => {

  let categories = []

  const categoriesResponse = await fetch('categories?limit=10&sort=parent')
  const homeProdResponse = await fetch('products?home=true')
  const bannersResponse = await fetch('settings/banners')

  const error = categoriesResponse.error
  const data = categoriesResponse.data

  if(!error)
    categories = [...data.docs]
    
  return {
    props: {
      categories,
      error,
      ...homeProdResponse.data,
      ...bannersResponse
    },
    revalidate: 60,
  };
};
export default Home;
