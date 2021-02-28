import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import useWindowSize from '../../hooks/useWindowDimensions';
import Button from '../UI/Button/Button'
import classes from './ProductCarousel.module.scss'

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const ProductCarousel = ({ products, carouselTitle }) => {

  const { width } = useWindowSize();

  let slidesPerView, spaceBetween
  if(width <= 540){
    slidesPerView = 2
    spaceBetween = 5
  }
  else if(width <= 768){
    slidesPerView = 3
    spaceBetween = 5
  }
  else{
    slidesPerView = 5
    spaceBetween = 10
  }

  return (
    <div className={classes.carouselWrap}>
      <h2>{carouselTitle}</h2>
      <Swiper
      spaceBetween={spaceBetween}
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
