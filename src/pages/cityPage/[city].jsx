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
  const response = await fetch("http://localhost:3000/api/hotels")
  const hotelss = await response.json()
  
  const param = context.params.city.split('=').at(-1)
  
  const obj = data.filter(item => item.id === +param)[0]
  const hotels = hotelss.filter(item => item.cityId === +param)


  return {
    props: {
      city: obj,
      hotels:hotels
    }, // will be passed to the page component as props
  }
}

const Cityid = ({city, hotels}) => {
  return (
    <Layout>
        <TopSection isSwiper={false} title={city.title} dsc={city.subTitle}/>
        <div className=" mb-32">
          <h1 className='title'>История города:</h1>
          <p className='mb-8 text-xl'>{city.history}</p>
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
        {city.title.includes("Шахрисабс") ? "" :
        <>
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
        {
          hotels.map(item => <SwiperSlide key={item.id}><HotelCard {...item}/></SwiperSlide>)
        }
      </Swiper>
        </>  
        }
      <h1 className='title text-center mb-8'>Карта</h1>
      <iframe src={city.map} width="100%" height="600" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </Layout>
  )
}

export default Cityid