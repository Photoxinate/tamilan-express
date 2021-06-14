import React from 'react'
import RunningLogo from '../../components/RunningLogo/RunningLogo'
import Divider from 'semantic-ui-react/dist/commonjs/elements/Divider'
import { contact } from '../../config/config'
import { Clock, Location, Mail, Phone } from '../../components/Icons/Icons'
import ContactForm from '../../components/Forms/ContactForm/ContactForm'
import useTranslation from 'next-translate/useTranslation'
import Head from 'next/head'

import classes from './index.module.scss'

const index = () => {

    const { t } = useTranslation('about-us')

    return (
        <div className={classes.index}>
            <Head>
                <title>Tamilan Express - About Us</title>
                <meta name='description' content='Tamilanexpress.ca is canada’s largest tamil e-commerce organization. Grab the Biggest Deals, Offers and promotions on over 100 brands. We provide a large variety of international products across Canada.' />
                <meta property="og:title" content={'Tamilan Express - About Us'} />
                <meta property="og:description" content={'Tamilanexpress.ca is canada’s largest tamil e-commerce organization. Grab the Biggest Deals, Offers and promotions on over 100 brands. We provide a large variety of international products across Canada.'} />
                <meta name="twitter:description" content={'Tamilanexpress.ca is canada’s largest tamil e-commerce organization. Grab the Biggest Deals, Offers and promotions on over 100 brands. We provide a large variety of international products across Canada.'} />
                <meta name="twitter:title" content={'Tamilan Express - About Us'} />
            </Head>
            <div className={classes.banner}>
                <img src='/images/team.jpg' alt='Members of Tamilan Express' height={500} width={900} />
            </div>
            <section className={classes.about}>
                <span className={classes.span}>We Make your shopping easy!</span>
                <h1>{t('Who-We')}</h1>
                <p>
                    {t('About-Paragraph')} 
                </p>
            </section>
            <RunningLogo />
            <section className={classes.contact} id='contact'>
                <h1> {t('contact_us')} </h1>
                <div className={classes.details}>
                    <div className={classes.item}>
                        <label className={classes.title}><Phone color='#888' /> {t('about-phone')}</label>
                        <div className={classes.value}>
                            <a href={'tel:' + contact.phone.link}>{contact.phone.text}</a>
                        </div>
                    </div>
                    <div className={classes.item}>
                        <label className={classes.title}><Mail color='#888' /> {t('about-email')}</label>
                        <div className={classes.value}>
                            <a href={'mailto:' + contact.email}>{contact.email}</a>
                        </div>
                    </div>
                    <div className={classes.item}>
                        <label className={classes.title}><Location color='#888' /> {t('about-address')}</label>
                        <div className={classes.value}>{contact.address}</div>
                    </div>
                    <div className={classes.item}>
                        <label className={classes.title}><Clock color='#888' /> {t('about-hours')}</label>
                        <div className={[classes.value, classes.hours].join(' ')}>
                            <div> {contact.openHours.weekdays} </div>
                            <div> {contact.openHours.weekend} </div>
                        </div>
                    </div>
                </div>
                <Divider horizontal>Or</Divider>
                <div className={classes.form}>
                    <ContactForm/>
                </div>
            </section>
        </div>
    );
};

export default index;