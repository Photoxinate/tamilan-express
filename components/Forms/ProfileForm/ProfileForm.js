import React from 'react'
import Form from 'semantic-ui-react/dist/commonjs/collections/Form'
import Button from 'semantic-ui-react/dist/commonjs/elements/Button'

import classes from './ProfileForm.module.scss'

const states = [
    { key: 'colombo', text: 'Colombo', value: 'colombo' },
    { key: 'kegalle', text: 'Kegalle', value: 'kegalle' },
    { key: 'ratnapura', text: 'Ratnapura', value: 'ratnapura' },
    { key: 'jaffna', text: 'Jaffna', value: 'jaffna' },
]

const ProfileForm = ({ delivery, onCancel }) => {

    const contact = delivery ? <Form.Input label='Contact Number' placeholder='Contact No' fluid type='phone' /> : ''

    return (
        <div className={classes.container}>
            <Form>
                <Form.Group widths={2}>
                    <Form.Input label='First Name' placeholder='First Name' fluid type='text' required />
                    <Form.Input label='Middle Name' placeholder='Middle Name' fluid type='text' />
                </Form.Group>
                <Form.Group widths={2}>
                    <Form.Input label='Last Name' placeholder='Last Name' fluid type='text' required />
                </Form.Group>
                <Form.Group widths={2}>
                    <Form.Input label='Street Address' placeholder='Street Address' fluid type='text' required />
                    <Form.Input label='Street Address 2' placeholder='Street Address 2' fluid type='text' />
                </Form.Group>
                <Form.Group widths={2}>
                    <Form.Input label='City' placeholder='City' fluid type='text' required />
                    <Form.Select label='State' fluid options={states} placeholder='State' required />
                </Form.Group>
                <Form.Group widths={2}>
                    <Form.Input label='Zip Code' placeholder='Zip Code' fluid type='text' required />
                    {contact}
                </Form.Group>
                <Form.Group>
                    <Form.Button onClick={() => onCancel(delivery ? 'delivery' : 'personal')}> CANCEL </Form.Button>
                    <Form.Button primary type='submit' > SAVE </Form.Button>
                </Form.Group>
                
            </Form>
        </div>
    );
};

export default ProfileForm;