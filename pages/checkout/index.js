import { getSession, useSession } from 'next-auth/client'
import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import Button from 'semantic-ui-react/dist/commonjs/elements/Button'
import Input from 'semantic-ui-react/dist/commonjs/elements/Input'
import CartRow from '../../components/CartRow/CartRow'
import CheckoutAddress from '../../components/CheckoutAddress/CheckoutAddress'
import ShippingMethodForm from '../../components/Forms/ShippingMethodForm/ShippingMethodForm'
import PageContainer from '../../components/PageContainer/PageContainer'
import fetch from '../../config/fetch'
import axios from '../../axios'

import classes from './index.module.scss'
import Loading from '../../components/UI/Loading/Loading'

const index = ({ user }) => {

  const COUNT_CHANGED = 'COUNT_CHANGED'

  const [session] = useSession()

  const { t } = useTranslation('checkout')

  const { products, total, count, loading } = useSelector(state => state.cart)

  const loyaltyRef = useRef()
  const couponRef = useRef()

  const [userInfo, setUserInfo] = useState(user)
  const [addrAvailability, setAddrAvailability] = useState(user.hasOwnProperty('address'))
  const [redeemedLoyalty, setRedeemedLoyalty] = useState(0)
  const [appliedCoupon, setAppliedCoupon] = useState()
  const [shippingMethod, setShippingMethod] = useState('shipping')
  const [grandTotal, setGrandTotal] = useState(total)

  const [couponLoading, setCouponLoading] = useState(false)
  const [couponError, setCouponError] = useState(null)

  const userInfoChangeHandler = data => {
    setUserInfo(data)
    setAddrAvailability(data.hasOwnProperty('address'))
  }

  const loyaltyRedeemHandler = () => {
    const value = +loyaltyRef.current.value
    if(value >= 0 && value <= userInfo.loyaltyPoints) {
      setRedeemedLoyalty(value)
    }
  }

  const couponApplyHandler = e => {
    setCouponError(null)
    let code = couponRef.current.value
    if(e === COUNT_CHANGED && appliedCoupon)
      code = appliedCoupon.code
      
    if(code && session) {
      setCouponLoading(true)
      const headers = { Authorization: `Bearer ${session.accessToken}` }
      axios.get(`coupons/check/${code}`, { headers })
        .then(res => {
          console.log(res.data)
          
          setAppliedCoupon({
            code,
            type: 'products',
            products: ['12345678'],
            value: 0.3
          })
          setCouponLoading(false)
        })
        .catch(err => {
          setCouponError(err.response.data.message)
          setCouponLoading(false)
        })
    }

  }

  const shippingMethodChangeHandler = method => {
    setShippingMethod(method)
  }

  const confirmOrderHandler = () => {
    console.log(shippingMethod);
  }

  useEffect(() => {
    const shippingCharge = shippingMethod === 'shipping' ? 1 : 0
    const couponDeduction = appliedCoupon && appliedCoupon.value ? appliedCoupon.value : 0
    const totalCharge = total + shippingCharge - redeemedLoyalty - couponDeduction

    setGrandTotal(totalCharge)
  }, [total, shippingMethod, redeemedLoyalty, appliedCoupon])

  useEffect(() => {
    if(appliedCoupon && appliedCoupon.type === 'products') {
      couponApplyHandler(COUNT_CHANGED)
    }
  }, [count])

  if(products.length <= 0) {
    if(typeof window !== 'undefined')
      window.scrollTo(0, 0)
      
    return (
      <PageContainer title={t('title')} id={'checkout'} >
        <div className={classes.noProducts}>
          {t('no-item')}
          <Link href='/'><a>{t('start-shopping')}</a></Link>
        </div>
      </PageContainer>
    )
  }

  return (
    <PageContainer title={t('title')} id={'checkout'} >
      <div className={classes.checkout}>

        <div className={classes.user}>

          <CheckoutAddress info={userInfo} t={t} setInfo={userInfoChangeHandler} />

          <section className={classes.section}>
            <ShippingMethodForm 
              className={classes.section}
              onShippingMethodChange={shippingMethodChangeHandler}
              shippingMethod={shippingMethod} />
          </section>

          <section className={classes.section}>
            {(loading || couponLoading) && <Loading />}
            <h2>Order Summary</h2>
            {products.map(cartProduct => (
              <CartRow
                checkout
                key={cartProduct._id}
                product={cartProduct}
              />
            ))}
          </section>

        </div>

        <div className={classes.order}>

          <section className={classes.section}>
            {(loading || couponLoading) && <Loading />}
            <div className={classes.royalty}>
              {userInfo.loyaltyPoints > 0 ? `You can redeem maximum of ${userInfo.loyaltyPoints} loyalty points.` : `Earn loyalty points by purchase more!`}
            </div>
            {userInfo.loyaltyPoints > 0 &&
              <Input 
                action
                max={userInfo.loyaltyPoints}
                min={0}
                type='number'
                fluid 
                name='Enter loyalty points to redeem'
                placeholder='loyalty points to redeem' 
                className={classes.pointsInput} >
                  <input ref={loyaltyRef} />
                  <Button content={t('redeem')} onClick={loyaltyRedeemHandler} />
              </Input> 
            }
            <Input fluid action placeholder='Enter coupon code' name='coupon code' className={classes.pointsInput} >
              <input ref={couponRef} />
              <Button content={t('apply')} onClick={couponApplyHandler} />
            </Input>
            {couponError && <span className={classes.couponError}>{couponError}</span>}
          </section>

          <section className={[classes.section, classes.main].join(' ')}>
            {(loading || couponLoading) && <Loading />}
            <div className={classes.fields}>
              <div>SubTotal</div>
              <div>${total}</div>
            </div>
            <div className={classes.fields}>
              <div>Shipping</div>
              <div>${shippingMethod === 'shipping' ? 1 : 0}</div>
            </div>
            {redeemedLoyalty > 0 &&
              <div className={classes.fields}>
                <div>Loyalty Point</div>
                <div>-${redeemedLoyalty}</div>
              </div>
            }
            {appliedCoupon &&
              <div className={classes.fields}>
                <div>Coupon Discount</div>
                <div>-${appliedCoupon.value}</div>
              </div>
            }
            <div className={[classes.fields, classes.total].join(' ')}>
              <div>Order Total</div>
              <div>${grandTotal}</div>
            </div>
            <Button 
              fluid 
              secondary 
              icon='lock' 
              className={classes.confirm} 
              content='Confirm and Pay'
              disabled={!addrAvailability}
              onClick={confirmOrderHandler} />
          </section>

        </div>
        
      </div>
    </PageContainer>
  )

}

export const getServerSideProps = async (ctx) => {
    const session = await getSession(ctx)
    if (!session) {
      return {
        redirect: {
          destination: '/signin?callbackUrl=' + process.env.NEXTAUTH_URL + '/checkout',
          permanent: false
        }
      }
    }

    const headers = { Authorization: `Bearer ${session.accessToken}` }
    const user = await fetch('users/me', { headers })

    return {
      props: {
        user: user.data
      }
    }
}

export default index;
