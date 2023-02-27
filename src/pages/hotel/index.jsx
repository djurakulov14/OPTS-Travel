import React from 'react'
import Layout from '@/Layout/Layout'
import TopSection from '@/components/TopSection'
import HotelCard from '@/components/_child/HotelCard'


export async function getStaticProps() {
  const res = await fetch("https://main--opts-travel.netlify.app/api/hotels")
  const data = await res.json()


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