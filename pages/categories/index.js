import React from 'react';
import Filter from '../../components/Filter/Filter';
import Pagination from '../../components/Pagination/Pagination';
import ProductCard from '../../components/ProductCard/ProductCard';
import {products} from '../../config/config';
import classes from './index.module.scss';

const index = () => {
    return (
        <section className={classes.categories}>
            <div className={classes.name}>
                Category or Search term
                 <svg height="16" width="16" viewBox="0 0 20 20" aria-hidden="true" focusable="false" ><path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path></svg>
            </div>
            <div className={classes.body}>
                <Filter />
                <div className={classes.container}>
                    <div className={classes.products}>
                        {products.map((product, i) => <ProductCard key={i} product={product} />)}
                    </div>
                    <Pagination />
                </div>
            </div>
        </section>
    );
};

export default index;