import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';
import React from 'react';
import Banner from '../components/Banner/Banner';
import Category from '../components/Category/Category';
import HomeItemContainer from '../components/HomeItemContainer/HomeItemContainer';
import Popup from '../components/Popup/Popup';
import ProductCarousel from '../components/ProductCarousel/ProductCarousel';
import { banners as configBanners } from '../config/config';
import fetch from '../config/fetch';

const Home = ({ categories, cartProds, recentProds, dealProds, buy1get1Prods, buy1get2Prods, banners }) => {

  const { t } = useTranslation('common')

  // typeof window != 'undefined'?localStorage.setItem('isPopup', true):null

  return (
    <>
      <Head>
        <title>Tamilan Express</title>
      </Head>
      <Banner banners={banners}/>
      <HomeItemContainer title={t('home:explore-categories')} id='categories'>
        <Category categories={categories} />
      </HomeItemContainer>

      <Popup/>
      {/* {typeof window != 'undefined' && (!localStorage.getItem('isPopup') || localStorage.getItem('isPopup') === true) && <Popup image={dealProds}/>} */}
      {dealProds && dealProds.length > 0 && <ProductCarousel products={dealProds} carouselTitle={t('Caro-DOD')}/>}
      {buy1get1Prods && buy1get1Prods.length > 0 &&  <ProductCarousel products={buy1get1Prods} carouselTitle={t('home:buy1-get1')}/>}
      {buy1get2Prods && buy1get2Prods.length > 0 &&  <ProductCarousel products={buy1get2Prods} carouselTitle={t('home:buy1-get2')}/>}
      {recentProds && recentProds.length > 0 &&  <ProductCarousel products={recentProds} carouselTitle={t('Caro-New')}/>}
      {cartProds && cartProds.length > 0 &&  <ProductCarousel products={cartProds} carouselTitle={t('add-to-cart')}/>}
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

  let banners = configBanners

  if(bannersResponse.data && bannersResponse.data.banners && Array.isArray(bannersResponse.data.banners)) {
    banners = bannersResponse.data.banners.map((banner, i) => {
      return { src: `${process.env.NEXT_PUBLIC_MEDIA_BASE_URL}/banner/original/${banner}`, alt: `Banner image of tamilan express ${i}` }
    })
  }

  if(!error)
    categories = [...data.docs]
    
  return {
    props: {
      categories,
      error,
      ...homeProdResponse.data,
      banners,
    },
    revalidate: 60,
  };
};
export default Home;
