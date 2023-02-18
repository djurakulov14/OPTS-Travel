import React from 'react'
import MyButton from './_child/MyButton'
import TourCard from './_child/TourCard'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

const CardsSection = ({title, arr}) => {
    return (
      <div className=' flex flex-col gap-5 items-center mb-24'>
        <h1 className=' text-3xl font-bold mt-10'>{title}</h1>
        <Swiper
        speed={1500}
        autoplay={{
            delay: 2000,
            disableOnInteraction:false
        }}
        loop={true}
        slidesPerView={4}
        spaceBetween={30}
        modules={[Autoplay]}
        className="mySwiper !m-auto !p-4 !mb-4"
        >
        {
          arr.map((item, index) => <SwiperSlide key={index}><TourCard/></SwiperSlide>)
        }
      </Swiper>
        <MyButton>Все туры</MyButton>
    </div>
  )
}

export default CardsSection