import React from 'react'
import Link from 'next/link'

import classes from './AccountCard.module.scss'

const AccountCard = ({ name, link, icon }) => {

    return (
        <Link href={link}><a className={classes.card}>
            <div className={classes.icon}> {icon} </div>
            <h2 className={classes.name}> {name} </h2>
        </a></Link>
    );
};

export default AccountCard;