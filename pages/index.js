import Head from 'next/head';
import React from 'react';
import { connect } from 'react-redux';
import Category from '../components/Category/Category';
import ProductCarousel from '../components/ProductCarousel/ProductCarousel';
import ProductModal from '../components/ProductModal/ProductModal';
import Banner from '../components/Banner/Banner'
import { products, banners } from '../config/config';
import * as actionTypes from '../store/actions/actionTypes';
import HomeItemContainer from '../components/HomeItemContainer/HomeItemContainer'
import useTranslation from 'next-translate/useTranslation'



const Home = (props) => {

  const { t } = useTranslation('common')


  return (
    <>
      <Head>
        <title>Tamilan Express</title>
      </Head>
      <Banner banners={banners}/>
      <ProductCarousel products={products} carouselTitle="Deals of the Day"/>

      <HomeItemContainer title='Explore Categories' id='categories'>
        <Category />
      </HomeItemContainer>
      <ProductModal isShowModal={props.isShowModal} product={props.modalProduct} closeModal={props.closeModal} />
    </>
  )
}

const mapStateToProps = state => {
  return{
    isShowModal: state.ui.isShowModal,
    modalProduct: state.ui.modalProduct
  }
}

const mapDispatchToProps = dispatch => {
  return{
    showModal: (product) => dispatch({type:actionTypes.SHOW_MODAL, payload:{product:product}}),
    closeModal: () => dispatch({type:actionTypes.CLOSE_MODAL})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
