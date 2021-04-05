import { useSession } from 'next-auth/client'
import React, { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import Form from 'semantic-ui-react/dist/commonjs/collections/Form'
import Input from '../../UI/Input/Input'
import { useToasts } from 'react-toast-notifications'

import classes from './ProfileForms.module.scss'

const states = [
    { key: 'colombo', text: 'Colombo', value: 'colombo' },
    { key: 'kegalle', text: 'Kegalle', value: 'kegalle' },
    { key: 'ratnapura', text: 'Ratnapura', value: 'ratnapura' },
    { key: 'jaffna', text: 'Jaffna', value: 'jaffna' },
]

const DeliveryForm = ({ onCancel, same, address }) => {

    const [ session ] = useSession()

    const [loading, setLoading] = useState(false)

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
                addToast('Personal info successfully updated!', { appearance: 'success' })
                setLoading(false)
                onCancel('delivery', res.data)
            })
            .catch(err => {
                setLoading(false)
                addToast(err.response.data.message, { appearance: 'error' })
            })
    }

    return (
        <div className={classes.container}>
            <FormProvider {...methods}>
                <Form onSubmit={handleSubmit(formSubmitHandler)}>
                    <Form.Checkbox label='Same as personal address' style={{marginBottom: '15px'}} />
                    <Form.Group widths={2}>
                        <Input name='name' label='Name' placeholder='Name' form type='text' required />
                    </Form.Group>
                    <Form.Group widths={2}>
                        <Input name='addr1' label='Street Address' placeholder='Street Address' type='text' required form />
                        <Input name='addr2' label='Street Address 2' placeholder='Street Address 2' form />
                    </Form.Group>
                    <Form.Group widths={2}>
                        <Input name='city' label='City' placeholder='City' type='text' required form />
                        <Form.Select label='State' fluid options={states} placeholder='State' required />
                    </Form.Group>
                    <Form.Group widths={2}>
                        <Input name='zipCode' label='Zip Code' placeholder='Zip Code' type='text' required form />
                        <Input name='contact' label='Contact Number' placeholder='Contact No' form type='phone' />
                    </Form.Group>
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