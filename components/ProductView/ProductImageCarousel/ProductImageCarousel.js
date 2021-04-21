import React from 'react';
import Label from 'semantic-ui-react/dist/commonjs/elements/Label';
// Import Swiper React components
import SwiperCore, { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import classes from './ProductImageCarousel.module.scss';


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
export const ProductImageCarousel = ({ images, name, type }) => {
  return (
    <div className={classes.container}>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: '.swiper-nav-next',
          prevEl: '.swiper-nav-prev',
        }}
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
