import React from 'react'
import classes from '../ProfileLinks.module.scss'

const Profile = (props) => {

    return(
        <div className={classes.profile}>
            <img src='./icons/profile.svg' width="25px" height="25px"/>
        </div>
    )
}

export default Profile