import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartRow from '../../components/CartRow/CartRow';
import PageContainer from '../../hoc/PageContainer/PageContainer';
import SubTotal from '../../components/SubTotal/SubTotal';
import { clearCart } from '../../store/actions/cart';
import Head from 'next/head'

import classes from './index.module.scss';


const index = () => {
  
  const { t } = useTranslation('cart')

  const cartProds = useSelector(state => state.cart.products)

  const dispatch = useDispatch()

  const clearCartHandler = () => {
    dispatch(clearCart())
  }

  if (cartProds === undefined || cartProds.length === 0) {
    return (
      <PageContainer title={t('cart-title')} id={'cart'} >
        <div className={classes.noProducts}>
          {t('cart-noItem')}
          <Link href='/'><a>{t('cart-startShopping')}</a></Link>
        </div>
      </PageContainer>
    )
  } 

  const totalClass = cartProds.length > 1 ? [classes.totals, classes.marg].join(' ') : classes.totals

  return (
    <PageContainer title={t('cart-title')} id={'cart'} >
      <Head>
          <title>Tamilan Express - Your Cart</title>
          <meta name='description' content='Cart details' />
          <meta property="og:title" content={'Tamilan Express - Your Cart'} />
          <meta property="og:description" content={'Cart details'} />
          <meta name="twitter:description" content={'Cart details'} />
          <meta name="twitter:title" content={'Tamilan Express - Your Cart'} />
      </Head>
      <div className={classes.container}>
        <div className={classes.items}>
          {cartProds.length > 1 && <button className={classes.clear} onClick={clearCartHandler}>Clear all</button>}
          {cartProds.map(cartProduct => (
            <CartRow
              key={cartProduct._id + JSON.stringify(cartProduct.variations)}
              product={cartProduct}
            />
          ))}
        </div>
        <div className={totalClass}>
          <SubTotal />
        </div>
      </div>
    </PageContainer>
  )
  
}


export default index;
