import React from 'react'
import Footer from '@/components/Footer'
import TopSection from '@/components/TopSection'
import { Autoplay } from 'swiper'
import { Swiper ,SwiperSlide } from 'swiper/react'
import { PlaceCard } from '@/components/_child/PlaceCard'
import HotelCard from '@/components/_child/HotelCard'


const Cityid = () => {
  return (
    <div className='cont'>
        <TopSection isSwiper={false} title={"Города Узбекистана"} dsc={"Все исторические города солнечного Узбекистана"}/>
        <div className=" mb-32">
          <h1 className='title'>История города:</h1>
          <p className='mb-8'>Cамарканд можно только увидеть и остаться навечно пленённым, тем переплетением времени и различных культур, находящихся на его территории. Вы знали, что Самарканд является ровесником таких древних столиц мира как Рим и Нанкин? Да, да! Город появился примерно 2 750 лет назад, что дает ему право называться одним из самых древних городов не только Центральной Азии, но и мира. Пик процветания города приходится на времена правления Амира Тимура (Тамерлана) и его потомков.
          <br/> <br />  Именно тогда Самарканд стал столицей его могучей империи. Существует легенда о том, как Тимур выбирал свою столицу… Для того, чтобы определиться с выбором, он приказал своим подданным проехать по всем городам и повесить на их воротах тушу барана и через месяц лично сделал обход. На всех воротах туши успели сгнить, и только на вратах Самарканда она была почти полностью целой и даже стала подвяленной. Увидев это Тимур сказал: «В этом городе самый чистый воздух и здоровая земля. Столица будет здесь!». Благодаря внуку Тамерлана, Мирзо Улугбеку, город стал центром мировой науки. Самарканд вошел в список «50 городов, которые стоит посетить в этой жизни».</p>
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
          className="mySwiper"
          >
        <SwiperSlide><PlaceCard/></SwiperSlide>
        <SwiperSlide><PlaceCard/></SwiperSlide>
        <SwiperSlide><PlaceCard/></SwiperSlide>
        <SwiperSlide><PlaceCard/></SwiperSlide>
        <SwiperSlide><PlaceCard/></SwiperSlide>
        <SwiperSlide><PlaceCard/></SwiperSlide>
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
        </div>
        <Footer/>
    </div>
  )
}

export default Cityid