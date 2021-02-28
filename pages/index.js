import Head from 'next/head';
import React from 'react';
import { connect } from 'react-redux';
import Category from '../components/Category/Category';
import ProductCarousel from '../components/ProductCarousel/ProductCarousel';
import ProductModal from '../components/ProductModal/ProductModal';
import Banner from '../components/Banner/Banner'
import { products, banners } from '../config/config';
import * as actionTypes from '../store/actions/actionTypes';

const Home = (props) => {

  return (
    <>
      <Head>
        <title>Tamilan Express</title>
      </Head>
      <Banner banners={banners}/>
      <ProductCarousel products={products} carouselTitle="Deals of the Day"/>
      <Category />
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
