import React from 'react'
import Breadcrumb from "semantic-ui-react/dist/commonjs/collections/Breadcrumb"
import classes from './Breadcrumb.module.scss'

const CustomBreadcrumb = ({sections}) => {
    return (
        <div className={classes.wrap}>
            <Breadcrumb icon='right angle' sections={sections} />
        </div>
    )
}

export default CustomBreadcrumb
