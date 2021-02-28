import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Accordion from 'semantic-ui-react/dist/commonjs/modules/Accordion'
import { ArrowRight } from '../../Icons/Icons'
import Backdrop from '../../UI/BackDrop/Backdrop'
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
                        <div style={{marginLeft: 10}}>
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

const SideDrawer = ({ click, toggle }) => {

    accordify(jsonData);

    const [style, setStyle] = useState({transform: 'translateX(150%)'})

    useEffect(() => {
        setStyle(toggle ? {transform: 'translateX(0%)'} : {transform: 'translateX(150%)'})
        toggle ? document.body.style.overflow = 'hidden' : document.body.style.overflow = null;
    }, [toggle])

    const panels1 = [
        { key: 'panel-1aa', title: 'Level 1AA', content: 'Level 1B Contents' },
        { key: 'panel-baa', title: 'Level 1AB', content: 'Level 1B Contents' },
    ]

    const Level1Content = (
        <div style={{marginLeft: 15}}>
          <Accordion.Accordion panels={panels1} />
        </div>
    )

    const panels = [
        { key: 'categories', title: 'Categories', content: { content: Level1Content } },
    ]

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
                            <Link href='/favourites'><a> Favourites </a></Link>
                        </li>
                        <li>
                            <Link href='/history'><a> Order History </a></Link>
                        </li>
                    </ul>

                    
                </div>
            </div>
        </>
    );
};

export default SideDrawer;