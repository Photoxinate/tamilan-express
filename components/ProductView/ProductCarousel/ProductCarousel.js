import React from 'react';
import SwiperCore, {
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  Thumbs,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import classes from './ProductCarousel.module.scss';

SwiperCore.use([Pagination, Scrollbar, A11y, Autoplay, Thumbs]);

const ProductCarousel = ({ images, name }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className={classes.wrap}>
      <Swiper thumbs={{ swiper: thumbsSwiper }}></Swiper>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSwiper={setThumbsSwiper}
        thumbs={{ swiper: thumbsSwiper }}
        direction="vertical"
        pagination={{ type: 'fraction' }}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
      >
        {images.map((image, i) => (
          <SwiperSlide key={i}>
            <div className={classes.imageWrap}>
              <img src={image.src} alt={"image of"+name} loading="lazy" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductCarousel;
