import React from 'react';

import classes from './NewsLetter.module.scss';

const NewsLetter = () => {
    return (
        <div className={classes.container}>

            <div className={classes.news}>
                <div className={classes.text}>
                    <h2>
                        Sign Up For Newsletters
                    </h2>
                    <p>
                        Be the first to know. Sign up for news letter today.
                    </p>
                </div>
                <form className={classes.input}>
                    <input name='email' type='email' required placeholder='Enter your email...' />
                    <button>Sign Up</button>
                </form>
            </div>
            <div className={classes.social}>
                <a href='#'>
                    F
                </a>
                <a href='#'>
                    I
                </a>
                <a href='#'>
                    T
                </a>
            </div>

        </div>
    );
};

export default NewsLetter;