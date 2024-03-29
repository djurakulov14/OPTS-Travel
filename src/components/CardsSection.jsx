import React from 'react'
import MyButton from './_child/MyButton'
import TourCard from './_child/TourCard'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

const CardsSection = ({title, arr, slides}) => {

  const {t} = useTranslation("main")

    return (
      <div className=' flex flex-col gap-5 items-center mb-24'>
        <h1 className=' text-3xl font-bold mt-10'>{title}</h1>
        <Swiper
        speed={1500}
        autoplay={{
            delay: 2000,
            disableOnInteraction:false
        }}
        slidesPerView={slides}
        spaceBetween={30}
        modules={[Autoplay]}
        className="mySwiper !m-auto !p-4 !h-fit !pb-5"
        >
        {
          arr.map((item, index) => <SwiperSlide key={index}><TourCard {...item} /></SwiperSlide>)
        }
      </Swiper>
        <Link href='/tour'><MyButton>{t("alltours")}</MyButton></Link>
    </div>
  )
}

export default CardsSection