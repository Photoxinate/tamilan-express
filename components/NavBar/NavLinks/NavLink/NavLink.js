import React from 'react'
import Link from 'next/link'
import classes from './NavLink.module.scss'

const NavLink = (props) => (
    <div className={classes.wrap}>
       <Link href={props.url}><a> {props.name} </a></Link>
    </div>
)

export default NavLink