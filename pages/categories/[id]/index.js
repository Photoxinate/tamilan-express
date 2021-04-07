import useTranslation from 'next-translate/useTranslation';
import React from 'react';
import fetch from '../../../config/fetch';
import ItemContainer from '../../../components/ItemContainer/ItemContainer'
import Category from '../../../components/Category/Category'
import PageContainer from '../../../components/PageContainer/PageContainer'

const index = ({ category, subCategories, products }) => {

    const { t } = useTranslation('common')

    const subCategoriesHTML = subCategories.length > 0 ? (
        <ItemContainer title={t('sub-categories')} id='sub-categories'>
            <Category categories={subCategories} />
        </ItemContainer>
    ) : null

    const productsHTML = products.length > 0 ? (
        <ItemContainer title={t('Footer-Prod')} id='sub-categories'>
            <Category categories={subCategories} />
        </ItemContainer>
    ) : null

    return (
        <>
            <PageContainer title={category.name} id={category.name} >
                {subCategoriesHTML}
                {productsHTML}
            </PageContainer>
        </>
    );
};

export const getStaticProps = async ctx => {
    const id = ctx.params.id;
    const response = await fetch(`categories/${id}/all`)
    const data = { ...response.data }

    return {
        props: { ...data },
        revalidate: 60*5
    }
}

export const getStaticPaths = async () => {
    const response = await fetch('categories?limit=15')
    let categories = []
    const error = response.error

    if(!error)
        categories = [ ...response.data ]
    
    const paths = categories.map(cat => ({
        params: { id: cat._id }
    }))

    return {
        fallback: 'blocking',
        paths
    }
}

export default index;