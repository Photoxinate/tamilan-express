import React from 'react'
import Link from 'next/link'
import { stringify } from 'qs'

import classes from './Pagination.module.scss'

const Pagination = ({ pages, active = 1, pagingCounter, count, query, total }) => {

    if(pages <= 1) {

        return count > 1 ? (
            <section className={classes.pagination}>
                <p className={classes.count}>
                    Showing 1-{count} item(s)
                </p>
            </section>
        ) : null
        
    }

    let pageNumbersArray = []

    let startIndex, endIndex

    if (pages <= 6) {
        startIndex = 1
        endIndex = pages
    } 
    else {
        if (active <= 4) {
            startIndex = 1
            endIndex = 6
        } 
        else if (active + 2 >= pages) {
            startIndex = pages - 5;
            endIndex = pages;
        } 
        else {
            startIndex = active - 3;
            endIndex = active + 2;
        }
    }

    // add first pagination if startIndex is not the 1
    if (startIndex > 1) {
        pageNumbersArray.push(
            <Link href={{ query: {...query, page: active - 1} }} key="1" shallow >
                <a className={classes.page} aria-label='Previous page'>&lt;</a>
            </Link>
        )
    }

    // Outer loop to create parent
    for (let i = startIndex; i <= endIndex; i++) {

        const cssClass = active === i ? [classes.page, classes.active].join(' ') : classes.page

        pageNumbersArray.push(
            <Link href={{ query: {...query, page: i} }} key={i} shallow >
                <a className={cssClass}>{i}</a>
            </Link>
        )
    }

    // add last pagination if endPage is not the last pagination
    if (endIndex < pages) {
        pageNumbersArray.push(
            <Link href={{ query: {...query, page: active + 1} }} key={pages} shallow >
                <a className={classes.page} aria-label='Next page'>&gt;</a>
            </Link>
        )
    }

    return (
        <section className={classes.pagination}>
            <p className={classes.count}>
                Showing {pagingCounter}-{pagingCounter + count - 1} of {total} item(s)
            </p>
            <div className={classes.pages}>
                {pageNumbersArray}
            </div>
        </section>
    );
};

export default Pagination;