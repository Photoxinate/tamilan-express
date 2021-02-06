import Head from 'next/head'
import {products} from '../config/config'
import ProductCarousel from '../components/ProductCarousel/ProductCarousel'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tamilan Express</title>
      </Head>
    <ProductCarousel products={products}/>
    </div>
  )
}
