import React from 'react';
import Select from 'react-select';

import classes from './Header.module.scss';

const options = [
    { value: 'usdollar', label: 'USD' },
    { value: 'canadiandollar', label: 'CAD' },
];

const customStyles = {
    option: (provided, state) => ({
        ...provided
    }),
    container: (provided) => ({
        ...provided,
        width: 130,
    }),
    control: (provided) => ({
        ...provided,
        border: 'none',
        cursor: 'pointer'
    }),
    indicatorSeparator: () => ({
        display: 'none'
    }),
    placeholder: () => ({
        color: '#5d5d5d'
    })
}

const Header = () => {

    const changeCurrencyHandler = value => {
        console.log(value);
    }

    return (
        <div className={classes.header}>
            <p>Free Shipping for all order above $99</p>
            <Select
                onChange={changeCurrencyHandler}
                instanceId='currencies'
                placeholder='Currency'
                styles={customStyles}
                options={options} />
        </div>
    );
};

export default Header;