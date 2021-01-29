import React from 'react';

import classes from './Footer.module.scss';


const Footer = () => {
    return (
        <div className={classes.container}>
            <div className={classes.top}>

                <div className={classes.news}>
                    <div className={classes.text}>
                        <h2>
                            Sign Up For Newsletters
                        </h2>
                        <p>
                            Be the first to know. Sign up for news letter today.
                        </p>
                    </div>
                    <form className={classes.input}>
                        <input name='email' type='email' required placeholder='Enter your email...' />
                        <button>Sign Up</button>
                    </form>
                </div>
                <div className={classes.social}>
                    <a href='#'>
                        F
                    </a>
                    <a href='#'>
                        I
                    </a>
                    <a href='#'>
                        T
                    </a>
                </div>

            </div>
            <div className={classes.bottom}>

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
                        <h3>Products</h3>
                        <a href='#'>Categories</a>
                        <a href='#'>Deal of the day</a>
                        <a href='#'>New Arrivals</a>
                        <a href='#'>Featured Products</a>
                    </div>
                </div>
                <div className={classes.copyright}>
                    <p className={classes.text}>
                        ©Tamilan Express. All Rights Reserved. Powered by <a href='https://photoxinate.com'>Photoxinate.</a>
                    </p>
                    <a className={classes.paypal} href="https://www.paypal.com/webapps/mpp/paypal-popup" title="How PayPal Works" onclick="javascript:window.open('https://www.paypal.com/webapps/mpp/paypal-popup','WIPaypal','toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, width=1060, height=700'); return false;">
                        <img src="https://www.paypalobjects.com/webstatic/mktg/logo/AM_SbyPP_mc_vs_dc_ae.jpg" border="0" alt="PayPal Acceptance Mark" />
                    </a>
                </div>

            </div>
        </div>
    );
};

export default Footer;