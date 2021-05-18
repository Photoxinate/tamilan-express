import { getSession } from 'next-auth/client'
import React from 'react'
import PageContainer from '../../hoc/PageContainer/PageContainer'
import fetch from '../../config/fetch'

import classes from './index.module.scss'

const index = ({ error, data }) => {

    const circumference = 38 * 2 * Math.PI
    const strokeDashoffset = circumference - 75 / 100 * circumference;

    return (
        <PageContainer title={'Loyalty'} id={'loyalty'}>
            <div className={classes.card}>
                <h2> Loyalty Balance </h2>
                <div className={classes.content}>
                    <div className={classes.progress}>
                        <svg className={classes.ring} height={80} width={80} >
                            <circle 
                                strokeWidth={4}  
                                r={38} 
                                cx={40} 
                                cy={40}
                                strokeDasharray={ circumference + ' ' + circumference }
                                style={ { strokeDashoffset } }
                                />
                        </svg>
                        <img src='/images/trophy.png' width={32} heigth={32} />
                    </div>
                    <div className={classes.info}>
                        <div className={classes.points}>
                            {data.loyaltyPoints && data.loyaltyPoints > 0 ? Math.floor(data.loyaltyPoints * 100) / 100 : 0}pts
                        </div>
                        <div className={classes.equal}>
                            1pt is equal to 1 CAD
                        </div>
                    </div>
                </div>
                <div className={classes.user}>
                    <span className={classes.name}>
                        {data.firstName}
                    </span>
                    <span className={classes.identity}>
                        {data._id}
                    </span>
                </div>
            </div>
        </PageContainer>
    );
}

export const getServerSideProps = async (ctx) => {
    const session = await getSession(ctx)
    if (!session) {
        return {
          redirect: {
            destination: '/signin?callbackUrl=' + process.env.NEXTAUTH_URL + '/loyalty',
            permanent: false
          }
        }
    }

    const headers = { Authorization: `Bearer ${session.accessToken}` }
    const res = await fetch('users/me', { headers })
  
    return {
      props: {
        ...res
      }
    }
}

export default index;