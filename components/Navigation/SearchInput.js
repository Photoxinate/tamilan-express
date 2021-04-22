import { useRouter } from 'next/router';
import React, { useState } from 'react'
import Form from 'semantic-ui-react/dist/commonjs/collections/Form'
import { Search } from '../Icons/Icons'
import { stringify } from 'qs'

const SearchInput = () => {

    const [search, setSearch] = useState()

    const route = useRouter()

    const inputChangeHandler = (e, {value}) => {
        setSearch(value)
    }

    const submitHandler = (e) => {
        e.preventDefault()

        const query = { page: 1, limit: 20, filter: { q: search ? search : '' } }
        route.push({ pathname: '/search', query: stringify(query) })
    }

    return (
        <form onSubmit={submitHandler}>
            <Form.Input 
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