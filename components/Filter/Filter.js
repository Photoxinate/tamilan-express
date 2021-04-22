import React, { useState } from 'react';
import useWindowSize from '../../hooks/useWindowDimensions';
import RangeSlider from '../RangeSlider/RangeSLider';
import classes from './Filter.module.scss';
import Item from './Item/Item';


const Filter = ({ categories, brands, dimensions, types, prices }) => {

    const [showFilter, setShowFilter] = useState(false)

    const filters = []

    if(categories && categories.length > 0)
        filters.push({name: 'category', title: 'Categories', options: categories.map(cat => ({ name: cat.name, id: cat._id })) })
    if(brands && brands.length > 0)
        filters.push({name: 'brand', title: 'Brands', options: brands.map(brand => ({ name: brand.name, id: brand._id })) })
    if(dimensions && dimensions.length > 0)
        filters.push({name: 'dimension', title: 'Dimensions', options: dimensions.map(dim => ({ name: dim, id: dim })) })
    if(types && types.length > 0)
        filters.push({name: 'type', title: 'Product Type', options: types.map(type => ({ name: type, id: type })) })

    const { width } = useWindowSize();

    if(prices && !prices.min) return null

    const isClickable = width <= 768;

    const showFilterHandler = width <= 768 ? () => {
        setShowFilter(prev => !prev);
    } : undefined;

    const keyFilterHandler = width <= 768 ? e => {
        if(e.key === 'Enter')
            setShowFilter(prev => !prev);
    } : undefined;

    const style = width <= 768 ? showFilter ? {display: 'block', height: '100%'} : {display: 'none', height: 0} : undefined;

    const filtersHTML = filters.map(filter => <Item key={filter.name} name={filter.name} title={filter.title} options={filter.options} />);

    return (
        <div className={classes.filter}>
            <h3 
                onClick={showFilterHandler} 
                onKeyPress={keyFilterHandler} 
                tabIndex={isClickable ? 0 : -1} 
                role={isClickable ? 'button' : ''} >
                    Filters
            </h3>
            <div className={classes.container} style={style}>
                <RangeSlider {...prices} />
                {filtersHTML}
            </div>
        </div>
    );
};

export default Filter;