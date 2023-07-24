import React from 'react'
import Layout from '@/Layout/Layout'
import TopSection from '@/components/TopSection'
import HotelCard from '@/components/_child/HotelCard'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'


export async function getServerSideProps(context) {
  const res = await fetch("https://main--opts-tours.netlify.app/api/hotels")
  const data = await res.json()
  const param = context.params.city.split('=').at(-1)

  const filtered = data.filter(item => item.cityId === +param)


  return {
    props: {
      hotels: filtered,
      ...(await serverSideTranslations(context.locale, ["header", "footer"])),
    }, // will be passed to the page component as pro
  }
}

const HotelinCity = ({hotels}) => {



  const loc = hotels[0].location.replace('ь','и')
  return (
    <>
    <Head>
      <title>OPTS - Hotels</title>
      <link rel="icon" href="/icons/favicon.ico" />
    </Head>
    <Layout>
      <TopSection isSwiper={false} title={loc} dsc={"Самые лучшие отели этого города разных классов"} img={"https://images.unsplash.com/photo-1665317535953-75f73dfe07d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}/>
      <div className="content flex flex-wrap justify-center items-center gap-8 relative -top-52 max-md:-top-24">
        {
          hotels.map(item => <HotelCard key={item.id} {...item}/>)
        }
      </div>
    </Layout>
    </>
  )
}

export default HotelinCity