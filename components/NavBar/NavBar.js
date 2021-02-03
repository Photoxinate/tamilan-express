import React from 'react'
import Logo from '../Logo/Logo'
import SearchBar from './SearchBar/SearchBar'
import NavLinks from './NavLinks/NavLinks'
import ProfileLinks from './ProfileLinks/ProfileLinks'
import classes from './NavBar.module.scss'

const NavBar = (props) => {

    const navLinks = [
        {
            name:"Home",
            url:'/home'
        },
        {
            name:"Categories",
            url:'/categories'
        },
        {
            name:"About us",
            url:'/about-us'
        },
    ]

    return(
        <div className={classes.navBarWrap}>
            <div className={classes.navBar}>
            <Logo width="200px" />
            <SearchBar/>
            <NavLinks navLinks={navLinks}/>
            <ProfileLinks/>
        </div>
        </div>
        
    )
}

export default NavBar;