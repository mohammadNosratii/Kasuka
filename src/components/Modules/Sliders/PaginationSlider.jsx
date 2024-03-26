import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

import Client1 from "../../../assets/images/client-1.png"
import Client2 from "../../../assets/images/client-2.png"
import Client3 from "../../../assets/images/client-3.png"
import Client4 from "../../../assets/images/client-4.png"
import Client5 from "../../../assets/images/client-5.png"
import Client6 from "../../../assets/images/client-6.png"
import Client7 from "../../../assets/images/client-7.png"
import Client8 from "../../../assets/images/client-8.png"

export default function PaginationSlider() {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          540: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          640: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 100,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 120,
          },
        }}
        modules={[Pagination]}
        className="mySwiper my-20"
      >
        <SwiperSlide><img className='opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300' src={Client1} alt="" /></SwiperSlide>
        <SwiperSlide><img className='opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300' src={Client2} alt="" /></SwiperSlide>
        <SwiperSlide><img className='opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300' src={Client3} alt="" /></SwiperSlide>
        <SwiperSlide><img className='opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300' src={Client4} alt="" /></SwiperSlide>
        <SwiperSlide><img className='opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300' src={Client5} alt="" /></SwiperSlide>
        <SwiperSlide><img className='opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300' src={Client6} alt="" /></SwiperSlide>
        <SwiperSlide><img className='opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300' src={Client7} alt="" /></SwiperSlide>
        <SwiperSlide><img className='opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300' src={Client8} alt="" /></SwiperSlide>
      </Swiper>
    </>
  )
}
