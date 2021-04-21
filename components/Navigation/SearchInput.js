import { useRouter } from 'next/router';
import React, { useState } from 'react'
import Form from 'semantic-ui-react/dist/commonjs/collections/Form'
import { Search } from '../Icons/Icons'

const SearchInput = () => {

    const [search, setSearch] = useState()

    const route = useRouter()

    const inputChangeHandler = (e, {value}) => {
        setSearch(value)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        route.push(`/search?filter[q]=${search}&limit=20&page=1`)
    }

    return (
        <form onSubmit={submitHandler}>
            <Form.Input 
                onChange={inputChangeHandler}
                action={{ icon: <Search aria-label='search' color='#fff' size={16} strokeWidth={3} />, primary: true }} 
                fluid 
                aria-label='Search' 
                placeholder='Search...' />
        </form>
    );
};

export default SearchInput;