import React from 'react';

import classes from './WhyUs.module.scss';

const WhyUs = () => {
    return (
        <div className={classes.container}>
            <h2>WHY BUY FROM US?</h2>
            <div className={classes.items}>
                <div className={classes.item}>
                    <p>FAST DELIVERY</p>
                    <img src='https://www.pngkit.com/png/full/135-1354941_fast-delivery-icon-red-01-fast-delivery-icon.png' />
                </div>
                <div className={classes.item}>
                    <p>SECURE PAYMENT</p>
                    <img src='https://1000logos.net/wp-content/uploads/2017/05/Paypal-Logo.png' />
                </div>
            </div>
        </div>
    );
};

export default WhyUs;