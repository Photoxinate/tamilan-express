import { useRouter } from 'next/router';
import { parse, stringify } from 'qs';
import React, { useEffect, useState } from 'react';
import Form from 'semantic-ui-react/dist/commonjs/collections/Form';
import { Search } from '../Icons/Icons';

const SearchInput = () => {

    const [search, setSearch] = useState()

    const { push, query, pathname } = useRouter()

    const inputChangeHandler = (e, {value}) => {
        setSearch(value)
    }

    const submitHandler = (e) => {
        e.preventDefault()

        const query = { page: 1, limit: 20, filter: { q: search ? search : '' } }
        push({ pathname: '/search', query: stringify(query) })
    }

    useEffect(() => {
        const queryObj = parse(query)
        if(queryObj && queryObj.filter && queryObj.filter.q && pathname === '/search') {
            setSearch(queryObj.filter.q)
        }
        else {
            setSearch('')
        }
    }, [query, pathname])

    return (
        <form onSubmit={submitHandler}>
            <Form.Input 
                value={search}
                maxLength={40}
                onChange={inputChangeHandler}
                action={{ icon: <Search aria-label='search' color='#fff' size={16} strokeWidth={3} />, primary: true }} 
                fluid 
                aria-label='Search' 
                placeholder='Search...' />
        </form>
    );
};

export default SearchInput;