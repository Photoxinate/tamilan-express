import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import Form from 'semantic-ui-react/dist/commonjs/collections/Form';
import Input from 'semantic-ui-react/dist/commonjs/elements/Input';
import classes from './Input.module.scss';


const validations = {
  name: {
    required: 'Please enter recepient name',
    minLength: {
      value: 2,
      message: "That doesn't look like a name",
    },
  },
  firstName: {
    required: 'Please enter your name',
    minLength: {
      value: 2,
      message: "That doesn't look like a name",
    },
  },
  lastName: {
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
  mobile: {
    pattern: {
      value: /^([+]?\d{1,2}[.-\s]?)?(\d{3}[.-]?){2}\d{4,5}$/,
      message: "That doesn't look like a mobile number",
    },
  },
  contact: {
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
  street: {
    required: 'Please enter your address',
    minLength: {
      value: /A-Za-z0-9'\.\-\s\,/,
      message: "That doesn't look like an address",
    },
  },
  street2: {
    minLength: {
      value: /A-Za-z0-9'\.\-\s\,/,
      message: "That doesn't look like an address",
    },
  },
  state: {
    required: 'Please select your state'
  }
}


const InputText = ({ label, name, helper, max, type, placeHolder, defaultValue, form, setSame, ...rest }) => {
  
  const { control, errors } = useFormContext();

  const styleCont = label ? { width: '80%' } : { width: '100%' }

  const error = errors[name];
  const isError = error !== undefined;
  const helperText = error ? error.message : helper;
  const maxLength = max ? max : 60;
  const style = type === 'hidden' ? { display: 'none' } : { display: 'unset' };
  const labelHTML = label ? <label htmlFor={name}> {label} </label> : null;
  const defaultVal = defaultValue ? defaultValue : '';
  
  if(form && type === 'checkbox')
    return (
      <Controller
        control={control}
        name={name}
        rules={validations[name]}
        defaultValue={defaultValue}
        render={({onChange, value}) => (
          <Form.Checkbox label={label} defaultChecked={defaultValue} onChange={(_, data) => { onChange(data.checked); setSame(data.checked); }} {...rest} />
        )}
      />
    )

  if(form && type === 'select')
    return (
      <Controller
        control={control}
        name={name}
        rules={validations[name]}
        defaultValue={defaultVal}
        render={({onChange, value}) => (
          <Form.Select fluid error={isError} label={label} onChange={(e, { value }) => { onChange(value) }} value={value} {...rest} />
        )}
      />
    )

  if(form)
    return (
      <Controller
        control={control}
        name={name}
        style={style}
        helperText={helperText}
        rules={validations[name]}
        defaultValue={defaultVal}
        render={({onChange, value}) => (
          <Form.Input fluid error={isError} label={label} onChange={onChange} value={value} {...rest} />
        )}
      />
    );

  return (
    <div className={classes.wrap}>
      {labelHTML}
      <div style={styleCont}>
        <Controller
          control={control}
          name={name}
          helperText={helperText}
          rules={validations[name]}
          defaultValue={defaultVal}
          render={() => (
            <Input fluid placeholder={placeHolder} error={isError} />
          )}
        />
      </div>
    </div>
  );
};

export default InputText;
