import React from 'react';
import { UserIcon } from '../../../Icons/Icons';
import classes from '../ProfileLinks.module.scss';

const Profile = (props) => {
  return (
    <div className={classes.profile}>
      <button>
        <UserIcon size="24" color="var(--white)" />
      </button>
    </div>
  );
};

export default Profile;
