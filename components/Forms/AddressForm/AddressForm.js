import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import Input from '../../UI/Input/Input';
import Dropdown from '../../UI/Dropdown/Dropdown';
import classes from './AddressForm.module.scss';

const AddressForm = (props) => {


  const methods = useForm();

  const { handleSubmit, reset } = methods;

  const onSubmit = (data) => {
    console.log('FROM_DATA>>>', data);
  };
 
  const stateOptions = [
    { key: '1', value: 'chocolate', text: 'Chocolate' },
    { key: '2', value: 'strawberry', text: 'Strawberry' },
    { key: '3', value: 'vanilla', text: 'Vanilla' },
  ];
  const countryOptions = [
    { key: '4', value: 'chocolate', text: 'Chocolate' },
    { key: '5', value: 'strawberry', text: 'Strawberry' },
    { key: '6', value: 'vanilla', text: 'Vanilla' },
  ];

  return (
    <div className={classes.form} id="form">
      <h3>{props.title}</h3>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={classes.inputWrapper}>
            <Input
              name="address1"
              placeHolder="Enter your address here"
              label="Address 1"
              max="150"
            />
            <Input
              name="address2"
              placeHolder="Enter your address here"
              label="Address 2"
              max="150"
            />
            <Input
              name="city"
              placeHolder="Enter your city here"
              label="City"
              max="20"
            />
            <Input
              name="postalCode"
              placeHolder="Enter your postal code here"
              label="Postal Code"
              max="20"
            />
            <Dropdown
              name="state"
              label="Region / State"
              placeHolder="Select Region / State"
              options={stateOptions}
            />
            <Dropdown
              name="country"
              label="Country"
              placeHolder="Select Country"
              options={countryOptions}
            />
           
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default AddressForm;
