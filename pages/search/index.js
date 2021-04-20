import React from 'react';
import Filter from '../../components/Filter/Filter'
import Pagination from '../../components/Pagination/Pagination'
import ProductContainer from '../../components/ProductContainer/ProductContainer'
import { products } from '../../config/config'
import { useRouter } from 'next/router'
import fetch from '../../config/fetch'
import { stringify } from 'qs'

import classes from './index.module.scss'

const index = ({ data }) => {

    console.log(data)

    const {  } = useRouter()

    const active = data.page ? parseInt(data.page) : 1

    return (
        <section className={classes.categories}>
            <div className={classes.name}>
                Category or Search term
                <svg height="16" width="16" viewBox="0 0 20 20" aria-hidden="true" focusable="false" ><path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path></svg>
            </div>
            <div className={classes.body}>
                <Filter />
                <div className={classes.container}>
                    <ProductContainer products={data.docs} itemsPerRow={4}/>
                    <Pagination 
                        pages={data.totalPages} 
                        active={active} 
                        pagingCounter={data.pagingCounter}
                        count={data.docs.length} />
                </div>
            </div>
        </section>
    )
}

export const getServerSideProps = async (ctx) => {
    console.log(stringify(ctx.query));

    const res = await fetch(`products?${stringify(ctx.query)}`)
  
    return {
      props: {
        ...res
      }
    }
  }

export default index;