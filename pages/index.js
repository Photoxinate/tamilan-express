import Head from 'next/head';
import React from 'react';
import Category from '../components/Category/Category';
import ProductCarousel from '../components/ProductCarousel/ProductCarousel';
import ProductModal from '../components/ProductModal/ProductModal';
import Banner from '../components/Banner/Banner';
import { products, banners } from '../config/config';
import HomeItemContainer from '../components/HomeItemContainer/HomeItemContainer';

const Home = (props) => {
  return (
    <>
      <Head>
        <title>Tamilan Express</title>
      </Head>
      <Banner banners={banners} />
      <ProductCarousel products={products} carouselTitle="Deals of the Day" />
      <HomeItemContainer title="Explore Categories" id="categories">
        <Category />
      </HomeItemContainer>
      <ProductModal />
    </>
  );
};

export const getStaticProps = () => {
  //send preloaded state from server here

  return {
    props: {
      initialReduxState: {
        prdCart: { products: [] },
        ui: {
          isShowModal: false,
          modalProduct: null,
        },
      },
    },
  };
};

export default Home;
