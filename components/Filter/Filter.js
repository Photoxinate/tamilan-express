import React, { useState } from 'react';
import useWindowSize from '../../hooks/useWindowDimensions';

import classes from './Filter.module.scss';
import Item from './Item/Item';

const Filter = () => {

    const [showFilter, setShowFilter] = useState(false);

    const filters = [
        {title: 'Brands', options: [{name: 'Anchor', checked: false}, {name: 'Nestle', checked: false}] },
        {title: 'Type', options: [{name: 'Milk Powder', checked: false}, {name: 'Coconut Powder', checked: false}, {name: 'Spice Powder', checked: false}, {name: 'Chicken Masala', checked: false}] },
        {title: 'Color', options: [{name: 'White', checked: false}, {name: 'Black', checked: true}] },
        {title: 'DImensions', options: [{name: '40x60cm', checked: false}, {name: '60x90cm', checked: true}, {name: '80x120cm', checked: false}] },
    ]

    const { width } = useWindowSize();

    const isClickable = width <= 768;

    const showFilterHandler = width <= 768 ? () => {
        setShowFilter(prev => !prev);
    } : undefined;

    const keyFilterHandler = width <= 768 ? e => {
        if(e.key === 'Enter')
            setShowFilter(prev => !prev);
    } : undefined;

    const style = width <= 768 ? showFilter ? {display: 'block', height: '100%'} : {display: 'none', height: 0} : undefined;

    const filtersHTML = filters.map(filter => (<Item key={filter.title} title={filter.title} options={filter.options} />));

    return (
        <div className={classes.filter}>
            <h3 onClick={showFilterHandler} onKeyPress={keyFilterHandler} tabIndex={isClickable ? 0 : -1} role={isClickable ? 'button' : ''} >Filters</h3>
            <div className={classes.container} style={style}>
                {filtersHTML}
            </div>
        </div>
    );
};

export default Filter;