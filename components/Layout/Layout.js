import Head from 'next/head';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCart } from '../../store/actions/cart';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import ProductModal from '../ProductModal/ProductModal';
import WhyUs from '../WhyUs/WhyUs';
import styles from './Layout.module.css';


const Layout = (props) => {

    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(fetchCart())
        
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

    }, [])

    return (
        <div className={styles.container}>
            <Head>
                <link rel='apple-touch-icon' sizes='180x180' href='/favicons/apple-touch-icon.png' />
                <link rel='icon' type='image/png' sizes='32x32' href='/favicons/favicon-32x32.png' />
                <link rel='icon' type='image/png' sizes='16x16' href='/favicons/favicon-16x16.png' />
                <link rel='manifest' href='/site.webmanifest' />
                <link rel='mask-icon' href='/favicons/safari-pinned-tab.svg' color='#FF582A' />
                <meta name='msapplication-TileColor' content='#FFC40D' />
                <meta name='theme-color' content='#FFFFFF' />

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