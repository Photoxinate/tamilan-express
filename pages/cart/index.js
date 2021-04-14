import { getSession } from 'next-auth/client';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import React from 'react';
import CartRow from '../../components/CartRow/CartRow';
import PageContainer from '../../components/PageContainer/PageContainer';
import fetch from '../../config/fetch';
import classes from './index.module.scss';


const index = ({ local, carts }) => {
  
  const { t } = useTranslation('cart')

  let cartProds = []

  if(local) {
    if(typeof window != 'undefined' && localStorage.getItem('cartProducts')){
      cartProds = JSON.parse(localStorage.getItem('cartProducts'));
    }

    
  }
  else {
    cartProds = carts
  }

  if (cartProds === undefined || cartProds.length === 0) {
    return (
      <PageContainer title={t('cart-title')} id={'cart'} >
        <div className={classes.noProducts}>
          {t('cart-noItem')}
          <Link href='/'><a>{t('cart-startShopping')}</a></Link>
        </div>
      </PageContainer>
    );
  } 

  return (
    <PageContainer title={t('cart-title')} id={'cart'} >
        <div className={classes.container}>
          <div className={classes.items}>
            {cartProds.map(cartProduct => (
              <CartRow
                key={cartProduct._id}
                product={cartProduct}
              />
            ))}
          </div>
          <div className={classes.totals}>
            {/* <SubTotal /> */}
          </div>
        </div>
    </PageContainer>
  );
  
};

export const getServerSideProps = async (ctx) => {
  const session = await getSession(ctx)
  if (!session) {
      return {
        props: {
          local: true
        }
      }
  }

  const headers = { Authorization: `Bearer ${session.accessToken}` }
  const res = await fetch('users/me/cart', { headers })
  let carts = []

  if(res.data && res.data.cart ) {
    carts = [...res.data.cart]
    carts = carts.map(cart => ({ qty: +cart.qty, ...cart.product }))
  }

  return {
      props: {
        carts,
        local: false
      }
  }
}


export default index;
