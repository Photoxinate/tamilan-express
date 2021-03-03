import React from 'react'
import { ArrowUp } from '../Icons/Icons'
import NewsLetter from './NewsLetter/NewsLetter'
import Link from 'next/link'

import classes from './Footer.module.scss'

const Footer = () => {

    const goTopHandler = () => {
        if(typeof window !== 'undefined')
            window.scrollTo(0, 0);
    }

    return (
        <>
            <NewsLetter />
            <div className={classes.container}>
                <div className={classes.links}>
                    <div className={classes.intro}>
                        <img src='/logo/logo.png' alt='Tamilan express logo, a smart phone along with a shop' />
                        <div className={classes.contact}>
                            <div className={classes.item}>
                                <strong>Address: </strong> Toronto, Canada
                            </div>
                            <div className={classes.item}>
                                <strong>Email: </strong> <a href='mailto:support@tamilanexpress.com'>support@tamilanexpress.com</a>
                            </div>
                            <div className={classes.item}>
                                <strong>Call us: </strong> <a href='tel:+94777123456' className={classes.call}>1-1001-234-567</a>
                            </div>
                        </div>
                    </div>
                    <div className={classes.nav}>
                        <h3>Products</h3>
                        <Link href='/categories'><a>Categories</a></Link>
                        <Link href='/shop/deal-of-the-day'><a>Deal of the day</a></Link>
                        <Link href='/shop/new-arrivals'><a>New Arrivals</a></Link>
                        <Link href='/shop/featured-products'><a>Featured Products</a></Link>
                    </div>
                    <div className={classes.nav}>
                        <h3>Company</h3>
                        <Link href='/about-us'><a>About us</a></Link>
                        <Link href='/about-us#contact'><a>Contact us</a></Link>
                        <Link href='/terms-conditions'><a>Terms and Conditions</a></Link>
                        <Link href='/privacy-policy'><a>Privacy Policy</a></Link>
                    </div>
                    <div className={classes.nav}>
                        <h3>Account</h3>
                        <Link href='/account'><a>My Account</a></Link>
                        <Link href='/orders'><a>Orders</a></Link>
                        <Link href='/cart'><a>My Cart</a></Link>
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
                        <img className={classes.paypal} src="/Credit-Card-Icons.svg" border="0" alt="Available payments - paypal" />
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