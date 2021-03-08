import React from 'react';
import ProductCard from '../ProductCard2/ProductCard2';
import useWindowSize from '../../hooks/useWindowDimensions';

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import classes from './ProductCarousel.module.scss';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const ProductCarousel = ({ products, carouselTitle }) => {
  const { width } = useWindowSize();

  let slidesPerView
  if (width > 1100){
     slidesPerView = 5
  }else{
    slidesPerView = Math.floor((width*90/100) / 300);
  }

  return (
    <div className={classes.carouselWrap}>
      <h2>{carouselTitle}</h2>
      <Swiper
        spaceBetween={10}
        slidesPerView={slidesPerView}
        navigation
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {products.map((product, i) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductCarousel;
