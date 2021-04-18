import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';
import CartRow from '../../components/CartRow/CartRow';
import PageContainer from '../../components/PageContainer/PageContainer';
import SubTotal from '../../components/SubTotal/SubTotal';
import classes from './index.module.scss';


const index = () => {
  
  const { t } = useTranslation('cart')

  const cartProds = useSelector(state => state.cart.products)

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
            <SubTotal />
          </div>
        </div>
    </PageContainer>
  )
  
}


export default index;
