import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import useSWR from 'swr'
import swrFetch from '../../config/swrFetch'
import transform from '../../config/transformCategories2'
import DropdownMenu from '../DropdownMenu/DropdownMenu'
import { Menu, Search, Shopping } from '../Icons/Icons'
import Account from './Account/Account'
import CartCount from './CartCount/CartCount'
import classes from './Navigation.module.scss'
import SearchInput from './SearchInput'
import SideDrawer from './SideDrawer/SideDrawer'


const Navigation = () => {

    const { t } = useTranslation('common')

    const { data } = useSWR('categories?limit=100', swrFetch)

    const [prevPath, setPrevPath] = useState(null)
    const [menuToggle, setMenuToggle] = useState(false)
    const [categoryToggle, setCategoryToggle] = useState(false)
    const [categories, setCategories] = useState([])

    const { pathname } = useRouter()

    useEffect(() => {
        if(prevPath !== pathname) {
            setMenuToggle(false)
            setCategoryToggle(false)
        }
        setPrevPath(pathname)
    }, [pathname])

    useEffect(() => {
        setCategories(transform(data?.docs   || []))
    }, [data])

    const menuToggleHandler = (e) => {
        e.preventDefault()
        setMenuToggle(prev => !prev);
    }

    const categoryToggleHandler = (e) => {
        e.preventDefault()
        setCategoryToggle(prev => !prev)
    }

    return (
        <>
            <div className={classes.navigation}>
                <nav className={classes.container}>
                    <Link href='/'>
                        <a className={classes.logo}> <img src='/logo/logo.png' width={180} height={74.33} alt='Tamilan express logo, a smart phone along with a shop' /> </a>
                    </Link>
                    <div className={classes.search}>
                        <SearchInput />
                    </div>
                    <ul className={classes.navs}>
                        <li className={classes.nav}>
                            <Link href='#'><a onClick={categoryToggleHandler}>  
                                {t('Nav-cat')} 
                            </a></Link>
                            {categoryToggle && <DropdownMenu categories={categories} onClick={categoryToggleHandler} />}
                        </li>
                        <li className={classes.nav}>
                            <Link href='/about-us'><a>  {t('Nav-abt')} </a></Link>
                        </li>
                    </ul>
                    <div className={classes.icons}>
                        <Account />
                        <Link href='/cart'><a aria-label='shopping cart' title='Shopping cart' className={classes.cart}>
                            <CartCount className={classes.count} />
                            <Shopping size={26} />
                        </a></Link>
                        <span className={classes.menu} role='button' aria-label='toggle menu' aria-controls='sidedrawer' tabIndex={0} onClick={menuToggleHandler}>
                            <Menu size={26} />
                        </span>
                    </div>
                </nav>
            </div>
            <SideDrawer id='sidedrawer' click={menuToggleHandler} toggle={menuToggle} categories={categories} />
        </>
    );
};

export default Navigation;