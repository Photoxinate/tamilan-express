import React, { useState } from 'react';
import Radio from 'semantic-ui-react/dist/commonjs/addons/Radio';
import Form from 'semantic-ui-react/dist/commonjs/collections/Form';
import TextArea from 'semantic-ui-react/dist/commonjs/addons/TextArea';

const ShippingMethodForm = ({ shippingMethod, onShippingMethodChange, commentRef }) => {

  const [comment, setComment] = useState()

  const handleChange = (e, { value }) => {
    onShippingMethodChange(value)
  }

  const commentHandler = (e, { value }) => {
    setComment(value)
  }

  return (
    <>
      <h2>Shipping Method</h2>
      <div>
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
      <div>
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
        <p>• If you would like to add a comment about your order, please write it in the field box.</p>
        <TextArea 
          placeholder="Comments about your order" 
          rows={2} 
          onChange={commentHandler} 
          ref={commentRef} 
          value={comment} />
      </Form>
    </>
  );
};

export default ShippingMethodForm;
