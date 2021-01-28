import React from 'react';
import NavLink from './NavLink/NavLink';
import classes from './NavLinks.module.scss';

const NavLinks = ({ navLinks }) => {
  console.log("LINKS:", navLinks);
  return (
    <div className={classes.wrap}>
      {navLinks.map((navLink, i) => (
        <NavLink key={i} name={navLink.name} url={navLink.url} />
      ))}
    </div>
  );
};

export default NavLinks
