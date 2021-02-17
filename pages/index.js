import React from 'react'
import * as actionTypes from '../store/actions/actionTypes'
import { connect } from 'react-redux';
import Head from 'next/head'
import {products} from '../config/config'
import ProductCarousel from '../components/ProductCarousel/ProductCarousel'
import Category from '../components/Category/Category'
import { useSession, signin, signout } from 'next-auth/client' 
import ProductModal from '../components/ProductModal/ProductModal'

const Home = (props) => {


  const [ session, loading ] = useSession();

  return (
    <>
      <Head>
        <title>Tamilan Express</title>
      </Head>
      <ProductCarousel products={products} carouselTitle="Deals of the Day"/>
      <Category />
      {!session && (
          <>
            <span >Not signed in</span>
            <a
              href={`/api/auth/signin`}
              onClick={(e) => {
                e.preventDefault()
                signin()
              }}
            >
              <button>Sign in</button>
            </a>
          </>
        )}
        {session && (
          <>
            <span
              style={{ backgroundImage: `url(${session.user.image})` }}
              
            />
            <span>
              Signed in as <strong>{session.user.email}</strong>
            </span>
            <a
              href={`/api/auth/signout`}
              onClick={(e) => {
                e.preventDefault()
                signout()
              }}
            >
              <button >Sign out</button>
            </a>
          </>
        )}
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
