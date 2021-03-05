import React from 'react'
import { ChevronLeft, ChevronRight } from '../Icons/Icons'

const SwiperNav = () => {
    return (
        <>
            <span className='swiper-nav swiper-nav-prev'>
                <ChevronLeft size={18} color='#fff' />
            </span>
            <span className='swiper-nav swiper-nav-next'>
                <ChevronRight size={18} color='#fff' />
            </span>
        </>
    );
};

export default SwiperNav;