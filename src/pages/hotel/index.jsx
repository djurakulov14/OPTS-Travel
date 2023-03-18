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
        <TopSection isSwiper={false} title={t("hotelTtitle")} dsc={t("hotel")} img={"https://images.unsplash.com/photo-1665317535953-75f73dfe07d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}/>
        <div className="content flex flex-wrap justify-center items-center gap-8 relative -top-52 max-md:-top-24">
            {
              hotels.map(item => <HotelCard key={item.id} {...item}/>)
            }
        </div>
    </Layout>
  )
}

export default Hotel