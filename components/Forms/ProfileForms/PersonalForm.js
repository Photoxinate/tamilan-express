import { useSession } from 'next-auth/client'
import React, { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import Form from 'semantic-ui-react/dist/commonjs/collections/Form'
import Input from '../../UI/Input/Input'
import axios from '../../../axios'
import { useToasts } from 'react-toast-notifications'

import classes from './ProfileForms.module.scss'

const states = [
    { key: 'colombo', text: 'Colombo', value: 'colombo' },
    { key: 'kegalle', text: 'Kegalle', value: 'kegalle' },
    { key: 'ratnapura', text: 'Ratnapura', value: 'ratnapura' },
    { key: 'jaffna', text: 'Jaffna', value: 'jaffna' },
]

const PersonalForm = ({ onCancel, firstName, middleName, lastName, address }) => {

    const [ session ] = useSession()

    const [loading, setLoading] = useState(false)

    const methods = useForm()

    const { addToast } = useToasts()

    const { handleSubmit } = methods

    const formSubmitHandler = data => {
        const { street1, street2, city, state, zipCode, ...rest } = data
        data = {
            ...rest,
            address: {
                street1,
                street2,
                city,
                state,
                zipCode
            }
        }
        
        const headers = { Authorization: `Bearer ${session.accessToken}` }

        setLoading(true)
        axios.patch('users', data, { headers })
            .then(res => {
                console.log(res);
                addToast('Personal info successfully updated!', { appearance: 'success' })
                setLoading(false)
                onCancel('personal', res.data)
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
                    <Form.Group widths={2}>
                        <Input name='firstName' label='First Name' placeholder='First Name' type='text' defaultValue={firstName} required form />
                        <Input name='middleName' label='Middle Name' placeholder='Middle Name' defaultValue={middleName} type='text' form />
                    </Form.Group>
                    <Form.Group widths={2}>
                        <Input name='lastName' label='Last Name' placeholder='Last Name' defaultValue={lastName} type='text' required form />
                    </Form.Group>
                    <Form.Group widths={2}>
                        <Input name='street1' defaultValue={address?.street1} label='Street Address' placeholder='Street Address' type='text' required form />
                        <Input name='street2' defaultValue={address?.street2} label='Street Address 2' placeholder='Street Address 2' form />
                    </Form.Group>
                    <Form.Group widths={2}>
                        <Input name='city' defaultValue={address?.city} label='City' placeholder='City' type='text' required form />
                        <Input name='state' defaultValue={address?.state} label='State' placeholder='State' type='select' options={states} required form />
                    </Form.Group>
                    <Form.Group widths={2}>
                        <Input name='zipCode' defaultValue={address?.zipCode} label='Zip Code' placeholder='Zip Code' type='text' required form />
                    </Form.Group>
                    <Form.Group style={{float: 'right', marginTop: '20px'}}>
                        <Form.Button onClick={() => onCancel('personal')} compact> CANCEL </Form.Button>
                        <Form.Button primary type='submit' compact disabled={loading} > {loading ? 'LOADING..' : 'SAVE'} </Form.Button>
                    </Form.Group>
                </Form>
            </FormProvider>
        </div>
    );
};

export default PersonalForm;