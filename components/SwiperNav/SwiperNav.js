import React from 'react'
import { ChevronLeft, ChevronRight } from '../Icons/Icons'

const SwiperNav = () => {
    return (
        <>
            <span className='swiper-nav swiper-nav-prev'>
                <ChevronLeft size={22} />
            </span>
            <span className='swiper-nav swiper-nav-next'>
                <ChevronRight size={22} />
            </span>
        </>
    );
};

export default SwiperNav;