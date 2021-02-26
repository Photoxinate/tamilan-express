import React, {useState} from 'react'
import AddressForm from '../Forms/AddressForm/AddressForm'
import ShippingMethodForm from '../Forms/ShippingMethodForm/ShippingMethodForm'
import Checkbox from 'semantic-ui-react/dist/commonjs/modules/Checkbox';

import classes from './CheckoutForm.module.scss'

const CheckoutForm = () => {

    const [isAddresschecked, setIsAddresschecked] = useState(false);

    const onToggleAddress = () => {
        setIsAddresschecked(!isAddresschecked)
      }

    const deliveryAddress = isAddresschecked ? null : <AddressForm title="Deliver Address"/> 

    return (
        <div className={classes.wrap}>
            <AddressForm title="Billing Address" />
             <Checkbox
              label={{ children: 'Use this address for delivery addresss' }}
              onChange={onToggleAddress}
              checked={isAddresschecked}
            />
            { deliveryAddress }
            <ShippingMethodForm/>
        </div>
    )
}

export default CheckoutForm
