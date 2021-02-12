import React from 'react';

import classes from './WhyUs.module.scss';

const WhyUs = () => {
    return (
        <section className={classes.why}>
            <div className={classes.container}>
                <h1>WHY BUY FROM US?</h1>
                <div className={classes.items}>
                    <div className={classes.item}>
                        <img src='why/delivery.svg' />
                        <p>Faster Delivery</p>
                    </div>
                    <div className={classes.item}>
                        <img src='why/payment.svg' />
                        <p>Secure Payment</p>
                    </div>
                    <div className={classes.item}>
                        <img src='why/deal.svg' />
                        <p>Hot Deals</p>
                    </div>
                    <div className={classes.item}>
                        <img src='why/safe.svg' />
                        <p>Safe Shopping</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;