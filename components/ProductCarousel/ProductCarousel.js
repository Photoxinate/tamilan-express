import React from 'react';
// import ProductCard from '../ProductCard/ProductCard';
import ProductCard from '../ProductCard2/ProductCard2'
import useWindowSize from '../../hooks/useWindowDimensions';
import classes from './ProductCarousel.module.scss'

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperNav from '../SwiperNav/SwiperNav';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const ProductCarousel = ({ products, carouselTitle, title }) => {

  const { width } = useWindowSize();

  let slidesPerView, spaceBetween
  if(width <= 600){
    slidesPerView = 2
    spaceBetween = 10
  }
  else if(width <= 830){
    slidesPerView = 3
    spaceBetween = 10
  }else if(width <= 1200){
    slidesPerView = 4
    spaceBetween = 10
  }
  else{
    slidesPerView = 5
    spaceBetween = 10
  }

  return (
    <div className={classes.carouselWrap} id={title}>
      <h2>{carouselTitle}</h2>
      <Swiper
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      navigation={{
        nextEl: '.swiper-nav-next',
        prevEl: '.swiper-nav-prev',
      }}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      {products.map((product, i) => (
        <SwiperSlide key={product._id}>
          <ProductCard product={product} />
        </SwiperSlide>
      ))}
      <SwiperNav />
     </Swiper>
    </div>
    
  );
};

export default ProductCarousel;
