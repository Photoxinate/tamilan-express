import { getSession } from 'next-auth/client';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import React from 'react';
import { useDispatch } from 'react-redux';
import CartRow from '../../components/CartRow/CartRow';
import PageContainer from '../../components/PageContainer/PageContainer';
import SubTotal from '../../components/SubTotal/SubTotal';
import fetch from '../../config/fetch';
import * as actionTypes from '../../store/actions/actionTypes';
import classes from './index.module.scss';


const index = ({ local, carts }) => {
  
  const { t } = useTranslation('cart')

  const dispatch = useDispatch()

  const qtyChangeHandler = (id, qty, price) => {
    dispatch({ type: actionTypes.UPDATE_CART, id, qty, price })
  }

  const removeProductHandler = (id, price) => {
    dispatch({ type: actionTypes.UPDATE_CART, id, qty: 0, price })
  }

  let cartProds = []

  if(local) {
    if(localStorage.getItem('cart')){
      cartProds = JSON.parse(localStorage.getItem('cart'));
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
                onChangeQty={qtyChangeHandler}
                onRemoveProduct={removeProductHandler}
                product={cartProduct}
              />
            ))}
          </div>
          <div className={classes.totals}>
            <SubTotal />
          </div>
        </div>
    </PageContainer>
    // <div className={classes.wrap}>
    //   <div className={classes.colCart}>

    //     <div className={classes.table}>
    //       <div className={classes.cartHead}>
    //         <div className={classes.col}>
    //           <h2>{t('cart-title')}</h2>
    //         </div>
    //       </div>
    //       {cartProds.map(cartProduct => (
    //         <CartRow
    //           key={cartProduct._id}
    //           onChangeQty={qtyChangeHandler}
    //           onRemoveProduct={removeProductHandler}
    //           product={cartProduct}
    //         />
    //       ))}
    //     </div>

    //   </div>

    //   <div className={classes.colSub}>
    //     <SubTotal />
    //   </div>

    // </div>
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
