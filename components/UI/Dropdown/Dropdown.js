import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import Dropdown from 'semantic-ui-react/dist/commonjs/modules/Dropdown';
import classes from './Dropdown.module.scss'

const CustomDropdown = (props) => {
  const { control, errors } = useForm();

  const error = errors[props.name];
  const options = props.options;
  const isError = error !== undefined;
  const placeHolder = props.placeHolder ? props.placeHolder : '';

  return (
    <div className={classes.wrap}>
      <label htmlFor={props.name}> {props.label}</label>
      <div className={classes.controller}>
        <Controller
          control={control}
          name={props.name}
          render={() => (
            <Dropdown
              placeholder={props.placeHolder}
              fluid
              selection
              options={options}
            />
          )}
        />
      </div>
    </div>
  );
};

export default CustomDropdown;
