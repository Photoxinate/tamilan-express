import React from 'react'
import AccountCard from '../../components/AccountCard/AccountCard'
import { ProfileCheck, History, Award, SignOut } from '../../components/Icons/Icons'
import PageContainer from '../../components/PageContainer/PageContainer'

import classes from './index.module.scss'
import useTranslation from 'next-translate/useTranslation'


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
                {cards.map(card => <AccountCard name={card.name} link={card.link} icon={card.icon} />)}
            </div>
        </PageContainer>
    );
};

export default index;