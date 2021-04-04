import Link from 'next/link'
import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import { ChevronLeft, ChevronRight } from '../Icons/Icons'
import Backdrop from '../UI/BackDrop/Backdrop'
import classes from './DropdownMenu.module.scss'


const DropdownMenu = ({ categories, onClick }) => {

    const [activeMenu, setActiveMenu] = useState('main')

    const [menuHeight, setmenuHeight] = useState()

    const changeMenuHandler = goToMenu => {
        setActiveMenu(goToMenu)
    }

    const calcHeightHandler = (el) => {
        const height = el.offsetHeight + 20
        setmenuHeight(height)
    }
    
    const DropdownItem = ({ children, rightIcon, leftIcon, goToMenu, link, back }) => {

        const style = back ? [classes.back, classes.item].join(' ') : classes.item

        return link ? 
        (
            <Link href={link}>
                <a className={style} onClick={() => goToMenu && changeMenuHandler(goToMenu)}>
                    <span className={classes.leftIcon}>{leftIcon}</span>
                    {children}
                    <span className={classes.rightIcon}>{rightIcon}</span>
                </a>
            </Link>
        ) : 
        (
            <div className={style} onClick={() => goToMenu && changeMenuHandler(goToMenu)}>
                <span className={classes.leftIcon}>{leftIcon}</span>
                {children}
                <span className={classes.rightIcon}>{rightIcon}</span>
            </div>
        )
        
    }
    
    const generateList = cats => {
        return cats.map(cat => {
            const rightIcon = cat.hasChild ? <ChevronRight /> : null
            const goToMenu = cat.hasChild ? cat.name : null
            const link = cat.hasChild ? null : '/categories/' + cat._id
            
            return (
                <DropdownItem key={cat._id} rightIcon={rightIcon} goToMenu={goToMenu} link={link}> 
                    {cat.name} 
                </DropdownItem>
            )
        })
    }
    
    const catHTML = Object.keys(categories).map(key => {
        const menuClass = key === 'main' ? 'primaryMenu' : 'secondaryMenu';

        return (
            <CSSTransition in={activeMenu === key} timeout={1} unmountOnExit onEnter={calcHeightHandler} key={key}>
                <div className={menuClass}>
                    {key != 'main' && <DropdownItem leftIcon={<ChevronLeft />} goToMenu='main' back> {key} </DropdownItem>}
                    {generateList(categories[key])}
                </div>
            </CSSTransition>
        )
    })

    return (
        <>
            <section className={classes.menu} onMouseLeave={onClick} >
                <div className={classes.wrapper} style={{ height: menuHeight }}>
                    {catHTML}
                </div>
            </section>
            <Backdrop show={true} clicked={onClick} style={{ background: 'transparent' }} />
        </>
    );
};

export default DropdownMenu;