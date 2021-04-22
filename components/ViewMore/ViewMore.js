import Link from 'next/link'
import React from 'react'
import { ArrowRight } from '../Icons/Icons'

import classes from './ViewMore.module.scss'

const ViewMore = ({ text, link }) => {
    return (
        <div className={classes.viewMore}>
            <Link href={link}><a className={classes.container}>
                {text}
                <span className={classes.arrow}>
                    <ArrowRight />
                </span>
            </a></Link>
        </div>
    );
};

export default ViewMore;