import React from 'react'
import Layout from '@/Layout/Layout'
import TopSection from '@/components/TopSection'
import HotelCard from '@/components/_child/HotelCard'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'


export async function getServerSideProps(context) {
  const res = await fetch("https://main--opts-travel.netlify.app/api/hotels")
  const data = await res.json()
  const param = context.params.city.split('=').at(-1)

  const filtered = data.filter(item => item.cityId === +param)


  return {
    props: {
      hotels: filtered,
      ...(await serverSideTranslations(locale, ["header", "footer"])),
    }, // will be passed to the page component as props
  }
}

const HotelinCity = ({hotels}) => {



  const loc = hotels[0].location.replace('ь','и')
  return (
    <Layout>
      <TopSection isSwiper={false} title={loc} dsc={"Самые лучшие отели этого города разных классов"}/>
      <div className="content flex flex-wrap justify-between gap-8 relative -top-52">
        {
          hotels.map(item => <HotelCard key={item.id} {...item}/>)
        }
      </div>
    </Layout>
  )
}

export default HotelinCity