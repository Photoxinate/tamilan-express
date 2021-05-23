import React, { useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import PageContainer from '../../hoc/PageContainer/PageContainer'
import useTranslation from 'next-translate/useTranslation'
import Modal from 'semantic-ui-react/dist/commonjs/modules/Modal'
import Button from 'semantic-ui-react/dist/commonjs/elements/Button'
import { getSession, signOut, useSession } from 'next-auth/client'
import { useToasts } from 'react-toast-notifications'
import fetch from '../../config/fetch'
import axios from '../../axios'

import classes from './index.module.scss'

const ContactForm = dynamic(() => import('../../components/Forms/ProfileForms/ContactForm'), { loading: () => <p>Loading...</p> })
const PersonalForm = dynamic(() => import('../../components/Forms/ProfileForms/PersonalForm'), { loading: () => <p>Loading...</p> })
const DeliveryForm = dynamic(() => import('../../components/Forms/ProfileForms/DeliveryForm'), { loading: () => <p>Loading...</p> })

const index = ({ data, status }) => {

    const { t } = useTranslation('profile')

    const { addToast } = useToasts()

    const [session] = useSession()

    if(status && status === 401) {
        signOut()
        return null
    }
    
    const [info, setInfo] = useState(data)

    const address = info.address
    const deliveryAddress = info.deliveryAddress

    const [editPersonal, setEditPersonal] = useState(false)
    const [editDelivery, setEditDelivery] = useState(false)
    const [editContact, setEditContact] = useState(false)
    const [deactivateAccount, setDeactivateAccount] = useState(false)

    const personalRef = useRef(null)
    const deliveryRef = useRef(null)
    const contactRef = useRef(null)

    useState(() => {
        if(!info.email) {
            addToast('Please provide your email in contact section of profile for e-bills and promotions!', 
                { appearance: 'warning' })
        }
    }, [])

    const deactivateHandler = () => {
        const headers = { Authorization: `Bearer ${session.accessToken}` }

        axios.delete('users/me', { headers })
            .then(() => {
                setDeactivateAccount(false)
                signOut()
            })
            .catch(err => {
                console.log(err);
            })
    }

    const toggleHandler = (type, info = null) => {
        if(type === 'personal') {
            setEditPersonal(prev => {
                if(prev) personalRef.current.scrollIntoView() 
                return !prev
            })
            
        }
        else if(type === 'delivery') {
            setEditDelivery(prev => {
                if(prev) deliveryRef.current.scrollIntoView() 
                return !prev
            })
        }
        else {
            setEditContact(prev => {
                if(prev) contactRef.current.scrollIntoView() 
                return !prev
            })
        }
        if(info) setInfo(info)
    }

    // assign values
    const addressValue = address ? `
        ${address.street1}${address.street1 && ', '}
        ${address.street2}${address.street2 && ', '}
        ${address.city}${address.city && ', '}
        ${address.state}${address.state && ', '}
        ${address.zipCode}
    ` : <p style={{color: 'orangered'}}>Provide your address.</p>

    const deliveryAddressValue = deliveryAddress ? `
        ${deliveryAddress.street1}${deliveryAddress.street1 && ', '}
        ${deliveryAddress.street2}${deliveryAddress.street2 && ', '}
        ${deliveryAddress.city}${deliveryAddress.city && ', '}
        ${deliveryAddress.state}${deliveryAddress.state && ', '}
        ${deliveryAddress.zipCode}
    ` : null

    const deliveryContact = deliveryAddress && deliveryAddress.contact ? 
        deliveryAddress.contact : <p style={{color: 'gray'}}>No contact number.</p>

    // assign view HTML
    let contact = (
        <>
            <div className={classes.field}>
                <label>{t('email')}</label>
                <span>{info.email}</span>
            </div>
            <div className={classes.field}>
                <label>{t('phone')}</label>
                <span>{info.mobile ? info.mobile : <p style={{color: 'orangered'}}>Provide your mobile number</p>}</span>
            </div>
        </>
    )

    let personal = (
        <>
            <div className={classes.field}>
                <label>{t('owner')}</label>
                <span>{`${info.firstName} ${info.middleName ? info.middleName : ''} ${info.lastName ? info.lastName : ''}`}</span>
            </div>
            <div className={classes.field}>
                <label>{t('address')}</label>
                <span>{addressValue}</span>
            </div>
        </>
    )

    let delivery = deliveryAddress && !deliveryAddress.isSame ? (
        <>
            <div className={classes.field}>
                <label>{t('name')}</label>
                <span>{deliveryAddress.name}</span>
            </div>
            <div className={classes.field}>
                <label>{t('address')}</label>
                <span>{deliveryAddressValue}</span>
            </div>
            <div className={classes.field}>
                <label>{t('contact-no')}</label>
                <span>{deliveryContact}</span>
            </div>
        </>
    ) : <p style={{color: 'gray'}}>Same as personal information.</p>

    // assign values to form HTML when click edit
    if(editContact) {
        contact = <ContactForm 
            setInfo={setInfo}
            email={info.email}
            mobile={info.mobile}
            onCancel={toggleHandler} />
    }

    if(editPersonal) {
        personal = <PersonalForm 
            setInfo={setInfo}
            firstName={info.firstName}
            middleName={info.middleName}
            lastName={info.lastName}
            address={info.address}
            onCancel={toggleHandler} />
    }

    if(editDelivery) {
        delivery = <DeliveryForm 
            setInfo={setInfo}
            address={info.deliveryAddress}
            onCancel={toggleHandler} />
    }

    return (
        <PageContainer title='Profile' id='profile'>
            <div className={classes.profile}>
                <section className={classes.section} ref={contactRef}>
                    <div className={classes.title}> {t('contact')} </div>
                    <div className={classes.fields}>
                        {contact}
                    </div>
                    <span role='button' tabIndex='0' aria-label='edit contact information' className={classes.edit} onClick={() => toggleHandler('contact')}> { editContact ? t('cancel') : t('edit') } </span>
                </section>
                <section className={classes.section} ref={personalRef}>
                    <div className={classes.title}> {t('personal')} </div>
                    <div className={classes.fields}>
                        {personal}
                    </div>
                    <span role='button' tabIndex='0' aria-label='edit personal information' className={classes.edit} onClick={() => toggleHandler('personal')}> { editPersonal ? t('cancel') : t('edit') } </span>
                </section>
                <section className={classes.section} ref={deliveryRef}>
                    <div className={classes.title}> {t('delivery')} </div>
                    <div className={classes.fields}>
                        {delivery}
                    </div>
                    <span role='button' tabIndex='0' aria-label='edit delivery information' className={classes.edit} onClick={() => toggleHandler('delivery')}> { editDelivery ? t('cancel') : t('edit') } </span>
                </section>
                <section className={classes.section} id='settings'>
                    <div className={classes.title}> {t('settings')} </div>
                    <div className={classes.fields}>
                        <span role='button' tabIndex='0' aria-label='deactivate account' className={classes.edit} onClick={() => setDeactivateAccount(true)}>
                            {t('my-deactivate')}
                        </span>
                    </div>
                    <Modal
                        centered={true}
                        onClose={() => setDeactivateAccount(false)}
                        open={deactivateAccount}
                        >
                        <Modal.Header>{t('deactivate')}</Modal.Header>
                        <Modal.Content>
                            <p>{t('deactivate-msg')}</p>
                        </Modal.Content>
                        <Modal.Actions>
                            <Button
                                content={t('deact')}
                                onClick={deactivateHandler}
                                color='red'
                                />
                            <Button
                                content={t('cancel')}
                                onClick={() => setDeactivateAccount(false)}
                                />
                        </Modal.Actions>
                    </Modal>
                </section>
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

    const headers = { Authorization: `Bearer ${session.accessToken}` }
    const res = await fetch('users/me', { headers })

    return {
        props: {
            ...res
        }
    }
}

export default index;