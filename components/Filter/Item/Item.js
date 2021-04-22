import { useRouter } from 'next/router'
import { parse, stringify } from 'qs'
import React from 'react'
import Checkbox from 'semantic-ui-react/dist/commonjs/modules/Checkbox'
import classes from './Item.module.scss'


const Item = ({title, options, name}) => {

    const { query, push } = useRouter()

    const onToggleHandler = id => {
        let parsedQuery = parse(query)
        let filter = parsedQuery.filter

        let ids = []
        if(filter[name] && filter[name].$in) {
            ids = filter[name].$in
            if(ids.includes(id)) ids = ids.filter(i => i !== id)
            else ids.push(id)
        }
        else {
            ids.push(id)
        }

        filter = {...parsedQuery.filter, [name]: { '$in': ids } }
        parsedQuery = stringify({...parsedQuery, filter, page: 1}, { encode: false })
        push({ search: parsedQuery }, undefined, { shallow: true })
    }

    let checkedList = []
    const parsedQuery = parse(query)
        
    if(parsedQuery.filter) {
        Object.keys(parsedQuery.filter).map(key => {
            if(key === name) {
                checkedList = parsedQuery.filter[key].$in
            }
        })
    }

    const filterOptions = options.map(option => (
        <div key={option.name} className={classes.singleItem}>
            <Checkbox 
                defaultChecked={checkedList.includes(option.id)} 
                id={'filter-' + option.name} 
                label={option.name} 
                onChange={() => onToggleHandler(option.id)} />
        </div>
    ))

    return (
        <div className={classes.item}>
            <h4>{title}</h4>
            <div className={classes.items}>
                {filterOptions}
            </div>
        </div>
    )
}

export default Item;