import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import InputText from '../UI/Input/Input';
import Dropdown from '../UI/Dropdown/Dropdown';
import classes from './Form.module.scss';


const AddressForm = props => {

    const methods = useForm();

    const { handleSubmit, reset } = methods;

    const onSubmit =  () => {
        console.log("FROM_DATA>>>");
      };
    
    const stateOptions = [
        { key:'1', value: 'chocolate', text: 'Chocolate' },
        { key:'2', value: 'strawberry', text: 'Strawberry' },
        { key:'3', value: 'vanilla', text: 'Vanilla' }
      ]
    const countryOptions = [
        { key:'4', value: 'chocolate', text: 'Chocolate' },
        { key:'5', value: 'strawberry', text: 'Strawberry' },
        { key:'6', value: 'vanilla', text: 'Vanilla' }
      ]

    return (
        <div className={classes.form} id='form'>
            <h2>{props.title}</h2>
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={classes.inputWrapper}>
                        <InputText name='address1' placeHolder='Enter your address here' label='Address 1' max='150'/>
                        <InputText name='address2' placeHolder='Enter your address here' label='Address 2' max='150' />
                        <InputText name='city' placeHolder='Enter your city here' label='City'  max='20' />
                        <InputText name='postalCode' placeHolder='Enter your postal code here' label='Postal Code'  max='20' />
                        <Dropdown name='state' label='Region / State' placeHolder='Select Region / State' options={stateOptions} />
                        <Dropdown name='country' label='Country' placeHolder='Select Country' options={countryOptions} />
                    </div>
                </form>
            </FormProvider>
        </div>
    );
};

export default AddressForm;