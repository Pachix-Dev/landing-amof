// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

import './Carousel3d.css'

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules'

export function Carousel3d({
  why_participate1,
  why_participate2,
  why_participate3,
  why_participate4,
  why_participate5,
}) {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: -100,
          depth: 500,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[Autoplay, EffectCoverflow, Pagination]}
        className='mySwiper'
      >
        <SwiperSlide>
          <p>{why_participate1}</p>
        </SwiperSlide>
        <SwiperSlide>
          <p>{why_participate2}</p>
        </SwiperSlide>
        <SwiperSlide>
          <p>{why_participate3}</p>
        </SwiperSlide>
        <SwiperSlide>
          <p>{why_participate4}</p>
        </SwiperSlide>
        <SwiperSlide>
          <p>{why_participate5}</p>
        </SwiperSlide>
      </Swiper>
    </>
  )
}
