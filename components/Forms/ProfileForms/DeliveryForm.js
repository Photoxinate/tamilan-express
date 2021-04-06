import { useSession } from 'next-auth/client'
import React, { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import Form from 'semantic-ui-react/dist/commonjs/collections/Form'
import Input from '../../UI/Input/Input'
import { useToasts } from 'react-toast-notifications'
import axios from '../../../axios'

import classes from './ProfileForms.module.scss'

const states = [
    { key: 'colombo', text: 'Colombo', value: 'colombo' },
    { key: 'kegalle', text: 'Kegalle', value: 'kegalle' },
    { key: 'ratnapura', text: 'Ratnapura', value: 'ratnapura' },
    { key: 'jaffna', text: 'Jaffna', value: 'jaffna' },
]

const DeliveryForm = ({ onCancel, address }) => {

    const [ session ] = useSession()

    const [loading, setLoading] = useState(false)
    const [isSame, setSame] = useState(address && address.isSame !== undefined ? address.isSame : true)

    const methods = useForm()

    const { addToast } = useToasts()

    const { handleSubmit } = methods

    const formSubmitHandler = data => {
        console.log(data);
        data = {
            deliveryAddress: { ...data }
        }
        
        const headers = { Authorization: `Bearer ${session.accessToken}` }

        setLoading(true)
        axios.patch('users', data, { headers })
            .then(res => {
                addToast('Delivery info successfully updated!', { appearance: 'success' })
                setLoading(false)
                onCancel('delivery', res.data)
            })
            .catch(err => {
                setLoading(false)
                addToast(err.response.data.message, { appearance: 'error' })
            })
    }

    const formHTML = !isSame ? (
        <>
            <Form.Group widths={2}>
                <Input defaultValue={address.name} name='name' label='Name' placeholder='Name' form type='text' required />
            </Form.Group>
            <Form.Group widths={2}>
                <Input defaultValue={address.street1} name='street1' label='Street Address' placeholder='Street Address' type='text' required form />
                <Input defaultValue={address.street2} name='street2' label='Street Address 2' placeholder='Street Address 2' form />
            </Form.Group>
            <Form.Group widths={2}>
                <Input defaultValue={address.city} name='city' label='City' placeholder='City' type='text' required form />
                <Input defaultValue={address.state} name='state' type='select' label='State' options={states} placeholder='State' required form />
            </Form.Group>
            <Form.Group widths={2}>
                <Input defaultValue={address.zipCode} name='zipCode' label='Zip Code' placeholder='Zip Code' type='text' required form />
                <Input defaultValue={address.contact} name='contact' label='Contact Number' placeholder='Contact No' form type='phone' />
            </Form.Group>
        </>
    ) : null

    return (
        <div className={classes.container}>
            <FormProvider {...methods}>
                <Form onSubmit={handleSubmit(formSubmitHandler)}>
                    <Input 
                        name='isSame' 
                        type='checkbox' 
                        defaultValue={address && address.isSame !== undefined ? address.isSame : true} 
                        label='Same as personal info' 
                        style={{marginBottom: '15px'}} 
                        setSame={setSame} 
                        form />
                    {formHTML}
                    <Form.Group style={{float: 'right', marginTop: '20px'}}>
                        <Form.Button onClick={() => onCancel('delivery')} compact> CANCEL </Form.Button>
                        <Form.Button primary type='submit' compact disabled={loading} > {loading ? 'LOADING..' : 'SAVE'} </Form.Button>
                    </Form.Group>
                </Form>
            </FormProvider>
        </div>
    );
};

export default DeliveryForm;