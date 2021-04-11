import { signin, signout, useSession } from 'next-auth/client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Accordion from 'semantic-ui-react/dist/commonjs/modules/Accordion'
import { ArrowRight } from '../../Icons/Icons'
import Backdrop from '../../UI/BackDrop/Backdrop'
import classes from './SideDrawer.module.scss'


const getContent = (categories, allCategories) => {
    return categories.map(cat => {
        if(cat.hasChild) {
            return <Accordion.Accordion 
                key={cat.name}
                panels={[{ key: cat._id, title: cat.name, content: { content: <div className={classes.accordify2}>{getContent(allCategories[cat.name])}</div> } }]} />
        }
        else {
            return (
                <Link href={'/categories/' + cat._id} key={cat._id}><a className={classes.accordionLink}>
                    {cat.name}
                </a></Link>
            )
        }    
    })
}

const accordify2 = categories => {
    console.log('here');
    const panels = Object.keys(categories).map(key => {
        if(key === 'main') {
            return getContent(categories[key], categories)
        }
    })

    return [{ key: 'categories-main', title: 'Categories', content: { content: <div className={classes.accordify1}>{panels}</div> } }]
}

const SideDrawer = ({ click, toggle, categories }) => {

    const [session] = useSession()
    const [panels, setPanels] = useState([])

    const sign = session ? 
        <Link href='/api/auth/signout'><a className={classes.signout} onClick={(e) => { e.preventDefault(); signout() }}> Sign Out </a></Link> : 
        <Link href='/api/auth/signin'><a className={classes.signin} onClick={(e) => { e.preventDefault(); signin() }}> Sign In | Register </a></Link>

    const [style, setStyle] = useState({transform: 'translateX(150%)'})

    useEffect(() => {
        setStyle(toggle ? {transform: 'translateX(0%)'} : {transform: 'translateX(150%)'})
        toggle ? document.body.style.overflow = 'hidden' : document.body.style.overflow = null
    }, [toggle])

    useEffect(() => {
        setPanels(accordify2(categories))
    }, [categories])

    return (
        <>
            <Backdrop clicked={click} show={toggle} />
            <div className={classes.drawer} style={style} >
                <div className={classes.container}>
                    <div className={classes.close} onClick={click} aria-label='Close mobile menu' role='button' >
                        <ArrowRight />
                    </div>

                    <ul className={classes.navs}>
                        <li>
                            <Link href='/'><a> Home </a></Link>
                        </li>
                        <li className={classes.accordion}>
                            <Accordion panels={panels} />
                        </li>
                        <li>
                            <Link href='/about-us'><a> About Us </a></Link>
                        </li>
                        <li>
                            <Link href='/orders'><a> Order History </a></Link>
                        </li>
                        <li className={classes.line} />
                        <li>
                            {sign}
                        </li>
                    </ul>

                    
                </div>
            </div>
        </>
    );
};

export default SideDrawer;