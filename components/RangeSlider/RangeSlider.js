import React, { useState, useEffect } from 'react'
import { Range, getTrackBackground } from 'react-range'
import { useRouter } from 'next/router'
import { parse, stringify } from 'qs'

const RangeSlider = ({ min = 0, max = 100 }) => {

    const { query, push } = useRouter()

    const STEP = 1

    if(min === null) {
        min = 0
    }

    if(max === null) {
        max = 100
    }

    if(min >= max) {
        min = 0
        max = 100
    }

    const [values, setValues] = useState([min, max])

    const priceRangeChangeHandler = values => {
        let parsedQuery = parse(query)
        let filter = parsedQuery.filter

        filter = {...parsedQuery.filter, price: { $gte: values[0], $lte: values[1] } }
        parsedQuery = stringify({...parsedQuery, filter, page: 1}, { encode: false })
        push({ search: parsedQuery }, undefined, { shallow: true })
    }

    useEffect(() => {
        const parsedQuery = parse(query)
        if(parsedQuery.filter && parsedQuery.filter.price) {
            setValues([parsedQuery.filter.price.$gte, parsedQuery.filter.price.$lte])
        }
    }, [query])

    return (
        <div
            style={{
                display: 'flex',
                flexWrap: 'wrap',
                marginTop: '20px',
                marginBottom: '20px'
            }}
        >
            <h4 style={{marginBottom: '10px'}}>Price Range</h4>
            <Range
                values={values}
                step={STEP}
                min={min}
                max={max}
                onFinalChange={valus => {
                    priceRangeChangeHandler(values)
                }}
                onChange={values => {
                    setValues(values)
                }}
                renderTrack={({ props, children }) => (
                    <div
                        onMouseDown={props.onMouseDown}
                        onTouchStart={props.onTouchStart}
                        style={{
                            ...props.style,
                            height: '36px',
                            display: 'flex',
                            width: '100%'
                        }}
                    >
                        <div
                            ref={props.ref}
                            style={{
                                height: '5px',
                                width: '100%',
                                borderRadius: '4px',
                                background: getTrackBackground({
                                    values,
                                    colors: ['#ccc', '#22df4e', '#ccc'],
                                    min: min,
                                    max: max
                                }),
                                alignSelf: 'center'
                            }}
                        >
                            {children}
                        </div>
                    </div>
                )}
                renderThumb={({ props, isDragged }) => (
                    <div
                        {...props}
                        style={{
                            ...props.style,
                            height: '15px',
                            width: '15px',
                            borderRadius: '50%',
                            backgroundColor: isDragged ? '#05691d' : '#FFF',
                            boxShadow: '0px 2px 6px #AAA'
                        }}
                    />
                )}
            />
            <div style={{display: 'flex', justifyContent: 'center', fontWeight: '500', textAlign: 'center', fontSize: '14px', width: '100%', alignItems: 'center'}}>
                <span style={{padding: '2px', width: '60px', marginRight: '20px', background: '#bff8bf', color: '#004300', borderRadius: '5px'}}>${values[0]}</span>
                <span style={{padding: '2px', width: '60px', background: '#bff8bf', color: '#004300', borderRadius: '5px'}}>${values[1]}</span>
            </div>
        </div>
    )
}

export default RangeSlider;