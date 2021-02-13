import React, { useState } from 'react'
import Head from 'next/head'
import {products} from '../config/config'
import ProductCarousel from '../components/ProductCarousel/ProductCarousel'
import Category from '../components/Category/Category'
import ProductModal from '../components/ProductModal/ProductModal'

export default function Home() {

  const [show, setShow] = useState(false)

  const showModal = () => {
    setShow(true)
  }
  return (
    <>
      <Head>
        <title>Tamilan Express</title>
      </Head>
      <ProductCarousel onClicked={showModal} products={products} carouselTitle="Deals of the Day"/>
      <Category />
      <ProductModal show={show} />
    </>
  )
}
