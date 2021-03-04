import React from 'react'
import Dropdown from 'semantic-ui-react/dist/commonjs/modules/Dropdown'
import Link from 'next/link'
import { Globe, Dollar } from '../Icons/Icons'
import { useRouter } from 'next/router'

import classes from './Header.module.scss'

const Header = () => {

    const { asPath, locale } = useRouter()

    const handleChange = (e, { value }) => console.log({value})

    const lang = locale === 'en' ? 'ENG' : 'தமிழ்'

    return (
        <div className={classes.header}>
            <div className={classes.container}>
                <p>
                    <span style={{color: '#aaa'}}>Email:</span> <a href='mailto:support@tamilanexpress.com' >support@tamilanexpress.com</a> | 
                    Free Shipping for all order above $99
                </p>
                <div className={classes.options}>
                    <Dropdown button labeled compact value={locale} text={lang} aria-label='Select language' title='Select language' icon={<i className={'icon ' + classes.icon}><Globe size={17} color='#eee' /></i>} className={'header-op icon ' + classes.select}>
                        <Dropdown.Menu className={classes.menu}>
                            <Link href={asPath} locale='en' passHref>
                                <Dropdown.Item key='en' value='en' as='a'>ENG</Dropdown.Item>
                            </Link>
                            <Link href={asPath} locale='ta' passHref>
                                <Dropdown.Item key='ta' value='ta' as='a'>தமிழ்</Dropdown.Item>
                            </Link>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown button labeled compact text='USD' icon={<i className={'icon ' + classes.icon}><Dollar size={16} color='#eee' /></i>} className={'header-op icon ' + classes.select} onChange={handleChange}>
                        <Dropdown.Menu className={classes.menu}>
                            <Link href='/#' passHref>
                                <Dropdown.Item key='english' value='english' as='a'>USD</Dropdown.Item>
                            </Link>
                            <Link href='/#' passHref>
                                <Dropdown.Item key='tamil' value='tamil' as='a'>CAD</Dropdown.Item>
                            </Link>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
        </div>
    );
};

export default Header;