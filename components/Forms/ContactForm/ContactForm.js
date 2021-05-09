import { useSession } from 'next-auth/client';
import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useToasts } from 'react-toast-notifications';
import Form from 'semantic-ui-react/dist/commonjs/collections/Form';
import Button from 'semantic-ui-react/dist/commonjs/elements/Button';
import Input from '../../UI/Input/Input';
import classes from './ContactForm.module.scss';

const ContactFrom = () => {

  const [ session ] = useSession()

  const [loading, setLoading] = useState(false)

  const methods = useForm()

  const { addToast } = useToasts()

  const { handleSubmit } = methods

  const formSubmitHandler = data => {
        
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
    <div className={classes.wrap}>
      <FormProvider {...methods}>
        <Form onSubmit={handleSubmit(formSubmitHandler)}>
          <div className={classes.inputWrapper}>
            <Input name="name" helperText="Enter valid name" placeholder="Name" form required/>
            <Input name="email" placeholder="E-mail" form required />
            <Input name="phone" placeholder="Phone" form required/>
            <Input name="message" placeholder="Message" form required max="150" />
          </div>
          <Form.Button primary type='submit' disabled={loading} > {loading ? 'LOADING..' : 'SUBMIT'} </Form.Button>
        </Form>
      </FormProvider>
    </div>
  );
};

export default ContactFrom;
