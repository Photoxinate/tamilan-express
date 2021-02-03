import React from 'react'
import Cart from './Cart/Cart'
import Profile from './Profile/Profile'
import classes from './ProfileLinks.module.scss'

const ProfileLinks = () => (
   <div className={classes.wrap}>
       <Cart/>
       <Profile/>
   </div>
)

export default ProfileLinks