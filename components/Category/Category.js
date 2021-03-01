import React from 'react';

import classes from './Category.module.scss';
import Item from './Item/Item';

const categories = [
    {name: 'Category Name', image: 'https://static.thenounproject.com/png/1176637-200.png'},
    {name: 'Category Name', image: 'https://static.thenounproject.com/png/1176637-200.png'},
    {name: 'Category Name', image: 'https://static.thenounproject.com/png/1176637-200.png'},
    {name: 'Category Name', image: 'https://static.thenounproject.com/png/1176637-200.png'},
    {name: 'Category Name', image: 'https://static.thenounproject.com/png/1176637-200.png'},
    {name: 'Category Name', image: 'https://static.thenounproject.com/png/1176637-200.png'},
    {name: 'Category Name', image: 'https://static.thenounproject.com/png/1176637-200.png'},
    {name: 'Category Name', image: 'https://static.thenounproject.com/png/1176637-200.png'},
    {name: 'Category Name', image: 'https://static.thenounproject.com/png/1176637-200.png'},
    {name: 'Category Name', image: 'https://static.thenounproject.com/png/1176637-200.png'},
]

const Category = () => {
    return (
        <div className={classes.categories}>
            {categories.map((cat, index) =>  <Item key={index} name={cat.name} image={cat.image} />)}
        </div>
    );
};

export default Category;