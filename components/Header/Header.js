import React, { useEffect } from 'react'
import Dropdown from 'semantic-ui-react/dist/commonjs/modules/Dropdown'
import Link from 'next/link'
import { Globe, Dollar } from '../Icons/Icons'
import { useRouter } from 'next/router'
import { contact } from '../../config/config'
import { fetchCart } from '../../store/actions/shipping'
import { useDispatch, useSelector } from 'react-redux'
import useTranslation from 'next-translate/useTranslation'

import classes from './Header.module.scss'

const Header = () => {

    const { asPath, locale } = useRouter()

    const minGta = useSelector(state => state.shipping.minGta)

    const dispatch = useDispatch()

    const { t } = useTranslation('common')

    useEffect(() => {
        dispatch(fetchCart())
    }, [])

    const handleLanguageChange = lang => {
        document.cookie = 'NEXT_LOCALE=' + lang + ';max-age=31536000;samesite=lax;path=/'
    }

    const lang = locale === 'en' ? 'ENG' : 'தமிழ்'

    return (
        <div className={classes.header}>
            <div className={classes.container}>
                <p>
                    <span style={{color: '#aaa'}}>{t('Footer-Email')}</span> <a href={'mailto:' + contact.email} >{contact.email}</a> 
                    {minGta && ` | ${t('free-above-pre')} $${minGta} ${t('free-above-post')}`}
                </p>
                <div className={classes.options}>
                    <Dropdown button labeled compact value={locale} text={lang} aria-label='Select language' title='Select language' icon={<i className={'icon ' + classes.icon}><Globe size={17} color='#eee' /></i>} className={'header-op icon ' + classes.select}>
                        <Dropdown.Menu className={classes.menu}>
                            <Link href={asPath} locale='en' passHref>
                                <Dropdown.Item key='en' value='en' as='a' aria-label='english' disabled={locale === 'en'} onClick={() => handleLanguageChange('en')}>ENG</Dropdown.Item>
                            </Link>
                            <Link href={asPath} locale='ta' passHref>
                                <Dropdown.Item key='ta' value='ta' as='a' aria-label='tamil' disabled={locale === 'ta'} onClick={() => handleLanguageChange('ta')}>தமிழ்</Dropdown.Item>
                            </Link>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown button labeled compact text='CAD' aria-label='Select currency' title='Select currency' icon={<i className={'icon ' + classes.icon}><Dollar size={16} color='#eee' /></i>} className={'header-op icon ' + classes.select}>
                        <Dropdown.Menu className={classes.menu}>
                            <Dropdown.Item key='cad' value='cad' as='a'>CAD</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
        </div>
    );
};

export default Header;