import React from 'react'
import { connect } from 'react-redux';
import Cart from './Cart/Cart'
import Profile from './Profile/Profile'
import classes from './ProfileLinks.module.scss'

const ProfileLinks = (props) => (
   <div className={classes.wrap}>
       <Cart products={props.products}/>
       <Profile/>
   </div>
)

const mapStateToProps = state => {
    return {
        products: state.prdCart.products,
    }
  };
  

export default connect(mapStateToProps)(ProfileLinks)