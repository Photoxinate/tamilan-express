import { getSession } from 'next-auth/client';
import useTranslation from 'next-translate/useTranslation';
import React from 'react';
import PageContainer from '../../components/PageContainer/PageContainer';
import fetch from '../../config/fetch';

import classes from './index.module.scss'

const index = ({ data }) => {
    console.log(data);

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
                            ${data.deliveryAddress.city}
                            ${data.deliveryAddress.state},
                            ${data.deliveryAddress.zipCode}
                        `}</span>
                    </div>
                </div>
                <div className={classes.products}>
                    
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