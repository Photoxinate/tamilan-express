import React, { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import Form from 'semantic-ui-react/dist/commonjs/collections/Form'
import Input from '../../UI/Input/Input'
import { useToasts } from 'react-toast-notifications'
import axios from '../../../axios'
import { useSession } from 'next-auth/client'

import classes from './ProfileForms.module.scss'

const DeliveryForm = ({ onCancel, email, mobile }) => {

    const [ session ] = useSession()

    const [loading, setLoading] = useState(false)

    const methods = useForm()

    const { addToast } = useToasts()

    const { handleSubmit } = methods

    const formSubmitHandler = data => {
        console.log({ data, session });
        
        const headers = { Authorization: `Bearer ${session.accessToken}` }

        setLoading(true)
        axios.patch('users', data, { headers })
            .then(res => {
                addToast('Contact info successfully updated!', { appearance: 'success' })
                setLoading(false)
                onCancel('contact', res.data)
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
                        <Input name='email' label='Email' placeholder='Email' form type='email' defaultValue={email} required disabled={email ? true : false} />
                    </Form.Group>
                    <Form.Group widths={2}>
                        <Input name='mobile' label='Mobile No.' placeholder='Mobile Number' form type='text' defaultValue={mobile} required />
                    </Form.Group>
                    <Form.Group style={{float: 'right', marginTop: '20px'}}>
                        <Form.Button onClick={() => onCancel('contact')} compact> CANCEL </Form.Button>
                        <Form.Button primary type='submit' compact disabled={loading} > {loading ? 'LOADING..' : 'SAVE'} </Form.Button>
                    </Form.Group>
                </Form>
            </FormProvider>
        </div>
    );
};

export default DeliveryForm;