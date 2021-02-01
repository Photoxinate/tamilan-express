import React from 'react';

import classes from './Footer.module.scss';
import NewsLetter from './NewsLetter/NewsLetter';


const Footer = () => {
    return (
        <>
            <NewsLetter />
            <div className={classes.container}>
                <div className={classes.links}>
                    <div className={classes.intro}>
                        <img src='/logo/photoxinatewhite.png' />
                        <div className={classes.contact}>
                            <div className={classes.item}>
                                <strong>Address: </strong> Toronto, Canada
                            </div>
                            <div className={classes.item}>
                                <strong>Email: </strong> <a href='mailto:photoxinate@gmail.com'>photoxinate@gmail.com</a>
                            </div>
                            <div className={classes.item}>
                                <strong>Call us: </strong> <a href='tel:+94777123456' className={classes.call}>1-1001-234-567</a>
                            </div>
                        </div>
                    </div>
                    <div className={classes.nav}>
                        <h3>Products</h3>
                        <a href='#'>Categories</a>
                        <a href='#'>Deal of the day</a>
                        <a href='#'>New Arrivals</a>
                        <a href='#'>Featured Products</a>
                    </div>
                    <div className={classes.nav}>
                        <h3>Company</h3>
                        <a href='#'>About us</a>
                        <a href='#'>Cantact us</a>
                        <a href='#'>Terms and Conditions</a>
                        <a href='#'>Privacy Policy</a>
                    </div>
                    <div className={classes.nav}>
                        <h3>Account</h3>
                        <a href='#'>My Account</a>
                        <a href='#'>Orders</a>
                        <a href='#'>My Cart</a>
                    </div>
                </div>
                <div className={classes.copyright}>
                    <div>
                        <p className={classes.text}>
                            ©Tamilan Express. All Rights Reserved.
                        </p>
                        <p className={classes.text}>
                            &nbsp; Powered by <a href='https://photoxinate.com'>Photoxinate.</a>
                        </p>
                    </div>
                    <a className={classes.paypal} href="https://www.paypal.com/webapps/mpp/paypal-popup" title="How PayPal Works" >
                        <img src="https://www.paypalobjects.com/webstatic/mktg/logo/AM_SbyPP_mc_vs_dc_ae.jpg" border="0" alt="PayPal Acceptance Mark" />
                    </a>
                </div>
            </div>
        </>
    );
};

export default Footer;