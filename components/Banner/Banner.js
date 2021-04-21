import React from 'react'
import Image from './Image/Image'
import SwiperCore, { Pagination, Scrollbar, A11y, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import classes from './Banner.module.scss'

SwiperCore.use([Pagination, Scrollbar, A11y, Autoplay])

const Banner = ({ banners }) => {

  return (
    <div className={classes.wrap}>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
      >
        {banners.map((banner, i) => (
          <SwiperSlide key={i}>
            <Image banner={banner} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
