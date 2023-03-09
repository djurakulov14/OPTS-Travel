import React, { useState } from 'react'
import Header from './Header'
import MyButton from './_child/MyButton'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import { Autoplay, Navigation } from "swiper";
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

const TopSection = ({ isSwiper,title, arr, dsc, dsc2, img}) => {
    const [image, setImage] = useState(arr ? arr[0]?.img : img ? img : "/images/chimgan.png")

    function changeImage(event) {
        if(arr){
            event.slides.forEach(el => {
                if(el.classList.contains("swiper-slide-active")){
                    setImage(el.lastChild.innerText);
                }
            });
        }
    }

    const {t} = useTranslation("main")
    const router = useRouter()

    return (
        <section className='h-[600px] w-full text-white mb-18 max-md:h-[450px]'>
        <Header/>
            <div className="bg absolute top-0 left-0 z-[-1] h-[600px] max-md:h-[450px] w-full after:absolute after:inset-0 after:bg-[rgba(0,0,0,.4)] after:z-[-1]  delay-200" style={{background: `url(${image})`,backgroundSize: "cover",backgroundPosition: "center"}}>
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
            className="mySwiper mt-24 h-fit"
            onSlideChangeTransitionStart={changeImage}
            onClick={changeImage}
            >
            {
                arr.map(item => 
                <>
                    <SwiperSlide onClick={changeImage} key={item.id} className=' !h-fit'>
                        <div className="info">
                            <div className="dsc flex flex-col gap-6 mb-6">
                                <h1 className=' text-4xl font-bold max-md:text-3xl'>{item.title}</h1>
                                <p className=' text-2xl font-normal max-md:text-xl text-[#DFDFDF] w-2/4'>{item.duration} {t("days")}/ {item.duration - 1} {t("nights")}</p>
                            </div>
                            <MyButton onClick={() => router.push(`/tour/id=${item.id}`)} style={{fontSixe: "16px"}} >{t("more")}</MyButton>
                         </div>
                        <p className='hidden'>{item.img}</p>
                    </SwiperSlide>
                </>
            )
            }
        </Swiper>
        :
        <div className="info mt-32 max-md:mt-20">
            <div className="dsc flex flex-col">
                <h1 className=' text-4xl font-bold mb-7 max-md:text-2xl'>{title}</h1>
                <p className=' text-2xl font-normal text-[#DFDFDF] w-2/4 max-md:text-xl max-md:w-full'>{dsc}</p>
                {dsc2 ? 
                    <p className=' text-2xl font-normal text-[#DFDFDF] w-2/4 max-md:w-5/6'>{dsc2}</p>
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