import React from 'react'
import { Spinner } from '../../Icons/Icons'

import classes from './Loading.module.scss'

const Loading = () => {
    return (
        <div className={classes.loading}>
            <Spinner color='#fff' size={28} className={classes.spinner} />
        </div>
    );
};

export default Loading;