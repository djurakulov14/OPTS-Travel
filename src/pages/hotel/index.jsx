import React from 'react'
import Layout from '@/Layout/Layout'
import TopSection from '@/components/TopSection'
import HotelCard from '@/components/_child/HotelCard'


export async function getStaticProps() {
  // const res = await fetch("http://localhost:3000/api/hotels")
  // const data = await res.json()


  const data = [
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
      hotels: data
    }, // will be passed to the page component as props
  }
}


const Hotel = ({hotels}) => {
  return (
    <Layout>
        <TopSection isSwiper={false} title={"Отели"} dsc={"Отели нашего солнечного Узбекистана с которыми мы сотрудничаем"}/>
        <div className="content flex flex-wrap justify-between gap-8 relative -top-52">
            {
              hotels.map(item => <HotelCard key={item.id} {...item}/>)
            }
        </div>
    </Layout>
  )
}

export default Hotel