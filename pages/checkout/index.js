import { PayPalButtons } from '@paypal/react-paypal-js'
import { getSession, useSession } from 'next-auth/client'
import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from 'semantic-ui-react/dist/commonjs/elements/Button'
import Input from 'semantic-ui-react/dist/commonjs/elements/Input'
import axios from '../../axios'
import CartRow from '../../components/CartRow/CartRow'
import CheckoutAddress from '../../components/CheckoutAddress/CheckoutAddress'
import ShippingMethodForm from '../../components/Forms/ShippingMethodForm/ShippingMethodForm'
import PageContainer from '../../hoc/PageContainer/PageContainer'
import CheckoutMessage from '../../components/UI/CheckoutMessage/CheckoutMessage'
import Loading from '../../components/UI/Loading/Loading'
import fetch from '../../config/fetch'
import { clearCart } from '../../store/actions/cart'
import classes from './index.module.scss'


const index = ({ user, shippingCharge }) => {

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
  const [shippingMethod, setShippingMethod] = useState('gta')
  const [shippingFee, setShippingFee] = useState(0)
  const [grandTotal, setGrandTotal] = useState(total)

  const [couponLoading, setCouponLoading] = useState(false)
  const [couponError, setCouponError] = useState(null)

  const [completeLoading, setCompleteLoading] = useState(false)
  const [completeError, setCompleteError] = useState()

  const userInfoChangeHandler = data => {
    setUserInfo(data)
    setAddrAvailability(data.hasOwnProperty('address'))
  }

  const loyaltyRedeemHandler = e => {
    e.preventDefault()
    const value = +loyaltyRef.current.value
    if(value >= 0 && value <= userInfo.loyaltyPoints && value <= (grandTotal + redeemedLoyalty)) {
      setRedeemedLoyalty(+value.toFixed(2))
    }
  }

  const couponApplyHandler = e => {
    if(e !== COUNT_CHANGED )
      e.preventDefault()

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
          setAppliedCoupon(res.data)
          setCouponLoading(false)
        })
        .catch(err => {
          setCouponError(err.response.data.message)
          setCouponLoading(false)
          setAppliedCoupon(undefined)
        })
    }
    else if(code === '') {
      setAppliedCoupon(undefined)
    }
  }

  const errorMessageCloseHandler = () => {
    setCompleteError(undefined);
  }

  // Paypal intergration start
  const createOrderHandler = (data, actions) => {
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
          price: prod.discount > 0 ? prod.price - (prod.price * prod.discount / 100) : prod.price,
          type: prod.type,
          offDiscount: prod.offDiscount
        })),
        coupon: appliedCoupon,
        redeemedPoints: redeemedLoyalty,
        comment: commentRef?.current.props.value,
        subTotal: total,
        grandTotal,
        shippingMethod,
        deliveryFee: shippingFee
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
    }
      
    return order
  }

  const paymentErrorHandler = err => {
    setCompleteError(`Oops! Something went wrong with Paypal payment processing. 
      Please try again in a moment. If any urgent kindly drop us an email or send a message from facebook messenger.`)
  }
  // Paypal intergration end

  useEffect(() => {
    let newShippingFee = 0
    if(shippingCharge && shippingMethod === 'gta')
      newShippingFee = total >= shippingCharge.minGta ? 0 : +shippingCharge.gta
    if(shippingCharge && shippingMethod === 'outside')
      newShippingFee = +shippingCharge.others

    setShippingFee(newShippingFee)
    
    const couponDeduction = appliedCoupon && appliedCoupon.value ? appliedCoupon.value : 0
    const totalCharge = total + newShippingFee - redeemedLoyalty - couponDeduction

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
              commentRef={commentRef}
              minGta={shippingCharge.minGta} />
          </section>

          <section className={classes.section}>
            {(loading || couponLoading) && <Loading />}
            <h2>{t('order-summary')}</h2>
            {products.map(cartProduct=> (
              <CartRow
                checkout
                key={cartProduct._id + JSON.stringify(cartProduct.variations)}
                product={cartProduct}
              />
            ))}
          </section>

        </div>

        <div className={classes.order}>
          <section className={classes.section}>
            {(loading || couponLoading) && <Loading />}

            <div className={classes.royalty}>
              {userInfo.loyaltyPoints > 0 ? `You can redeem maximum of ${Math.floor(userInfo.loyaltyPoints * 100) / 100} loyalty points.` : `Earn loyalty points by purchase more!`}
            </div>
            {userInfo.loyaltyPoints > 0 &&
              <form onSubmit={loyaltyRedeemHandler}>
                <Input 
                  action
                  max={userInfo.loyaltyPoints <= (grandTotal + redeemedLoyalty) ? userInfo.loyaltyPoints : (grandTotal + redeemedLoyalty)}
                  min={0}
                  step={0.1}
                  type='number'
                  fluid 
                  name='Enter loyalty points to redeem'
                  placeholder='loyalty points to redeem' 
                  className={classes.pointsInput} >
                    <input ref={loyaltyRef} />
                    <Button type='submit' content={t('redeem')} />
                </Input> 
              </form>
            }
            <form onSubmit={couponApplyHandler}>
              <Input fluid action placeholder='Enter coupon code' name='coupon code' className={classes.pointsInput} >
                <input ref={couponRef} />
                <Button type='submit' content={t('apply')} />
              </Input>
              {couponError && <span className={classes.couponError}>{couponError}</span>}
            </form>

          </section>

          <section className={[classes.section, classes.main].join(' ')}>
            {(loading || couponLoading) && <Loading style={{ zIndex: 101 }} />}
            <div className={classes.fields}>
              <div>{t('common:sub-total')}</div>
              <div>${total}</div>
            </div>
            <div className={classes.fields}>
              <div>{t('common:shipping')}</div>
              <div>${shippingFee}</div>
            </div>
            {redeemedLoyalty > 0 &&
              <div className={classes.fields}>
                <div>{t('common:loyalty-points')}</div>
                <div>-${redeemedLoyalty}</div>
              </div>
            }
            {appliedCoupon &&
              <div className={classes.fields}>
                <div>{t('common:coupon-discount')}</div>
                <div>-${appliedCoupon.value}</div>
              </div>
            }
            <div className={[classes.fields, classes.total].join(' ')}>
              <div>{t('common:order-total')}</div>
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

  const settings = await fetch('settings/shippingCharge')

  return {
    props: {
      user: user.data,
      shippingCharge: settings.data?.shippingCharge || { gta: 15, others: 50, minGta: 100 }
    }
  }
}

export default index;
