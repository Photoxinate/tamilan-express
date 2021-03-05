import React from 'react'
import Link from 'next/link'
import Button from 'semantic-ui-react/dist/commonjs/elements/Button'

import classes from './ProductCard2.module.scss'
import useTranslation from 'next-translate/useTranslation'


const ProductCard2 = ({ product, ...rest }) => {

    const { t } = useTranslation('common')

    return (
        <article itemProp='itemListElement' itemScope itemType='https://schema.org/Product' className={classes.card}>
            <div className={classes.container}>

                <div className={classes.image}>
                    <Link href={'/product/' + product.id}><a>
                        <img itemProp='image' src={product.img} alt={product.name} width={200} height={200} />
                    </a></Link>
                    <span className={classes.discount}>20%</span>
                </div>

                <span itemProp='category' className={classes.category}> {product.category} </span>

                <Link href={'/product/' + product.id}><a itemProp='url'>
                    <h3 itemProp='name' className={classes.name}> {product.name} </h3>
                </a></Link>

                <div itemProp="offers" itemScope itemType="https://schema.org/Offer" className={classes.price}>
                    <span itemProp="priceCurrency" content="USD">$</span>
                    <span itemProp="price" content={product.price}> {product.price} </span>
                </div>

                <Button compact content={t('add-to-cart')} />
                
            </div>
        </article>
    );
};

export default ProductCard2;