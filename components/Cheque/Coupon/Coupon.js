import React from 'react'
import TextField from '../../UI/TextField/TextField'
import Button from '../../UI/Button/Button'
import classses from './Coupon.module.scss'
const Coupon = props => {
    return (
        <div className={classses.coupon}>
            <TextField placeHolder='Enter your coupon here'/>
            <Button text='Apply'/>
        </div>
    )
}

export default Coupon
