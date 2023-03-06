import React from 'react'
import Layout from '@/Layout/Layout'
import TopSection from '@/components/TopSection'
import HotelCard from '@/components/_child/HotelCard'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'


export async function getStaticProps({locale}) {
  const res = await fetch("https://main--opts-travel.netlify.app/api/hotels")
  const data = await res.json()


  return {
    props: {
      hotels: data,
      ...(await serverSideTranslations(locale, ["header", "footer", "main"])),
    }, // will be passed to the page component as props
  }
}


const Hotel = ({hotels}) => {

  const {t} = useTranslation("main")

  return (
    <Layout>
        <TopSection isSwiper={false} title={t("hotelTtitle")} dsc={t("hotel")}/>
        <div className="content flex flex-wrap justify-between gap-8 relative -top-52 max-md:-top-24">
            {
              hotels.map(item => <HotelCard key={item.id} {...item}/>)
            }
        </div>
    </Layout>
  )
}

export default Hotel