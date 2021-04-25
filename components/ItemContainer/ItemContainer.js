import React from 'react'

import classes from './ItemContainer.module.scss'

const ItemContainer = ({ title, children, id, ...rest }) => {
    return (
        <section itemScope itemType='https://schema.org/ItemList' className={classes.itemContainer} id={id} {...rest}>
            <meta itemProp='url' content={'https://www.tamilanexpress.com/' + id} />
            <meta itemProp='itemListOrder' content='http://schema.org/ItemListOrderAscending' />
            {title && <h2 itemProp='name' className={classes.title}>{title}</h2>}
            <div className={classes.items}>
                {children}
            </div>
        </section>
    );
};

export default ItemContainer;