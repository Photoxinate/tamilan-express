import React from 'react';
import Link from 'next/link';

import classes from './Item.module.scss';

const Item = ({ name, image, id }) => {
    return (
        <Link href={`/categories/${id}`}>
            <a className={classes.container}> 
                <img 
                    src={`https://media.tamilanexpress.ca/category/thumb60/${image}`} 
                    width={50} 
                    height={50} 
                    loading='lazy' 
                    alt={'category - ' + name} 
                    />
                <div className={classes.title}>{name}</div>
            </a>
        </Link>
    );
};

export default Item;