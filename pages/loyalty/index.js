import { getSession } from 'next-auth/client'
import React from 'react'
import PageContainer from '../../components/PageContainer/PageContainer'

import classes from './index.module.scss'

const index = () => {

    const circumference = 38 * 2 * Math.PI
    const strokeDashoffset = circumference - 75 / 100 * circumference;

    return (
        <PageContainer title={'Loyalty'} id={'loyalty'}>
            <div className={classes.card}>
                <h2> Loyalty Balance </h2>
                <div className={classes.content}>
                    <div className={classes.progress}>
                        <svg class={classes.ring} height={80} width={80} >
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
                            1240pts
                        </div>
                        <div className={classes.equal}>
                            1pt is equal to 1 cent
                        </div>
                    </div>
                </div>
                <div className={classes.user}>
                    <span className={classes.name}>
                        Firstname
                    </span>
                    <span className={classes.identity}>
                        CustomerID / Email
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

    return {
        props: {}
    }
}

export default index;