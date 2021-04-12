import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Input from 'semantic-ui-react/dist/commonjs/elements/Input'
import useSWR from 'swr'
import fetch from '../../config/fetch'
import transform from '../../config/transformCategories2'
import DropdownMenu from '../DropdownMenu/DropdownMenu'
import { Menu, Search, Shopping } from '../Icons/Icons'
import Account from './Account/Account'
import CartCount from './CartCount/CartCount'
import classes from './Navigation.module.scss'
import SideDrawer from './SideDrawer/SideDrawer'


const Navigation = () => {

    const { t } = useTranslation('common')

    const count = useSelector(state => state.cart.count)

    const { data } = useSWR('categories', fetch)

    const [prevPath, setPrevPath] = useState(null)
    const [menuToggle, setMenuToggle] = useState(false)
    const [categoryToggle, setCategoryToggle] = useState(false)
    const [categories, setCategories] = useState([])

    const { pathname } = useRouter()

    useEffect(() => {
        setMenuToggle(prev => !prev && prevPath === pathname) //if(prev === true && prevPath !=== pathname) return false : return true;
        setCategoryToggle(prev => !prev && prevPath === pathname)
        setPrevPath(pathname)
    }, [pathname])

    useEffect(() => {
        setCategories(transform(data?.data))
    }, [data])

    const menuToggleHandler = (e) => {
        e.preventDefault()
        setMenuToggle(prev => !prev);
    }

    const categoryToggleHandler = (e) => {
        e.preventDefault()
        setCategoryToggle(prev => !prev)
    }

    const countHTML = count > 0 ? <span className={classes.count}>{count}</span> : ''

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
                            {/* {countHTML} */}
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