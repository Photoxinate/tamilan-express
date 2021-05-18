import React from 'react'

import classes from './PageContainer.module.scss'

const PageContainer = ({ title, children, id, ...rest }) => {
    return (
        <section id={id} {...rest} className={classes.section}>
            <div className={classes.container}>
                <h1 className={classes.title}> {title} </h1>
                {children}
            </div>
        </section>
    );
};

export default PageContainer;