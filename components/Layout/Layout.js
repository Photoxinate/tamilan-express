import React from 'react';
import Head from 'next/head';
import styles from './Layout.module.css';
import Footer from '../footer/footer';
import Header from '../Header/Header';
import WhyUs from '../WhyUs/WhyUs';
import NavBar from '../NavBar/NavBar';
import ProductCart from '../ProductCart/ProductCart';


const Layout = (props) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Tamilan Express</title>
            </Head>
            
            <Header />
            <NavBar/>
            <main className={styles.main}>
                {props.children}

            </main>
            <ProductCart/>
            <footer className={styles.footer}>
                <WhyUs />
                <Footer />
            </footer>
        </div>
    );
};

export default Layout;