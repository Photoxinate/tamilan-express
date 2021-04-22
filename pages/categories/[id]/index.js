import useTranslation from 'next-translate/useTranslation'
import React from 'react';
import fetch from '../../../config/fetch';
import ItemContainer from '../../../components/ItemContainer/ItemContainer'
import Category from '../../../components/Category/Category'
import PageContainer from '../../../components/PageContainer/PageContainer'
import ProductContainer from '../../../components/ProductContainer/ProductContainer'
import ViewMore from '../../../components/ViewMore/ViewMore'
import { stringify } from 'qs';


const index = ({ category, subCategories, products }) => {

    const { t } = useTranslation('common')

    const subCategoriesHTML = subCategories.length > 0 ? (
        <ItemContainer title={t('sub-categories')} id='sub-categories'>
            <Category categories={subCategories} />
        </ItemContainer>
    ) : null

    const productsHTML = products.length > 0 ? (
        <ItemContainer title={t('Footer-Prod')} id='sub-categories'>
            <ProductContainer products={products} />
        </ItemContainer>
    ) : null

    let viewMore = null

    if(products.length >= 20) {
        const catIds = []
        catIds.push(category._id)
        subCategories && subCategories.forEach(cat => {
            catIds.push(cat._id)
        })
        const query = {
            page: 1,
            limit: 20,
            filter: { category: { $in: catIds }, q: '' }
        }

        viewMore = <ViewMore link={`/search?${stringify(query, { encode: false })}`} text='View more products' />
    }

    return (
        <PageContainer title={category.name} id={category.name} >
            {subCategoriesHTML}
            {productsHTML}
            {viewMore}
        </PageContainer>
    );
};

export const getStaticProps = async ctx => {
    const id = ctx.params.id;
    const response = await fetch(`categories/${id}/all`)
    const data = { ...response.data }

    if(response.error || !data){
        return {
            notFound: true
        }
    }

    return {
        props: { ...data },
        revalidate: 60*5
    }
}

export const getStaticPaths = async () => {

    let categories = []
    const response = await fetch('categories?limit=15')
    const error = response.error
    const data = response.data

    if(!error)
        categories = [ ...data.docs ]
    
    const paths = categories.map(cat => ({
        params: { id: cat._id }
    }))

    return {
        fallback: 'blocking',
        paths
    }
}

export default index;