import React from 'react';

import classes from './Category.module.scss';
import Item from './Item/Item';

const Category = ({ categories }) => {
    return (
        <div className={classes.categories}>
            {categories.map(cat =>  <Item key={cat._id} id={cat._id} name={cat.name} image={`https://static.thenounproject.com/png/1176637-200.png`} />)}
        </div>
    );
};

export default Category;