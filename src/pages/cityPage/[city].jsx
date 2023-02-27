import React from 'react'
import TopSection from '@/components/TopSection'
import { Autoplay } from 'swiper'
import { Swiper ,SwiperSlide } from 'swiper/react'
import { PlaceCard } from '@/components/_child/PlaceCard'
import HotelCard from '@/components/_child/HotelCard'
import Layout from '@/Layout/Layout'


export async function getServerSideProps(context) {
  // const res = await fetch("http://localhost:3000/api/city")
  // const data = await res.json()
  // const response = await fetch("http://localhost:3000/api/hotels")
  // const hotelss = await response.json()
  
  // const param = context.params.city.split('=').at(-1)
  
  // const obj = data.filter(item => item.id === +param)[0]
  // const hotels = hotelss.filter(item => item.cityId === +param)

const obj = {
    id:1,
    title: "Самарканд",
    subTitle: "Жемчужина востока",
    places: ["Шахи-Зинда", "Биби-Ханум", "Гур-Эмир", "Обсерватория Улегбека", "Регистан"],
    link: "/cityPage/id=1",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d196505.4837712567!2d66.89922249921875!3d39.68575032082124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4d191960077df7%3A0x487636d9d13f2f57!2z0KHQsNC80LDRgNC60LDQvdC0!5e0!3m2!1sru!2s!4v1676821439839!5m2!1sru!2s",
    history:"Cамарканд можно только увидеть и остаться навечно пленённым, тем переплетением времени и различных культур, находящихся на его территории. Вы знали, что Самарканд является ровесником таких древних столиц мира как Рим и Нанкин? Да, да! Город появился примерно 2 750 лет назад, что дает ему право называться одним из самых древних городов не только Центральной Азии, но и мира. Пик процветания города приходится на времена правления Амира Тимура (Тамерлана) и его потомков. Именно тогда Самарканд стал столицей его могучей империи. Существует легенда о том, как Тимур выбирал свою столицу… Для того, чтобы определиться с выбором, он приказал своим подданным проехать по всем городам и повесить на их воротах тушу барана и через месяц лично сделал обход. На всех воротах туши успели сгнить, и только на вратах Самарканда она была почти полностью целой и даже стала подвяленной. Увидев это Тимур сказал: «В этом городе самый чистый воздух и здоровая земля. Столица будет здесь!». Благодаря внуку Тамерлана, Мирзо Улугбеку, город стал центром мировой науки. Самарканд вошел в список «50 городов, которые стоит посетить в этой жизни»."
}

const hotels = [
  {
  id: 7,
  cityId:2,
  title: "CARAVAN Plaza",
  stars: 4,
  link:"https://www.booking.com/Share-se9GaZ",
  img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/344763178.jpg?k=c09270821802c94ebc01ff7f96e3067873898e0fead168194641d362ced5d5e3&o=&hp=1",
  location: "Отель в Бухаре"
},
{
  id: 2,
  cityId:2,
  title: "Paradise Plaza Luxury",
  stars: 4,
  link:"https://www.booking.com/Share-Fex5ZA",
  img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/421102436.jpg?k=910173f0a55dddcc8034c83e401654d48e752d7176fa5823f0dc38b72eec28d4&o=&hp=1",
  location: "Отель в Бухаре"
},
{
  id: 3,
  cityId:2,
  title: "Boutique Hotel Minzifa",
  stars: 4,
  link:"https://www.booking.com/Share-FjoqSrX",
  img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/10670790.jpg?k=710c153d0a3223d53fb43171f109721f836ab3f715bd4824fc1027bcc2f7d7c8&o=&hp=1",
  location: "Отель в Бухаре"
}
]

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