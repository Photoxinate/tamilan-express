import React from 'react'
import { ArrowUp } from '../Icons/Icons'
import NewsLetter from './NewsLetter/NewsLetter'
import Link from 'next/link'
import { contact } from '../../config/config'

import classes from './Footer.module.scss'
import useTranslation from 'next-translate/useTranslation'
import { useState } from 'react'


const Footer = () => {

    const { t } = useTranslation('common')

    const [showInstall, setShowInstall] = useState(false)

    let defferedPrompt;

    const goTopHandler = () => {
        if(typeof window !== 'undefined')
            window.scrollTo(0, 0)
    }

    const installHandler = async () => {
        deferredPrompt.prompt()
        setShowInstall(false)
        const { outcome } = await defferedPrompt.userChoice
        defferedPrompt = null
    }

    if(typeof window != 'undefined') {
        window.addEventListener('beforeinstallprompt', e => {
            defferedPrompt = e
            setShowInstall(true)
        })

        window.addEventListener('appinstalled', () => {
            setShowInstall(false)
            defferedPrompt = null
        })
    }

    return (
        <>
            <NewsLetter />
            <div className={classes.container}>
                <div className={classes.links}>
                    <div className={classes.intro}>
                        <img src='/logo/logo.png' alt='Tamilan express logo, a smart phone along with a shop' width={272} height={112} />
                        <div className={classes.contact}>
                            <div className={classes.item}>
                                <strong>{t('Footer-Add')} </strong> {contact.address}
                            </div>
                            <div className={classes.item}>
                                <strong>{t('Footer-Email')} </strong> <a href={'mailto:' + contact.email}>{contact.email}</a>
                            </div>
                            <div className={classes.item}>
                                <strong>{t('Footer-Call')} </strong> <a href={'tel:' + contact.phone.link} className={classes.call}>{contact.phone.text}</a>
                            </div>
                        </div>
                    </div>
                    <div className={classes.nav}>
                        <h3>{t('Footer-Prod')} </h3>
                        <Link href='/categories'><a>{t('Footer-Cat')}</a></Link>
                        <Link href='/#deals'><a>{t('Footer-DoD')}</a></Link>
                        <Link href='/#recentproducts'><a>{t('Footer-NewArrival')}</a></Link>
                        <Link href='/#buy1get1'><a>{t('Footer-Buy1get1')}</a></Link>
                    </div>
                    <div className={classes.nav}>
                        <h3>{t('Footer-Company')}</h3>
                        <Link href='/about-us'><a>{t('Footer-About')}</a></Link>
                        <Link href='/about-us#contact'><a>{t('Footer-Contact')}</a></Link>
                        <Link href='/terms-conditions'><a>{t('Footer-TnC')}</a></Link>
                        <Link href='/privacy-policy'><a>{t('Footer-PnP')}</a></Link>
                    </div>
                    <div className={classes.nav}>
                        <h3>{t('Footer-Account')}</h3>
                        <Link href='/account'><a>{t('Footer-MyAcc')}</a></Link>
                        <Link href='/orders'><a>{t('Footer-Orders')}</a></Link>
                        <Link href='/cart'><a>{t('Footer-Mycart')}</a></Link>
                    </div>
                </div>
                {showInstall && <div className={classes.install}>
                    <button aria-label='install for android and ios' onClick={installHandler}>
                        <img src='/images/install-img.png' width={200} height={50} />
                    </button>
                </div>}
                <div className={classes.copyright}>
                    <div className={classes.content}>
                        <div>
                            <p className={classes.text}>
                                ©{t('tamilan-express')}. {t('all-rights')}.
                            </p>
                            <p className={classes.text}>
                                &nbsp; {t('powered-by-pre')} <a href='https://photoxinate.com'>{t('photoxinate')}</a> {t('powered-by-post')}
                            </p>
                        </div>
                        <img className={classes.paypal} src="/Credit-Card-Icons.svg" width={207} height={32} alt="Available payments - paypal" />
                    </div>
                </div>
        
                <button className={classes.gotop} aria-label='go to top' onClick={goTopHandler} > 
                    <ArrowUp size={20} color='#474747' /> 
                </button>
            </div>
        </>
    );
};

export default Footer;