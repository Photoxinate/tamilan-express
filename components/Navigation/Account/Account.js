import React from 'react'
import Link from 'next/link'
import Popup from 'semantic-ui-react/dist/commonjs/modules/Popup'
import { Profile } from '../../Icons/Icons'
import { useSession, signin, signout } from 'next-auth/client'
import useWindowDimension from '../../../hooks/useWindowDimensions'

import classes from './Account.module.scss'

const style = {
    padding: '10px 0px',
}

const Account = () => {

    const [session] = useSession();

    const link = session ? '/account' : '/api/auth/signin';

    const signinHandler = session ? null : e => { e.preventDefault(); signin() }

    const accountLabel = session ? 'Account' : 'Sign In'

    const { width } = useWindowDimension();

    const trigger = (
        <span><Link href={link}><a aria-label={accountLabel} title={accountLabel} onClick={signinHandler}>
            <Profile size={26} />
        </a></Link></span>
    )

    const content = (
        <div className={classes.account}>
            <Link href='/account'><a>
                My Account
            </a></Link>
            <Link href='/orders'><a>
                Orders
            </a></Link>
            <Link href='/api/auth/signout'><a className={classes.signout} onClick={(e) => { e.preventDefault(); signout() }}>
                Sign Out
            </a></Link>
        </div>
    )

    return (
        <Popup
            flowing
            hoverable
            disabled={!session || width <= 960}
            content={content}
            trigger={trigger}
            style={style}
            position='bottom center'
        />
    );
};

export default Account;