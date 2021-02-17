import React from 'react';
import Link from 'next/link';
import classes from './Logo.module.scss';

const Logo = (props) => {
  return (
    <div className={classes.wrap}>
      <Link href="/">
        <img
          width={props.width}
          height="auto"
          src="./logo/TamilanExpressLogo.png"
        />
      </Link>
    </div>
  );
};

export default Logo;
