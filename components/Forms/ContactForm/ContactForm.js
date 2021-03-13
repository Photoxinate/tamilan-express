import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import ContactDetail from './ContactDetail/ContactDetail';
import InputText from '../../UI/Input/Input';
import Button from "semantic-ui-react/dist/commonjs/elements/Button"
import classes from './ContactForm.module.scss';

const ContactFrom = () => {
  const methods = useForm();

  const { handleSubmit, reset } = methods;

  const onSubmit = async (data) => {
    console.log('DATA>>>>', data);
    // setLoading(true)
    // try {
    //   await saveFormData(data);
    //   setLoading(false)
    //   toast('Message successfully sent. We will contact you ASAP!')
    //   reset()
    // } catch (e) {
    //   setLoading(false)
    //   toast.dark('Something went wrong. Try again!')
    // }
  };

  return (
    <div className={classes.wrap}>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={classes.inputWrapper}>
              <InputText name="name" placeHolder="Name" max="100" />
              <InputText name="email" placeHolder="E-mail" max="50" />
              <InputText name="phone" placeHolder="Phone" max="20" />
              <InputText name="message" placeHolder="Message" max="150" />
            </div>
          </form>
        </FormProvider>
      <Button content='Submit' primary/>
    </div>
  );
};

export default ContactFrom;
