import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'
import React from 'react'
import Category from '../../components/Category/Category'
import PageContainer from '../../components/PageContainer/PageContainer'
import Breadcrumb from '../../components/UI/BreadCrumb/BreadCrumb'
import fetch from '../../config/fetch'


const index = ({ categories }) => {
    const sections = [
        { key: 'home', content: 'Home', as:Link, href:"/", link: true},
        { key: 'categories', content: 'Categories', as:Link, href:"/categories/", link: true },
      ]
    const { t } = useTranslation('common')

    return (
        <PageContainer title={t('find-all-categories')} id={'categories'} >
            <Breadcrumb sections={sections}/>
            <div style={{ marginBottom: 80 }}>
                <Category categories={categories} />
            </div>
        </PageContainer>
    );
};

export const getStaticProps = async () => {
    const response = await fetch('categories')
    let categories = []
    const error = response.error

    if(!error)
        categories = [...response.data.docs]

    return {
        props: { categories },
        revalidate: 60 * 15
    }
}

export default index;