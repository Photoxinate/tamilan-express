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
      <h2>About us</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <ContactDetail />
      <div className={classes.formWrap}>
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
      <Button>Submit</Button>
      </div>
    </div>
  );
};

export default ContactFrom;