import { PayPalButtons, FUNDING } from '@paypal/react-paypal-js'
import { getSession, useSession } from 'next-auth/client'
import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from 'semantic-ui-react/dist/commonjs/elements/Button'
import Input from 'semantic-ui-react/dist/commonjs/elements/Input'
import axios from '../../axios'
import CartRow from '../../components/CartRow/CartRow'
import CheckoutAddress from '../../components/CheckoutAddress/CheckoutAddress'
import ShippingMethodForm from '../../components/Forms/ShippingMethodForm/ShippingMethodForm'
import PageContainer from '../../components/PageContainer/PageContainer'
import { useRouter } from 'next/router'
import Loading from '../../components/UI/Loading/Loading'
import fetch from '../../config/fetch'
import classes from './index.module.scss'
import CheckoutMessage from '../../components/UI/CheckoutMessage/CheckoutMessage'
import { clearCart } from '../../store/actions/cart'


const index = ({ user }) => {

  const COUNT_CHANGED = 'COUNT_CHANGED'

  const [session] = useSession()

  const { t } = useTranslation('checkout')

  const router = useRouter()

  const { products, total, count, loading } = useSelector(state => state.cart)

  const dispatch = useDispatch()

  const loyaltyRef = useRef()
  const couponRef = useRef()
  const commentRef = useRef()

  const [userInfo, setUserInfo] = useState(user)
  const [addrAvailability, setAddrAvailability] = useState(user.hasOwnProperty('address'))
  const [redeemedLoyalty, setRedeemedLoyalty] = useState(0)
  const [appliedCoupon, setAppliedCoupon] = useState()
  const [shippingMethod, setShippingMethod] = useState('shipping')
  const [grandTotal, setGrandTotal] = useState(total + 1)

  const [couponLoading, setCouponLoading] = useState(false)
  const [couponError, setCouponError] = useState(null)

  const [completeLoading, setCompleteLoading] = useState(false)
  const [completeError, setCompleteError] = useState()

  const userInfoChangeHandler = data => {
    setUserInfo(data)
    setAddrAvailability(data.hasOwnProperty('address'))
  }

  const loyaltyRedeemHandler = () => {
    const value = +loyaltyRef.current.value
    if(value >= 0 && value <= userInfo.loyaltyPoints && value <= (grandTotal + redeemedLoyalty)) {
      setRedeemedLoyalty(+value.toFixed(2))
    }
  }

  const couponApplyHandler = e => {
    setCouponError(null)
    let code = couponRef.current?.value
    if(e === COUNT_CHANGED && appliedCoupon)
      code = appliedCoupon.code
    else if(appliedCoupon && appliedCoupon.code === code)
      return
      
    if(code && session) {
      setCouponLoading(true)
      const headers = { Authorization: `Bearer ${session.accessToken}` }
      axios.get(`coupons/check/${code}`, { headers })
        .then(res => {
          console.log(res.data)
          setAppliedCoupon(res.data)
          setCouponLoading(false)
        })
        .catch(err => {
          setCouponError(err.response.data.message)
          setCouponLoading(false)
          setAppliedCoupon(undefined)
        })
    }

  }

  const errorMessageCloseHandler = () => {
    setCompleteError(undefined);
  }

  // Paypal intergration start
  const createOrderHandler = (data, actions) => {
    console.log('here', grandTotal);
    return actions.order.create({
      intent: "CAPTURE",
      payer: {
        email_address: userInfo.email,
        name: {
          given_name: userInfo.firstName,
          surname: userInfo.lastName
        },
        address: {
          address_line_1: userInfo.address.street1,
          address_line_2: userInfo.address.street2,
          postal_code: userInfo.address.zipCode,
          country_code: 'CA',
          admin_area_2: userInfo.address.city,
          admin_area_1: userInfo.address.state
        }
      },
      purchase_units: [
        {
          amount: {
            value: grandTotal,
          }
        },
      ],
      application_context: {
        shipping_preference: 'NO_SHIPPING'
      }
    })
  }

  const shippingMethodChangeHandler = method => {
    setShippingMethod(method)
  }

  const paymentApproveHandler = async (data, actions) => {
    setCompleteLoading(true)

    const order = await actions.order.capture()

    if(order.status === 'COMPLETED') {
      const payload = {
        paypalData: data,
        transactionId: order.id,
        products: products.map(prod => ({ 
          product: prod._id, 
          qty: prod.qty, 
          variations: prod.variations,
          price: prod.discount > 0 ? prod.price - (prod.price * prod.discount / 100) : prod.price
        })),
        coupon: appliedCoupon,
        redeemedPoints: redeemedLoyalty,
        comment: commentRef?.current.props.value,
        subTotal: total,
        grandTotal,
        shippingMethod,
      }

      const headers = { Authorization: `Bearer ${session.accessToken}` }
      axios.post('orders', payload, { headers })
        .then(res => {
          setCompleteLoading(false)
          router.replace('/receipt/' + res.data._id)
          dispatch(clearCart())
        })
        .catch(err => {
          setCompleteLoading(false)
          if (!err.response) {
            setCompleteError(`Oops! Something went wrong with your connection.
              Kindly drop us an email or send a message from facebook messenger to proceed your order further.`)
          }
          else {
            setCompleteError(`Oops! Something went wrong from our end. Sorry for the inconvenience.
              Kindly drop us an email or send a message from facebook messenger to proceed your order further.`)
          }
          
        })

      console.log(payload)
    }
      
    return order
  }

  const paymentErrorHandler = err => {
    setCompleteError(`Oops! Something went wrong with Paypal payment processing. 
      Please try again in a moment. If any urgent kindly drop us an email or send a message from facebook messenger.`)
  }
  // Paypal intergration end

  useEffect(() => {
    const shippingCharge = shippingMethod === 'shipping' ? 1 : 0
    const couponDeduction = appliedCoupon && appliedCoupon.value ? appliedCoupon.value : 0
    const totalCharge = total + shippingCharge - redeemedLoyalty - couponDeduction

    setGrandTotal(+totalCharge.toFixed(2))
  }, [total, shippingMethod, redeemedLoyalty, appliedCoupon])

  useEffect(() => {
    if(appliedCoupon) {
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
      {completeError && <CheckoutMessage message={completeError} onClose={errorMessageCloseHandler} />}
      {completeLoading && <Loading complete />}
      <div className={classes.checkout}>
        <div className={classes.user}>

          <CheckoutAddress info={userInfo} t={t} setInfo={userInfoChangeHandler} />

          <section className={classes.section}>
            <ShippingMethodForm 
              className={classes.section}
              onShippingMethodChange={shippingMethodChangeHandler}
              shippingMethod={shippingMethod}
              commentRef={commentRef} />
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
                max={userInfo.loyaltyPoints <= (grandTotal + redeemedLoyalty) ? userInfo.loyaltyPoints : (grandTotal + redeemedLoyalty)}
                min={0}
                step={0.2}
                type='number'
                fluid 
                name='Enter loyalty points to redeem'
                placeholder='loyalty points to redeem' 
                className={classes.pointsInput} >
                  <input ref={loyaltyRef} onSubmit={loyaltyRedeemHandler} />
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
            {(loading || couponLoading) && <Loading style={{ zIndex: 101 }} />}
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
            <PayPalButtons 
              // fundingSource={FUNDING.PAYPAL}
              forceReRender={[grandTotal, userInfo]}
              disabled={!addrAvailability || loading || couponLoading}
              createOrder={createOrderHandler} 
              onApprove={paymentApproveHandler} 
              onError={paymentErrorHandler} />
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
