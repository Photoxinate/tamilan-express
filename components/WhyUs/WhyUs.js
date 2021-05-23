import React from 'react';

import classes from './WhyUs.module.scss';
import useTranslation from 'next-translate/useTranslation'


const WhyUs = () => {

    const { t } = useTranslation('common')

    return (
        <section className={classes.why}>
            <div className={classes.container}>
                <h1>{t('why-us')}</h1>
                <div className={classes.items}>
                    <div className={classes.item}>
                        <img src='/why/delivery.svg' width={1024} height={1018} alt='Faster delivery' />
                        <p>{t('why-FDelivery')}</p>
                    </div>
                    <div className={classes.item}>
                        <img src='/why/payment.svg' width={1024} height={1018} alt='Secure payment with paypal' />
                        <p>{t('why-SPayment')}</p>
                    </div>
                    <div className={classes.item}>
                        <img src='/why/deal.svg' width={1024} height={1018} alt='Hot deals every week' />
                        <p>{t('why-Hdeals')}</p>
                    </div>
                    <div className={classes.item}>
                        <img src='/why/safe.svg' width={1024} height={1018} alt='Safer shopping in this pandemic situation' />
                        <p>{t('why-shopping')}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;