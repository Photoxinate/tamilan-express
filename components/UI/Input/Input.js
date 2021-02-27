import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import classes from './Input.module.scss';
import Input from 'semantic-ui-react/dist/commonjs/elements/Input';

const InputText = (props) => {
  const { control, errors } = useForm();

  const validations = {
    name: {
      required: 'Please enter your name',
      minLength: {
        value: 2,
        message: "That doesn't look like a name",
      },
    },
    phone: {
      pattern: {
        value: /^([+]?\d{1,2}[.-\s]?)?(\d{3}[.-]?){2}\d{4,5}$/,
        message: "That doesn't look like a mobile number",
      },
    },
    email: {
      required: 'Please enter your email',
      pattern: {
        value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
        message: "That doesn't look like an email address",
      },
    },
    address: {
      required: 'Please enter your address',
      minLength: {
        value: /A-Za-z0-9'\.\-\s\,/,
        message: "That doesn't look like a name",
      },
    },
    address2: {
      minLength: {
        value: /A-Za-z0-9'\.\-\s\,/,
        message: "That doesn't look like a name",
      },
    },
  };

  const styleCont = props.label?{width:'80%'}:{width:'100%'}

  const error = errors[props.name];
  const isError = error !== undefined;
  const helperText = error ? error.message : props.helper;
  const maxLength = props.max ? props.max : 60;
  const style =
    props.type === 'hidden' ? { display: 'none' } : { margin: '10px auto' };
  const placeHolder = props.placeHolder ? props.placeHolder : '';
  const label = props.label? <label htmlFor={props.name}> {props.label}</label>: null;

  return (
    <div className={classes.wrap}>
      {label}
      <div style={styleCont}>
        <Controller
          control={control}
          name={props.name}
          helperText={helperText}
          rules={validations[props.name]}
          render={() => (
            <Input fluid placeholder={placeHolder} error={isError} />
          )}
        />
      </div>
    </div>
  );
};

export default InputText;
