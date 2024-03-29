import useTranslation from 'next-translate/useTranslation'
import React from 'react'
import Category from '../../components/Category/Category'
import PageContainer from '../../hoc/PageContainer/PageContainer'
import fetch from '../../config/fetch'
import Head from 'next/head'

const index = ({ categories }) => {

    const { t } = useTranslation('common')

    return (
        <PageContainer title={t('find-all-categories')} id={'categories'} >
            <Head>
                <title>Tamilan Express - Categories</title>
                <meta property="og:title" content={'Tamilan Express - Categories'} />
                <meta name="twitter:title" content={'Tamilan Express - Categories'} />
            </Head>
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