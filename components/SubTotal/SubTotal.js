import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'
import Button from 'semantic-ui-react/dist/commonjs/elements/Button'

import classes from './SubTotal.module.scss'


const SubTotal = () => {

  const total = useSelector(state => state.cart.total)

  const { t } = useTranslation('cart')

  return (
    <div className={classes.wrap}>
      
      <div className={classes.row}>
        <div className={classes.col}>{t('common:sub-total')}</div>
        <div className={classes.col}>${total}</div>
      </div>
      <div className={classes.btnWrap}>
        <Link href='/'><a><Button fluid compact content={t('continue')}  /></a></Link>
        <Link href='/checkout'><a><Button fluid primary compact content={t('checkout')} /></a></Link>
      </div>
    </div>
  );
};


export default SubTotal;
