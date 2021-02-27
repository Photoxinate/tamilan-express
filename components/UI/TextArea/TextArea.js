import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import TextArea from 'semantic-ui-react/dist/commonjs/addons/TextArea';
import Form from 'semantic-ui-react/dist/commonjs/collections/Form';

const InputTextArea = () => {

  const { control, errors } = useForm();

  const error = errors[props.name];
  const validation = {
    required: 'Please enter your message',
    pattern: {
      value: /.*[^\s].*/,
      message: 'Please enter your message',
    },
  },
  const isError = error !== undefined;
  const label = props.label ? (
    <label htmlFor={props.name}> {props.label}</label>
  ) : null;

  return (
    <div className={classes.wrap}>
      {label}
      <div className={classes.controller}>
        <Controller
          control={control}
          name={props.name}
          helperText={helperText}
          rules={validation}
          render={() => (
            <Form>
              <TextArea placeholder={placeHolder} error={isError} />
            </Form>
          )}
        />
      </div>
    </div>
  );
};

export default InputTextArea;
