import React from 'react'
import TopSection from '@/components/TopSection'
import { Autoplay } from 'swiper'
import { Swiper ,SwiperSlide } from 'swiper/react'
import { PlaceCard } from '@/components/_child/PlaceCard'
import HotelCard from '@/components/_child/HotelCard'
import Layout from '@/Layout/Layout'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'


export async function getServerSideProps(context) {
  const res = await fetch("https://opts-travel.netlify.app/api/city")
  const data = await res.json()
  const response = await fetch("https://main--opts-travel.netlify.app/api/hotels")
  const hotelss = await response.json()
  
  const param = context.params.city.split('=').at(-1)
  
  const obj = data.filter(item => item.id === +param)[0]
  const hotels = hotelss.filter(item => item.cityId === +param)


  return {
    props: {
      city: obj,
      hotels:hotels,
      ...(await serverSideTranslations(context.locale, ["header", "footer", "main"])),
    }, // will be passed to the page component as props
  }
}

const Cityid = ({city, hotels}) => {

  const {t} = useTranslation("main")



  let pageWidth = 0
  let slides = 3
  let map = 500

  if (typeof window !== "undefined") {
    var width = window.innerWidth;
    pageWidth = width
    if(pageWidth <= 660){
     map = 200
     slides = 1
    } else if(pageWidth <= 1024){
     map = 400
     slides = 2
    } else if(pageWidth <= 1280){
     map = 600
     slides = 3
    }
 }

  return (
    <Layout>
        <TopSection isSwiper={false} title={city.title} dsc={city.subTitle} img={city.img}/>
        <div className=" mb-32 ma">
          <h1 className='title'>{t("history")}</h1>
          <p className='mb-8 text-xl max-md:text-base'>{city.history}</p>
          <h1 className='title text-center mb-8'>{t("places")}</h1>
          <Swiper
          speed={1500}
          slidesPerView={slides}
          spaceBetween={30}
          autoplay={{
            delay: 2000,
            disableOnInteraction:false
          }}
          modules={[Autoplay]}
          className="mySwiper !m-auto"
          >
          {
            city.places.map((item) => <SwiperSlide key={item.id}><PlaceCard {...item}/></SwiperSlide>)
          }
       </Swiper>
        {city.title.includes("Шахрисабс") ? "" :
        <>
        <h1 className='title text-center mb-8'>{t("hotelCity")}</h1>
          <Swiper
          speed={1500}
          slidesPerView={slides}
          spaceBetween={30}
          autoplay={{
            delay: 2000,
            disableOnInteraction:false
          }}
          modules={[Autoplay]}
          className="mySwiper"
          >
        {
          hotels.map(item => <SwiperSlide key={item.id}><HotelCard {...item}/></SwiperSlide>)
        }
      </Swiper>
        </>  
        }
      <h1 className='title text-center mb-8'>{t("map")}</h1>
      <iframe src={city.map} width="100%" height={map + "px"} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </Layout>
  )
}

export default Cityid