import React from 'react';
import classes from './Image.module.scss';

export const Image = ({ banner }) => {
  return (
    <div className={classes.wrap}>
      <img src={banner.src} alt={banner.alt} loading='lazy' height='500px' width='1680px' />
    </div>
  );
};

export default Image;
