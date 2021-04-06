import Head from 'next/head';
import React from 'react';
import useTranslation from 'next-translate/useTranslation'
import Category from '../components/Category/Category';
import ProductCarousel from '../components/ProductCarousel/ProductCarousel';
import ProductModal from '../components/ProductModal/ProductModal';
import Banner from '../components/Banner/Banner';
import { products, banners } from '../config/config';
import HomeItemContainer from '../components/HomeItemContainer/HomeItemContainer';
import fetch from '../config/fetch'
import transform from '../config/transformCategories2'

const Home = ({ categories, isShowModal, modalProduct, closeModal, error }) => {

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

  const categoriesResponse = await fetch('categories?limit=10')
  let categories = []
  const error = categoriesResponse.error

  if(!error)
    categories = [...categoriesResponse.data]

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
        categories: transform(categories),
      },
      categories,
      error
    },
    revalidate: 60,
  };
};

export default Home;
