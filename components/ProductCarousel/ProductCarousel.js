import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import useWindowSize from '../../hooks/useWindowDimensions';

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';



// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const ProductCarousel = ({ products, carouselTitle }) => {

  const { width } = useWindowSize();

  const slidesPerView = width <= 768 ? 2:5;

  return (
    <div className='carousel-wrap'>
      <h2>{carouselTitle}</h2>
      <Swiper
      spaceBetween={10}
      slidesPerView={slidesPerView}
      navigation
      pagination={{ clickable: true }}
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
