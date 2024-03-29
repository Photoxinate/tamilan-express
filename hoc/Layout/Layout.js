import Head from 'next/head';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import ProductModal from '../../components/ProductModal/ProductModal';
import WhyUs from '../../components/WhyUs/WhyUs';
import { fetchCart } from '../../store/actions/cart';
import { Messenger } from 'react-live-chat-loader';
import { useRouter } from 'next/router'
import styles from './Layout.module.css';



const Layout = (props) => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCart())
    }, [])

    return (
        <div className={styles.container}>
            <Head>
                <link rel='apple-touch-icon' sizes='180x180' href='/favicons/apple-touch-icon.png' />
                <link rel='icon' type='image/png' sizes='32x32' href='/favicons/favicon-32x32.png' />
                <link rel='icon' type='image/png' sizes='16x16' href='/favicons/favicon-16x16.png' />
                <link rel="manifest" href="/manifest.json" />
                <link rel='mask-icon' href='/favicons/safari-pinned-tab.svg' color='#FF582A' />

                <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin/>
                <link rel='preload' as='style' href='https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap' />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap" media="print" onload="this.media='all'" />

                <meta name='msapplication-TileColor' content='#FFC40D' />
                <meta name='theme-color' content='#FFFFFF' />

                <meta name="google-signin-client_id" content="871485404239-c8vjp41smf7d13ecc07ndkp9qbq23bec.apps.googleusercontent.com.apps.googleusercontent.com" />
                
                {/* SEO */}
                <title>Tamilan Express - We Make your shopping easy!</title>
                <meta name='description' content='Tamilan Express the premium Tamil online shopping site in Canada. Shop for trendy men’s wear, women’s wear, kids wear, Grocery, Kitchenware & many more with great price all across Canada.' />
                <meta property="og:title" content={'Tamilan Express - We Make your shopping easy!'} />
                <meta property="og:description" content={'Tamilan Express the premium Tamil online shopping site in Canada. Shop for trendy men’s wear, women’s wear, kids wear, Grocery, Kitchenware & many more with great price all across Canada.'} />
                <meta property="og:url" content={typeof window != 'undefined' ? window.location.href : ''} />
                <meta name="og:type" content={'website'} />
                <meta property="og:image" content={'/logo.png'} />
                <meta property="og:image:alt" content={'A delivery truck with grocery items contains name on it as Tamilan Express'} />
                <meta property="og:image:secure_url" content={'/logo.png'} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:description" content={'Tamilan Express the premium Tamil online shopping site in Canada. Shop for trendy men’s wear, women’s wear, kids wear, Grocery, Kitchenware & many more with great price all across Canada.'} />
                <meta name="twitter:title" content={'Tamilan Express - We Make your shopping easy!'} />
                <meta name="twitter:image" content={'/logo.png'} />

                {/* PWA */}
                <meta name='application-name' content='Tamilan Express' />
                <meta name='apple-mobile-web-app-capable' content='yes' />
                <meta name='apple-mobile-web-app-status-bar-style' content='default' />
                <meta name='apple-mobile-web-app-title' content='Tamilan Express' />
                <meta name='mobile-web-app-capable' content='yes' />
                <meta name='theme-color' content='#F93800' />
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

            <Messenger themeColor='#F93800' color='#F93800' />

            <ProductModal />
        </div>
    );
};

export default Layout;