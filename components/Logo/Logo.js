import React from 'react'
import classes from './Logo.module.scss'

const Logo = (props) => {


    return(
        <div className={classes.wrap}>
            <img width={props.width} height="auto" src="./logo/TamilanExpressLogo.png"/>
        </div>
    )
}

export default Logo;