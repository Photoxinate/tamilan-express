import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Accordion from 'semantic-ui-react/dist/commonjs/modules/Accordion'
import { ArrowRight } from '../../Icons/Icons'
import Backdrop from '../../UI/BackDrop/Backdrop'
import { useSession, signin, signout } from 'next-auth/client'

import classes from './SideDrawer.module.scss'

let jsonData = [
    {
        key: "Categories",
        title: "Categories",
        content: [
        {
            key: "Menu",
            title: "Menu",
            content: [
            {
                key: "Sharing",
                title: "Sharing",
                content: [
                {
                    key: "Home",
                    title: "Home",
                    content: [],
                },

                {
                    key: "Profile",
                    title: "Profile",
                    content: [
                    {
                        key: "Account",
                        title: "Account",
                        content: [],
                    },
                    {
                        key: "Followers",
                        title: "Followers",
                        content: [],
                    },
                    ],
                },
                {
                    key: "Request",
                    title: "Request",
                    content: [
                    {
                        key: "Exhange",
                        title: "Exchange",
                        content: [],
                    },
                    ],
                },
                ],
            },
            ],
        },
        {
            key: "Settings",
            title: "Settings",
            content: [
            {
                key: "Profile Setting",
                title: "Profile Setting",
                content: [],
            },
            ],
        },
        ],
    }
];

const accordify = (jsonData) => {
    if (jsonData.length === 0) {
        return;
    } 
    else {
        for (let i = 0; i < jsonData.length; i++) {

            accordify(jsonData[i]["content"]);

            if (jsonData[i]["content"].length !== 0) {
                jsonData[i]["content"] = {
                    content: (
                        <div style={{paddingLeft: 10, background: '#e9e9e9', borderRadius: 4}}>
                            <Accordion.Accordion panels={jsonData[i]["content"]} />
                        </div>
                    ),
                };
            } 
            else {
                jsonData[i]["content"] = {
                    content: (
                        <div>
                            {jsonData[i]["title"]}
                        </div>
                    ),
                };
            }
        }
    }
}
accordify(jsonData)

const SideDrawer = ({ click, toggle }) => {


    const [session] = useSession()

    const sign = session ? 
        <Link href='/api/auth/signout'><a className={classes.signout} onClick={(e) => { e.preventDefault(); signout() }}> Sign Out </a></Link> : 
        <Link href='/api/auth/signin'><a className={classes.signin} onClick={(e) => { e.preventDefault(); signin() }}> Sign In | Register </a></Link>

    const [style, setStyle] = useState({transform: 'translateX(150%)'})

    useEffect(() => {
        setStyle(toggle ? {transform: 'translateX(0%)'} : {transform: 'translateX(150%)'})
        toggle ? document.body.style.overflow = 'hidden' : document.body.style.overflow = null;
    }, [toggle])

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
                            <Accordion panels={jsonData} />
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