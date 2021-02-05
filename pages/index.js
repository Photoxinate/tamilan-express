import Head from 'next/head'
import Category from '../components/Category/Category'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tamilan Express</title>
      </Head>
      <Category />
    </div>
  )
}
