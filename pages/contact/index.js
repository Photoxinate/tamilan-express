import React from 'react'
import ContactForm from '../../components/Forms/ContactForm/ContactForm'
import classes from './index.module.scss'

export const index = () => {
    return (
        <div className={classes.wrap}>
            <ContactForm/>
        </div>
    )
}

export default index