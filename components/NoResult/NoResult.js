import React from 'react'

import classes from './NoResult.module.scss'

const NoResult = () => {
    return (
        <div className={classes.noResult}>
            <div className={classes.warning}>
                Your search returned no results!
            </div>
            <div className={classes.tips}>
                <h2>Search Tips</h2>
                <p>Double check your spelling.</p>
                <p>Try using single words.</p>
                <p>Try searching for an item that is less specific.</p>
                <p>You can always narrow your search results later.</p>
            </div>
        </div>
    );
};

export default NoResult;