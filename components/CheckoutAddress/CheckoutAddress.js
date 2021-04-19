import dynamic from 'next/dynamic';
import React, { useRef, useState } from 'react'
import { useToasts } from 'react-toast-notifications';

import classes from './CheckoutAddress.module.scss'




const PersonalForm = dynamic(() => import('../../components/Forms/ProfileForms/PersonalForm'), { loading: () => <p>Loading...</p> })
const DeliveryForm = dynamic(() => import('../../components/Forms/ProfileForms/DeliveryForm'), { loading: () => <p>Loading...</p> })

const CheckoutAddress = ({ info, setInfo, t }) => {

    const [editPersonal, setEditPersonal] = useState(false)
    const [editDelivery, setEditDelivery] = useState(false)

    const { addToast } = useToasts()

    const personalRef = useRef(null)
    const deliveryRef = useRef(null)

    const address = info.address
    const deliveryAddress = info.deliveryAddress

    const toggleHandler = (type, info = null) => {
        if(type === 'personal') {
            setEditPersonal(prev => {
                if(prev) personalRef.current.scrollIntoView() 
                return !prev
            })
            
        }
        else if(type === 'delivery' && address) {
            setEditDelivery(prev => {
                if(prev) deliveryRef.current.scrollIntoView() 
                return !prev
            })
        }
        else if(type === 'delivery') {
            personalRef.current.scrollIntoView() 
            addToast(`Please provide your billing address first!`, { appearance: 'warning' })
            setEditPersonal(true)
        }
        if(info) setInfo(info)
    }

    // assign values
    let personal = address ? 
        <>
            <p>{`${info.firstName} ${info.middleName ? info.middleName : ''} ${info.lastName ? info.lastName : ''}`}</p>
            <p>{address.street1}{address.street2 ? `, ${address.street2}` : null}</p>
            <p>{address.city}</p>
            <p>{address.state}, {address.zipCode}</p>
            <button className={classes.change} onClick={() => toggleHandler('personal')}>{t('change')}</button>
        </> 
        : 
        <>
            <p style={{color: 'orangered'}}>Provide your billing address.</p>
            <button className={classes.change} onClick={() => toggleHandler('personal')}>Add</button>
        </>

    let delivery = deliveryAddress && !deliveryAddress.isSame ? 
        <>
            <p>{deliveryAddress.name}</p>
            <p>{deliveryAddress.street1}{deliveryAddress.street2 ? `, ${deliveryAddress.street2}` : null}</p>
            <p>{deliveryAddress.city}</p>
            <p>{deliveryAddress.state}, {deliveryAddress.zipCode}</p>
            {deliveryAddress.contact ? `<p>${deliveryAddress.contact}</p>` : null}
            <button className={classes.change} onClick={() => toggleHandler('delivery')}>{t('change')}</button>
        </> 
        : 
        <>
            <p style={{color: 'gray'}}>{t('delivery-text')}</p>
            <button className={classes.change} onClick={() => toggleHandler('delivery')}>{t('change')}</button>
        </>

    if(editPersonal) {
        personal = <PersonalForm 
            checkout
            firstName={info.firstName}
            middleName={info.middleName}
            lastName={info.lastName}
            address={info.address}
            onCancel={toggleHandler} />
    }
    
    if(editDelivery) {
        delivery = <DeliveryForm 
            checkout
            address={info.deliveryAddress}
            onCancel={toggleHandler} />
    }

    return (
        <>
          <section className={classes.section} ref={personalRef}>
            <h2 className={classes.title}> {t('billing-address')} </h2>
            <div className={classes.fields}>
              {personal}
            </div>
          </section>
          <section className={classes.section} ref={deliveryRef}>
            <h2 className={classes.title}> {t('delivery-address')} </h2>
            <div className={classes.fields}>
              {delivery}
            </div>
          </section>
        </>
    );
};

export default CheckoutAddress;