import React, { useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import PageContainer from '../../components/PageContainer/PageContainer'

import classes from './index.module.scss'

import useTranslation from 'next-translate/useTranslation'


const Form = dynamic(() => import('../../components/Forms/ProfileForm/ProfileForm'))

const index = () => {

    const { t } = useTranslation('profile')


    const [editPersonal, setEditPersonal] = useState(false)
    const [editDelivery, setEditDelivery] = useState(false)
    const personalRef = useRef(null)
    const deliveryRef = useRef(null)

    const toggleHandler = type => {
        if(type === 'personal') {
            setEditPersonal(prev => {
                if(prev) personalRef.current.scrollIntoView() 
                return !prev
            })
            
        }
        else {
            setEditDelivery(prev => {
                if(prev) deliveryRef.current.scrollIntoView() 
                return !prev
            })
        }
    }

    let personal = (
        <>
            <div className={classes.field}>
                <label>Owner Name</label>
                <span>Tamilan Express</span>
            </div>
            <div className={classes.field}>
                <label>Address</label>
                <span>No: 216, Ontario Rd, Ontario, GDP Region, 70100</span>
            </div>
        </>
    )

    let delivery = (
        <>
            <div className={classes.field}>
                <label>Name</label>
                <span>Tamilan Express</span>
            </div>
            <div className={classes.field}>
                <label>Address</label>
                <span>No: 216, Ontario Rd, Ontario, GDP Region, 70100</span>
            </div>
            <div className={classes.field}>
                <label>Contact Number</label>
                <span>+94777862675</span>
            </div>
        </>
    )

    if(editPersonal) {
        personal = <Form onCancel={toggleHandler} />
    }

    if(editDelivery) {
        delivery = <Form delivery onCancel={toggleHandler} />
    }

    return (
        <PageContainer title='Profile' id='profile'>
            <div className={classes.profile}>
                <section className={classes.section}>
                    <div className={classes.title}> {t('profile-Contact')} </div>
                    <div className={classes.fields}>
                        <div className={classes.field}>
                            <label>Email Address</label>
                            <span>help@tamilanexpress.com</span>
                        </div>
                        <div className={classes.field}>
                            <label>Phone Number</label>
                            <span>+94777862675</span>
                        </div>
                    </div>
                    <span className={classes.edit} />
                </section>
                <section className={classes.section} ref={personalRef}>
                    <div className={classes.title}> {t('profile-personal')} </div>
                    <div className={classes.fields}>
                        {personal}
                    </div>
                    <span role='button' aria-label='edit personal information' className={classes.edit} onClick={() => toggleHandler('personal')}> Edit </span>
                </section>
                <section className={classes.section} ref={deliveryRef}>
                    <div className={classes.title}> {t('profile-delivery')} </div>
                    <div className={classes.fields}>
                        {delivery}
                    </div>
                    <span role='button' aria-label='edit personal information' className={classes.edit} onClick={() => toggleHandler('delivery')}> Edit </span>
                </section>
            </div>
        </PageContainer>
    );
};

export default index;