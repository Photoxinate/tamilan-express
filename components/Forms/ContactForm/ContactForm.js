import { useSession } from 'next-auth/client';
import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useToasts } from 'react-toast-notifications';
import Form from 'semantic-ui-react/dist/commonjs/collections/Form';
import Button from 'semantic-ui-react/dist/commonjs/elements/Button';
import Input from '../../UI/Input/Input';
import axios from '../../../axios'
import classes from './ContactForm.module.scss';

const ContactFrom = () => {

  const [ session ] = useSession()

  const [loading, setLoading] = useState(false)

  const methods = useForm()

  const { addToast } = useToasts()

  const { handleSubmit, reset } = methods

  const formSubmitHandler = (data) => {
        
    setLoading(true)
    axios.post('email/contact', data)
        .then(res => {
            addToast('Submitted Successfully!', { appearance: 'success' })
            setLoading(false)

            reset()
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
            <Input name="message" placeholder="Message" form type="textArea" required multiline rows={5} max="150" />
          </div>
          <Form.Button primary type='submit' disabled={loading} > {loading ? 'LOADING..' : 'SUBMIT'} </Form.Button>
        </Form>
      </FormProvider>
    </div>
  );
};

export default ContactFrom;
