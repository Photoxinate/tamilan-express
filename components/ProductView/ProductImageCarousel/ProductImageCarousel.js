import React from 'react';
import classes from './ProductImageCarousel.module.scss';
// Import Swiper React components
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const base =
  process.env.NODE_ENV === 'development'
    ? 'file://D:/photoxinate/TamilanExpress/media/product/thumb400/'
    : 'https://media.tamilanexpress.ca/product/thumb400/';

const imgs = [
  'https://cdn2.webdamdb.com/md_IRLcaRTbLgZ1.png?1517915165',
  'https://i.ebayimg.com/images/g/804AAOSwUuRgJZ1X/s-l500.jpg',
];
export const ProductImageCarousel = ({ images, name }) => {
  return (
    <div className={classes.container}>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {imgs.map((image, i) => (
          <SwiperSlide>
            <img src={image} key={i} alt={'image of ' + name} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductImageCarousel;
