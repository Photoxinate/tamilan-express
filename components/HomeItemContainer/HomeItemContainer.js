import React from 'react'

import classes from './HomeItemContainer.module.scss'

const HomeItemContainer = ({ title, children, id, ...rest }) => {
    return (
        <section itemScope itemType='https://schema.org/ItemList' className={classes.itemContainer} id={id} {...rest}>
            <meta itemprop="url" content={"https://www.tamilanexpress.com/" + id} />
            <meta itemprop="itemListOrder" content="http://schema.org/ItemListOrderAscending" />
            <div className={classes.container}>
                <h2 itemProp='name' className={classes.title}>{title}</h2>
                <div className={classes.items}>
                    {children}
                </div>
            </div>
        </section>
    );
};

export default HomeItemContainer;