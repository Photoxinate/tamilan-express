import React from 'react';

import classes from './Item.module.scss';

const Item = ({title, options}) => {

    const filterOptions = options.map(option => (
        <div key={option.name} className={classes.singleItem}>
            <input type='checkbox' defaultChecked={option.checked} id={'filter-' + option.name} />
            <label htmlFor={'filter-' + option.name}>{option.name}</label>
        </div>
    ));

    return (
        <div className={classes.item}>
            <h4>{title}</h4>
            <div className={classes.items}>
                {filterOptions}
            </div>
        </div>
    );
};

export default Item;