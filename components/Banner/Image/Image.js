import React from 'react';
import classes from './Image.module.scss';

export const Image = ({ banner }) => {
  return (
    <div className={classes.wrap}>
      <img src={banner.src} alt={banner.alt} width={1200} height={500} loading='lazy' />
    </div>
  );
};

export default Image;
