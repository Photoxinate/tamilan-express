import React, { useState } from 'react'
import Head from 'next/head'
import {products} from '../config/config'
import ProductCarousel from '../components/ProductCarousel/ProductCarousel'
import Category from '../components/Category/Category'
import { useSession, signin, signout } from 'next-auth/client' 
import ProductModal from '../components/ProductModal/ProductModal'


export default function Home() {

  const [ session, loading ] = useSession();

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
      <ProductModal show={show} setShow={setShow} />
    </>
  )
}
