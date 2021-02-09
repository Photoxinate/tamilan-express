import Head from 'next/head'
import {products} from '../config/config'
import ProductCarousel from '../components/ProductCarousel/ProductCarousel'
import Category from '../components/Category/Category'

export default function Home() {
  return (
    <>
      <Head>
        <title>Tamilan Express</title>
      </Head>
    <ProductCarousel products={products} carouselTitle="Deals of the Day"/>
      <Category />
    </>
  )
}
