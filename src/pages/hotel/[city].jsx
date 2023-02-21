import Layout from '@/Layout/Layout'
import TopSection from '@/components/TopSection'
import HotelCard from '@/components/_child/HotelCard'
import React from 'react'

const HotelinCity = () => {
  return (
    <Layout>
        <TopSection isSwiper={false} title={"Отели в Самарканде"} dsc={"Самые лучшие отели города Самарканд разных классов"}/>
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

export default HotelinCity