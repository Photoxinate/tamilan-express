import Head from 'next/head';
import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import ProductModal from '../ProductModal/ProductModal';
import WhyUs from '../WhyUs/WhyUs';
import styles from './Layout.module.css';


const Layout = (props) => {

    if (typeof window !== 'undefined') {
        window.fbAsyncInit = function() {
            FB.init({
                xfbml            : true,
                version          : 'v10.0'
            });
        };

        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }

    return (
        <div className={styles.container}>
            <Head>
                <meta name="google-signin-client_id" content="871485404239-c8vjp41smf7d13ecc07ndkp9qbq23bec.apps.googleusercontent.com.apps.googleusercontent.com" />
                <title>Tamilan Express</title>
            </Head>
            
            <Header />
            <Navigation />
            
            <main className={styles.main}>
                {props.children}
            </main>
            
            <footer className={styles.footer}>
                <WhyUs />
                <Footer />
            </footer>

            <div id="fb-root"></div>

            <div className="fb-customerchat"
                attribution="setup_tool"
                page_id="193409722177221"
                theme_color="#F93800">
            </div>
            <ProductModal />
        </div>
    );
};

export default Layout;