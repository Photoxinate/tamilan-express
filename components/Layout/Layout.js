import React from 'react';
import Head from 'next/head';
import styles from './Layout.module.css';
import Footer from '../footer/footer';
import Header from '../Header/Header';
import WhyUs from '../WhyUs/WhyUs';
import NavBar from '../NavBar/NavBar';
import Navigation from '../Navigation/Navigation';


const Layout = (props) => {
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
        </div>
    );
};

export default Layout;