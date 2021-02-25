import React from 'react';
import Select from 'react-select';

import classes from './Header.module.scss';

const options = [
    { value: 'usdollar', label: 'USD' },
    { value: 'canadiandollar', label: 'CAD' },
];

const height = 28;

const customStyles = {
    container: (provided) => ({
        ...provided,
        width: 130,
    }),
    control: (provided) => ({
        ...provided,
        border: 'none',
        minHeight: height,
        height: height,
        backgroundColor: '#252525',
        cursor: 'pointer'
    }),
    indicatorSeparator: () => ({
        display: 'none'
    }),
    placeholder: () => ({
        color: '#eee'
    }),
    singleValue: () => ({
        color: '#fff'
    }),
    indicatorsContainer: (provided) => ({
        ...provided,
        height: height
    }),
    input: () => ({
        height: height/2,
        display: 'flex',
        alignItems: 'center',
        caretColor: 'transparent',
        cursor: 'pointer'
    }),
    menu: (provided) => ({
        ...provided,
        backgroundColor: '#383838',
    }),
    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isFocused ? '#535353' : 'transparent',
        fontSize: 14,
        height: height + 2
    }),
    valueContainer: (provided) => ({
        ...provided,
        height: height
    }),
}

const Header = () => {

    const changeCurrencyHandler = value => {
        console.log(value);
    }

    return (
        <div className={classes.header}>
            <div className={classes.container}>
                <p>
                    <span style={{color: '#aaa'}}>Email:</span> <a href='mailto:support@tamilanexpress.com' >support@tamilanexpress.com</a> | 
                    Free Shipping for all order above $99
                </p>
                <Select
                    className={classes.select}
                    onChange={changeCurrencyHandler}
                    instanceId='currencies'
                    placeholder='Currency'
                    styles={customStyles}
                    options={options} />
            </div>
        </div>
    );
};

export default Header;