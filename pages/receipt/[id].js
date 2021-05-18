import { getSession } from 'next-auth/client';
import useTranslation from 'next-translate/useTranslation';
import React from 'react';
import PageContainer from '../../hoc/PageContainer/PageContainer';
import ReceiptProduct from '../../components/ReceiptProduct/ReceiptProduct';
import fetch from '../../config/fetch';

import classes from './index.module.scss'

const index = ({ data }) => {

    const { t } = useTranslation('receipt')

    return (
        <PageContainer title={'Order Confirmation'} id={'receipt'}>
            <div className={classes.receipt}>
                <h2 className={classes.title}>Thank you! Your order is complete.</h2>
                <div className={classes.short}>
                    <div className={classes.field}>
                        <p>Your order number is: </p> <span>{data._id}</span>
                    </div>
                    <div className={classes.field}>
                        <p>A confirmation email will be sent to: </p> <span>{data.user.email}</span>
                    </div>
                    <div className={classes.field}>
                        <p>Delivery address: </p> <span>{`
                            ${data.deliveryAddress.street1},
                            ${data.deliveryAddress.street2}${data.deliveryAddress.street2 && ', '}
                            ${data.deliveryAddress.city},
                            ${data.deliveryAddress.state},
                            ${data.deliveryAddress.zipCode}
                        `}</span>
                    </div>
                </div>
                <div className={classes.summary}>
                    <h3>Order Summary</h3>
                    <table cellSpacing={0}>
                        <thead>
                            <tr>
                                <th>Code</th>
                                <th>Name</th>
                                <th>Qty</th>
                                <th align='right'>Price</th>
                                <th align='right'>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.products.map(prod => (
                                <ReceiptProduct 
                                    key={prod.product._id} 
                                    product={prod.product} 
                                    price={prod.price} 
                                    qty={prod.qty}
                                    offDiscount={prod.offDiscount} />
                            ))}
                            <tr className={classes.finals}>
                                <td/><td colSpan={3} align='right'>Sub Total</td>
                                <td align='right'>${data.subTotal}</td>
                            </tr>
                            <tr className={classes.finals}>
                                <td/><td colSpan={3} align='right'>Shipping</td>
                                <td align='right'>${data.deliveryFee}</td>
                            </tr>
                            {data.redeemedPoints > 0 &&
                                <tr className={classes.finals}>
                                    <td/><td colSpan={3} align='right'>Loyalty Points</td>
                                    <td align='right'>-${data.redeemedPoints}</td>
                                </tr>
                            }
                            {data.coupon &&
                                <tr className={classes.finals}>
                                    <td/><td colSpan={3} align='right'>Coupn({data.coupon.code})</td>
                                    <td align='right'>-${data.coupon.value}</td>
                                </tr>
                            }
                            <tr className={classes.finals}>
                                <td/><td colSpan={3} align='right'>Grand Total</td>
                                <td align='right'>${data.grandTotal}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </PageContainer>
    );
}

export const getServerSideProps = async (ctx) => {
    const id = ctx.params.id
    const session = await getSession(ctx)
    if (!session) {
        return {
          redirect: {
            destination: '/signin?callbackUrl=' + process.env.NEXTAUTH_URL + '/receipt/' + id,
            permanent: false
          }
        }
    }

    const headers = { Authorization: `Bearer ${session.accessToken}` }
    const res = await fetch(`orders/${id}?receipt=true`, { headers })
  
    return {
      props: {
        ...res
      }
    }
}

export default index;