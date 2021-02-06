import React from 'react';
import ProductCart from '../ProductCart/ProductCart';
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';



// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const ProductCarousel = ({ products }) => {
  return (
    <Swiper
      spaceBetween={5}
      slidesPerView={5}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {products.map((product, i) => (
        <SwiperSlide key={product.id}>
          <ProductCart product={product} />
        </SwiperSlide>
      ))}
 
      ...
    </Swiper>
  );
};

export default ProductCarousel;
