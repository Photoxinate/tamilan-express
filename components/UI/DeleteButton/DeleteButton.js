import React from 'react'
import { Delete } from '../../Icons/Icons'
import classes from './DeleteButton.module.scss'

export const DeleteButton = () => {
    return (
        <div className={classes.wrap}>
            
            <button><Delete color='#000' size='24'/> </button>
        </div>
    )
}

export default DeleteButton
