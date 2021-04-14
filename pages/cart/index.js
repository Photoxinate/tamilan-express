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
            <SubTotal />
          </div>
        </div>
    </PageContainer>
  );
  
};

// export const getServerSideProps = async (ctx) => {
//   const session = await getSession(ctx)
//   if (!session) {
//       return {
//         props: {
//           local: true
//         }
//       }
//   }

//   const headers = { Authorization: `Bearer ${session.accessToken}` }
//   const res = await fetch('users/me/cart', { headers })
//   let carts = []

//   if(res.data) {
//     carts = [...res.data]
//   }

//   return {
//       props: {
//         carts,
//         local: false
//       }
//   }
// }


export default index;
