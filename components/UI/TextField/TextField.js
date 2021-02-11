import React from 'react'
import classes from './TextField.module.scss'

const TextField = props => {
    return (
        <div className={classes.textField} >
            <input placeholder={props.placeHolder} type='text'/>
        </div>
    )
}


export default TextField
