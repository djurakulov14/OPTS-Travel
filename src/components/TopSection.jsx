import React from 'react'
import Header from './Header'
import MyButton from './_child/MyButton'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import { Autoplay, Navigation } from "swiper";

const TopSection = ({ isSwiper,title, dsc, dsc2}) => {
    
    return (
        <section className='h-[600px] w-full text-white mb-20'>
        <Header/>
        <div className="bg absolute top-0 left-0 -z-10 h-[600px] w-full after:absolute after:inset-0 after:bg-[rgba(0,0,0,.4)] after:z-[-1]" style={{background: "url(/images/chimgan.png)",backgroundSize: "cover",backgroundPosition: "center"}}>
        </div>
        {
            isSwiper ?
        <Swiper
            speed={1500}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
            delay: 25000,
            disableOnInteraction: false,
            }}
            navigation={true}
            slidesPerView={1}
            loop={true}
            modules={[Autoplay, Navigation]}
            className="mySwiper mt-24 !h-fit">
            <SwiperSlide className=' !h-fit'>
                <div className="info">
                    <div className="dsc flex flex-col gap-6 mb-6">
                        <h1 className=' text-4xl font-bold'>{title}</h1>
                        <p className=' text-2xl font-normal text-[#DFDFDF] w-2/4'>{dsc}</p>
                    </div>
                    <MyButton>Подроб</MyButton>
                </div>
            </SwiperSlide>
            <SwiperSlide className=' !h-fit'>
                <div className="info">
                    <div className="dsc flex flex-col gap-6 mb-6">
                        <h1 className=' text-4xl font-bold'>{title}</h1>
                        <p className=' text-2xl font-normal text-[#DFDFDF] w-2/4'>{dsc}</p>
                    </div>
                    <MyButton>Подробнее</MyButton>
                </div>
            </SwiperSlide>
        </Swiper>
        :
        <div className="info mt-32">
            <div className="dsc flex flex-col">
                <h1 className=' text-4xl font-bold mb-7'>{title}</h1>
                <p className=' text-2xl font-normal text-[#DFDFDF] w-2/4'>{dsc}</p>
                {dsc2 ? 
                    <p className=' text-2xl font-normal text-[#DFDFDF] w-2/4'>{dsc2}</p>
                    :
                    ""                
                }
            </div>
        </div>
        }
    </section>
  )
}

export default TopSection