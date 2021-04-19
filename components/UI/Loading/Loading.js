import React, { useEffect } from 'react'
import { Spinner } from '../../Icons/Icons'

import classes from './Loading.module.scss'

const Loading = ({ style, complete }) => {

    useEffect(() => {
        if(complete && typeof document !== 'undefined') {
            document.body.style.overflow = 'hidden'
            document.body.style.position = 'fixed'
            document.body.style.width = '100%'
        }

        return () => {
            document.body.style.overflow = 'initial'
            document.body.style.position = 'initial'
        }
    }, [])
    
    return (
        <div className={classes.loading} style={style}>
            <Spinner color='#fff' size={28} className={complete ? classes.compSpinner : classes.spinner} />
        </div>
    );
};

export default Loading;