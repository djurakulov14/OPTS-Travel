import React from 'react'
import TopSection from '@/components/TopSection'
import { Autoplay } from 'swiper'
import { Swiper ,SwiperSlide } from 'swiper/react'
import { PlaceCard } from '@/components/_child/PlaceCard'
import HotelCard from '@/components/_child/HotelCard'
import Layout from '@/Layout/Layout'


export async function getServerSideProps(context) {
  const res = await fetch("http://localhost:3000/api/city")
  const data = await res.json()
  
  const param = context.params.city.split('=').at(-1)
  
  const obj = data.filter(item => item.id === +param)[0]

  return {
    props: {
      city: obj
    }, // will be passed to the page component as props
  }
}

const Cityid = ({city}) => {
  return (
    <Layout>
        <TopSection isSwiper={false} title={city.title} dsc={city.subTitle}/>
        <div className=" mb-32">
          <h1 className='title'>История города:</h1>
          <p className='mb-8'>{city.history}</p>
          <h1 className='title text-center mb-8'>Достопримечательности</h1>
          <Swiper
          speed={1500}
          slidesPerView={3}
          spaceBetween={30}
          autoplay={{
            delay: 2000,
            disableOnInteraction:false
          }}
          modules={[Autoplay]}
          className="mySwiper !m-auto"
          >
          {
            city.places.map((item, index) => <SwiperSlide key={index}><PlaceCard title={item}/></SwiperSlide>)
          }
      </Swiper>
      <h1 className='title text-center mb-8'>Отели в этом городе</h1>
      <Swiper
          speed={1500}
          slidesPerView={3}
          spaceBetween={30}
          autoplay={{
            delay: 2000,
            disableOnInteraction:false
          }}
          modules={[Autoplay]}
          className="mySwiper"
          >
        <SwiperSlide><HotelCard/></SwiperSlide>
        <SwiperSlide><HotelCard/></SwiperSlide>
        <SwiperSlide><HotelCard/></SwiperSlide>
        <SwiperSlide><HotelCard/></SwiperSlide>
        <SwiperSlide><HotelCard/></SwiperSlide>
        <SwiperSlide><HotelCard/></SwiperSlide>
      </Swiper>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d196505.4837712567!2d66.89922249921875!3d39.68575032082124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4d191960077df7%3A0x487636d9d13f2f57!2z0KHQsNC80LDRgNC60LDQvdC0!5e0!3m2!1sru!2s!4v1676821439839!5m2!1sru!2s" width="100%" height="600" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </Layout>
  )
}

export default Cityid