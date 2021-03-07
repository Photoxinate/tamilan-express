import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Input from 'semantic-ui-react/dist/commonjs/elements/Input'
import { Menu, Search, Shopping } from '../Icons/Icons'
import Account from './Account/Account'
import Categories from './Categories/Categories'
import classes from './Navigation.module.scss'
import SideDrawer from './SideDrawer/SideDrawer'
import useTranslation from 'next-translate/useTranslation'



const Navigation = () => {

    const { t } = useTranslation('common')


    const [prevPath, setPrevPath] = useState(null);
    const [toggle, setToggle] = useState(false);
    const { pathname } = useRouter();

    useEffect(() => {
        setToggle(prev => !prev && prevPath === pathname )
        setPrevPath(pathname)
    }, [pathname]);

    const handleToggle = (e) => {
        e.preventDefault()
        setToggle(prev => !prev);
    }

    return (
        <>
            <div className={classes.navigation}>
                <nav className={classes.container}>
                    <Link href='/'>
                        <a className={classes.logo}> <img src='/logo/logo.png' width={180} alt='Tamilan express logo, a smart phone along with a shop' /> </a>
                    </Link>
                    <div className={classes.search}>
                        <Input required action={{ icon: <Search aria-label='search' color='#fff' size={16} strokeWidth={3} />, primary: true }} fluid aria-label='Search' placeholder='Search...' />
                    </div>
                    <ul className={classes.navs}>
                        <li className={classes.nav}>
                            <Categories />
                        </li>
                        <li className={classes.nav}>
                            <Link href='/about-us'><a>  {t('Nav-abt')} </a></Link>
                        </li>
                    </ul>
                    <div className={classes.icons}>
                        <Account />
                        <Link href='/cart'><a aria-label='shopping cart' title='Shopping cart' className={classes.cart}>
                            <span className={classes.count}>1</span>
                            <Shopping size={26} />
                        </a></Link>
                        <span className={classes.menu} role='button' aria-label='toggle menu' aria-controls='sidedrawer' tabIndex={0} onClick={handleToggle}>
                            <Menu size={26} />
                        </span>
                    </div>
                </nav>
            </div>
            <SideDrawer id='sidedrawer' click={handleToggle} toggle={toggle} />
        </>
    );
};

export default Navigation;