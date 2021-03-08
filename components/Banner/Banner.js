import React from 'react';
import BannerImage from './Image/Image';
import classes from './Banner.module.scss';

// import Swiper core and required modules
import SwiperCore, { Pagination, Scrollbar, A11y, Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperNav from '../SwiperNav/SwiperNav';

// install Swiper modules
SwiperCore.use([Pagination, Scrollbar, A11y, Autoplay]);

const Banner = ({ banners }) => {

  return (
    <div className={classes.wrap}>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ type: 'fraction' }}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
      >
        {banners.map((banner, i) => (
          <SwiperSlide key={i}>
            <BannerImage banner={banner} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
