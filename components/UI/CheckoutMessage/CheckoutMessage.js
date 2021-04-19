import React from 'react'
import { X } from '../../Icons/Icons';

import classes from './CheckoutMessage.module.scss';

const CheckoutMessage = ({ message, onClose }) => {
    return (
        <div className={classes.container} onClick={onClose}>
            <X color='#fff' aria-label='close message popup' role='button' />
            <section className={classes.message}>
                { message }
            </section>
        </div>
    );
};

export default CheckoutMessage;