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
                        <img src='/logo/logo.png' />
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
                        <a href='#'>Contact us</a>
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
                    <div className={classes.content}>
                        <div>
                            <p className={classes.text}>
                                ©Tamilan Express. All Rights Reserved.
                            </p>
                            <p className={classes.text}>
                                &nbsp; Powered by <a href='https://photoxinate.com'>Photoxinate.</a>
                            </p>
                        </div>
                        <img className={classes.paypal} src="./Credit-Card-Icons.svg" border="0" alt="Available payments - paypal" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;