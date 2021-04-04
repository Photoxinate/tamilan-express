import React from 'react'
import AccountCard from '../../components/AccountCard/AccountCard'
import { ProfileCheck, History, Award, SignOut } from '../../components/Icons/Icons'
import PageContainer from '../../components/PageContainer/PageContainer'
import useTranslation from 'next-translate/useTranslation'

import classes from './index.module.scss'
import { getSession } from 'next-auth/client'


const cards = [
    {name: 'Profile Info', link: '/profile', icon: <ProfileCheck />},
    {name: 'Order History', link: '/orders', icon: <History />},
    {name: 'Loyalty', link: '/loyalty', icon: <Award />},
    {name: 'Sign Out', link: '/api/auth/signout', icon: <SignOut />},
]

const index = () => {

    const { t } = useTranslation('my-account')

    return (
        <PageContainer title={t('Account-title')} id={'account'} >
            <div className={classes.cards}>
                {cards.map(card => <AccountCard key={card.name} name={card.name} link={card.link} icon={card.icon} />)}
            </div>
        </PageContainer>
    );
}

export const getServerSideProps = async (ctx) => {
    const session = await getSession(ctx)
    if (!session) {
        return {
          redirect: {
            destination: '/signin?callbackUrl=' + process.env.NEXTAUTH_URL + '/account',
            permanent: false
          }
        }
    }

    return {
        props: {}
    }
}

export default index;