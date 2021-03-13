import Head from 'next/head';
import React from 'react';
import useTranslation from 'next-translate/useTranslation'
import Category from '../components/Category/Category';
import ProductCarousel from '../components/ProductCarousel/ProductCarousel';
import ProductModal from '../components/ProductModal/ProductModal';
import Banner from '../components/Banner/Banner';
import { products, banners } from '../config/config';
import HomeItemContainer from '../components/HomeItemContainer/HomeItemContainer';

const Home = props => {

  console.log('[home] rendered')

  const { t } = useTranslation('common')

  return (
    <>
      <Head>
        <title>Tamilan Express</title>
      </Head>
      <Banner banners={banners}/>
      <HomeItemContainer title='Explore Categories' id='categories'>
        <Category />
      </HomeItemContainer>

      <ProductCarousel products={products} carouselTitle={t('Caro-DOD')}/>
      <ProductCarousel products={products} carouselTitle={t('Caro-New')}/>
      <ProductCarousel products={products} carouselTitle={t('add-to-cart')}/>

      <ProductModal isShowModal={props.isShowModal} product={props.modalProduct} closeModal={props.closeModal} />
    </>
  );
};

export const getStaticProps = () => {
  //send preloaded state from server here

  return {
    props: {
      initialReduxState: {
        cart: {
          products: [],
          count: 0,
          total: 0,
        },
        ui: {
          show: false,
          product: null,
        },
      },
    },
  };
};

export default Home;
