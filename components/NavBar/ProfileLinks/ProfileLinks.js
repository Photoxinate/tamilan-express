import React from 'react'
import Cart from './Cart'
import Profile from './Profile'
import classes from './ProfileLinks.module.scss'

const ProfileLinks = () => (
   <div className={classes.wrap}>
       <Cart/>
       <Profile/>
   </div>
)

export default ProfileLinks