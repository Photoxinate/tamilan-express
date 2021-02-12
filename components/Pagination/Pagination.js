import React from 'react';
import classes from './Pagination.module.scss';

const Pagination = () => {
    return (
        <section className={classes.pagination}>
            <p className={classes.count}>
                Showing 1-15 of 16 item(s)
            </p>
            <div className={classes.pages}>
                <a className={[classes.page, classes.active].join(' ')}>
                    1
                </a>
                <a href='/#' className={classes.page}>
                    2
                </a>
                <a href='/#' className={classes.page}>
                    <svg height="16" width="16" viewBox="0 0 20 20" aria-hidden="true" focusable="false" style={{transform: 'rotate(-90deg)'}} ><path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path></svg>
                </a>
            </div>
        </section>
    );
};

export default Pagination;