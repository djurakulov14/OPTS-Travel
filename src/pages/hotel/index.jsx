import Layout from '@/Layout/Layout'
import TopSection from '@/components/TopSection'
import HotelCard from '@/components/_child/HotelCard'
import React from 'react'

const Hotel = () => {
  return (
    <Layout>
        <TopSection isSwiper={false} title={"Отели"} dsc={"Отели нашего слнечного Узбекистана с которыми мы сотрудничаем"}/>
        <div className="content flex flex-wrap justify-between gap-8 relative -top-52">
            <HotelCard/>
            <HotelCard/>
            <HotelCard/>
            <HotelCard/>
            <HotelCard/>
            <HotelCard/>
            <HotelCard/>
            <HotelCard/>
            <HotelCard/>
            <HotelCard/>
        </div>
    </Layout>
  )
}

export default Hotel