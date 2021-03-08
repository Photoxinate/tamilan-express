import React from 'react'
import classes from './ProductBuy.module.scss'
import Button from '../../UI/Button/Button' 
import useTranslation from 'next-translate/useTranslation'


const ProductBuy = (props) => {

    const { t } = useTranslation('common')

    return (
        <div className={classes.productBuy}>
            <Button text={t('add-to-cart')} onClicked={props.onAddProduct}/>
            <Button text={t('Buy-now')} />
        </div>
    )
}

export default ProductBuy