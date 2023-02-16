import React from 'react'
import Header from './Header'
import MyButton from './_child/MyButton'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper";

const TopSection = ({title, dsc}) => {

  return (
    <section className='h-[550px] w-full'>
        <Header/>
        <div className="bg absolute top-0 left-0 -z-10 h-[550px] w-full after:absolute after:inset-0 after:bg-[rgba(0,0,0,.2)] after:z-[-1]" style={{background: "url(/images/chimgan.png)",backgroundSize: "cover",backgroundPosition: "center"}}>
        <Swiper
        speed={1500}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 25000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper container m-auto py-5 mt-32 mb-6">
        <SwiperSlide>
            <div className="info">
                <div className="dsc flex flex-col gap-6 mb-6">
                    <h1 className=' text-4xl font-bold'>{title}</h1>
                    <p className=' text-2xl font-normal text-[#DFDFDF] w-2/4'>{dsc}</p>
                </div>
                <MyButton>Подробнее</MyButton>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="info">
                <div className="dsc flex flex-col gap-6 mb-6">
                    <h1 className=' text-4xl font-bold'>{title}</h1>
                    <p className=' text-2xl font-normal text-[#DFDFDF] w-2/4'>{dsc}</p>
                </div>
                <MyButton>Подробнее</MyButton>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="info">
                <div className="dsc flex flex-col gap-6 mb-6">
                    <h1 className=' text-4xl font-bold'>{title}</h1>
                    <p className=' text-2xl font-normal text-[#DFDFDF] w-2/4'>{dsc}</p>
                </div>
                <MyButton>Подробнее</MyButton>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="info">
                <div className="dsc flex flex-col gap-6 mb-6">
                    <h1 className=' text-4xl font-bold'>{title}</h1>
                    <p className=' text-2xl font-normal text-[#DFDFDF] w-2/4'>{dsc}</p>
                </div>
                <MyButton>Подробнее</MyButton>
            </div>
        </SwiperSlide>
      </Swiper>
        </div>
    </section>
  )
}

export default TopSection