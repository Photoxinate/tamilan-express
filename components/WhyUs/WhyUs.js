import React from 'react';

import classes from './WhyUs.module.scss';

const WhyUs = () => {
    return (
        <section className={classes.why}>
            <div className={classes.container}>
                <h1>WHY BUY FROM US?</h1>
                <div className={classes.items}>
                    <div className={classes.item}>
                        <img src='/why/delivery.svg' width='80%' alt='Faster delivery' />
                        <p>Faster Delivery</p>
                    </div>
                    <div className={classes.item}>
                        <img src='/why/payment.svg' width='80%' alt='Secure payment with paypal' />
                        <p>Secure Payment</p>
                    </div>
                    <div className={classes.item}>
                        <img src='/why/deal.svg' width='80%' alt='Hot deals every week' />
                        <p>Hot Deals</p>
                    </div>
                    <div className={classes.item}>
                        <img src='/why/safe.svg' width='80%' alt='Safer shopping in this pandemic situation' />
                        <p>Safe Shopping</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;