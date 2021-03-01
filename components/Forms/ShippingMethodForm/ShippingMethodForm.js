import React, { useState } from 'react';
import Radio from 'semantic-ui-react/dist/commonjs/addons/Radio';
import Form from 'semantic-ui-react/dist/commonjs/collections/Form';
import TextArea from 'semantic-ui-react/dist/commonjs/addons/TextArea';
import classes from './ShippingMethodForm.module.scss';

const ShippingMethodForm = () => {
  const [shippingMethod, setShippingMethod] = useState('shipping');

  const handleChange = (e, { value }) => {
    setShippingMethod(value);
  };

  return (
    <div className={classes.wrap}>
      <h3>Shipping Method</h3>
      <div className={classes.radioWrap}>
        <Form.Field>
          <Radio
            label="Regular shipping GTA only"
            name="radioGroup"
            value="shipping"
            checked={shippingMethod === 'shipping'}
            onChange={handleChange}
          />
        </Form.Field>
      </div>
      <div className={classes.radioWrap}>
        <Form.Field>
          <Radio
            label="Pickup from store"
            name="radioGroup"
            value="pickup"
            checked={shippingMethod === 'pickup'}
            onChange={handleChange}
          />
        </Form.Field>
      </div>
      <br />
      <Form>
        <p className={classes.commentText}>If you would like to add a comment abbout your order, please write it in
        the field box</p>
        <TextArea placeholder="Tell us more" />
      </Form>
    </div>
  );
};

export default ShippingMethodForm;
