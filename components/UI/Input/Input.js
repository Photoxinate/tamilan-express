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

  const error = errors[props.name];
  const isError = error !== undefined;
  const helperText = error ? error.message : props.helper;
  const maxLength = props.max ? props.max : 60;
  const style =
    props.type === 'hidden' ? { display: 'none' } : { margin: '10px auto' };
  const placeHolder = props.placeHolder ? props.placeHolder : '';

  return (
    <div className={classes.wrap}>
      <label htmlFor={props.name}> {props.label}</label>
      <div className={classes.controller}>
        <Controller
          control={control}
          name={props.name}
          helperText={helperText}
          render={() => (
            <Input fluid placeholder={placeHolder} error={isError} />
          )}
        />
      </div>
    </div>
  );
};

export default InputText;
