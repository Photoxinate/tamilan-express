import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import BannerImage from './Image/Image'
import classes from './Banner.module.scss';

const Banner = (props) => {
  return (
    <div>
      <Swiper
      spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {props.banners.map((banner, i) => (
          <SwiperSlide>
            <BannerImage key={i} banner={banner}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
