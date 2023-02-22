import Layout from '@/Layout/Layout'
import TopSection from '@/components/TopSection'
import HotelCard from '@/components/_child/HotelCard'
import React from 'react'


export async function getStaticProps(context) {
  const res = await fetch("http://localhost:3000/api/hotels")
  const data = await res.json()
  const param = context.params.city.split('=').at(-1)

  const filtered = data.filter(item => item.id === +param)


  return {
    props: {
      hotels: filtered
    }, // will be passed to the page component as props
  }
}

const HotelinCity = ({hotels}) => {
  return (
    <Layout>
      <TopSection isSwiper={false} title={"Отели в Самарканде"} dsc={"Самые лучшие отели города Самарканд разных классов"}/>
      <div className="content flex flex-wrap justify-between gap-8 relative -top-52">
        {
          hotels.map(item => <HotelCard key={item.id} {...item}/>)
        }
      </div>
    </Layout>
  )
}

export default HotelinCity