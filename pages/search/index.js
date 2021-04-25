import React, { useEffect, useState } from 'react';
import Filter from '../../components/Filter/Filter'
import Pagination from '../../components/Pagination/Pagination'
import ProductContainer from '../../components/ProductContainer/ProductContainer'
import { useRouter } from 'next/router'
import fetch from '../../config/fetch'
import { stringify, parse } from 'qs'
import PageContainer from '../../components/PageContainer/PageContainer'
import NoResult from '../../components/NoResult/NoResult'
import useSWR from 'swr'
import deepEqual from 'fast-deep-equal'
import Loading from '../../components/UI/Loading/Loading'

import classes from './index.module.scss'
import swrFetch from '../../config/swrFetch';

const index = ({ docs, total, totalPages, page, pagingCounter, categories, types, brands, prices }) => {

    const { query } = useRouter()
    const [serverQuery] = useState(query)

    const parsedQuery = parse(query)
    const { data } = 
        useSWR('products?' + stringify({...parsedQuery, populate: ['category','brand'], filter: {...parsedQuery.filter, publish: true}}),
            swrFetch, 
            { 
                dedupingInterval: 1000*60*10,
                initialData: deepEqual(query, serverQuery) ? {docs, total, totalPages, page, pagingCounter} : undefined 
            }
        )
    
    const searchTerm = parsedQuery.filter && parsedQuery.filter.q ? 
        `Search result for: '${parsedQuery.filter.q}'` : 'Search'

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [data])

    if(!data) {
        return (
            <PageContainer 
                id='search' 
                title={searchTerm}
                style={{minHeight: '70vh'}} >
                <Loading complete />
            </PageContainer>
        )
    }

    if(total <= 0 && Object.keys(parsedQuery.filter).length === 1 && parsedQuery.filter.q) {
        return (
            <PageContainer id='search' title={searchTerm} >
                <NoResult />
            </PageContainer>
        )
    }

    return (
        <PageContainer 
            id='search' 
            title={searchTerm} >
            <div className={classes.search}>
                <div className={classes.body}>
                    <Filter
                        types={types}
                        dimensions={data.docs.filter(prod=> prod.dimension)}
                        categories={categories.filter(cat => cat)}
                        brands={brands.filter(brand => brand)}
                        prices={prices}
                     />
                    <div className={classes.container}>
                        {data.total > 0 ? 
                            <>
                                <ProductContainer products={data.docs} search />
                                <Pagination 
                                    pages={data.totalPages} 
                                    active={data.page} 
                                    pagingCounter={data.pagingCounter}
                                    count={data.docs.length}
                                    total={data.total}
                                    query={query} /> 
                            </>
                            : 
                            <NoResult withFilter />
                        }
                    </div>
                </div>
            </div>
        </PageContainer>
    )
}

export const getServerSideProps = async (ctx) => {

    let query = stringify({...ctx.query, populate: ['category','brand']}, { encode: false })
    const products = await fetch(`products?${query}`)

    query = parse(query)
    const resources = await fetch(`products/resources/${query.filter?.q}`)
    
    return {
      props: {
        ...products.data,
        ...resources.data
      }
    }
  }

export default index;