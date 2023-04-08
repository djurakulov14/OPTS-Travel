import React from 'react'
import Layout from '@/Layout/Layout'
import TourCard from '@/components/_child/TourCard'
import TopSection from '@/components/TopSection'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'



export async function getStaticProps({locale}) {
  const res = await fetch("https://opts-tours.netlify.app/api/tours", {headers: {
    lng: locale
  }})
  const data = await res.json()

  return {
    props: {
      arr: data,
      ...(await serverSideTranslations(locale, ["header", "footer", "main"])),
    },
  }
}

const Tours = ({arr}) => {


  const {t} = useTranslation("main")

  return (
    <>
      <Head>
        <title>OPTS - Tours</title>
        <link rel="icon" href="/icons/favicon.ico" />
        <meta name="keywords" content="Omega Premier Travel Servis" />
	      <meta name="robots" content="index, nofollow" />
        <meta name="description" content="Туристическая компания «Omega Premier Travel Servis» приглашает вас посетить гостеприимный и солнечный Узбекистан по нашим маршрутам! " />
	      <meta name="generator" content="opts.tours" />
      </Head>
      <Layout>
          <TopSection isSwiper={false} title={t("tourTitle")} dsc={t("tour")} img={"https://images.unsplash.com/photo-1662468698401-fa4c8a1b91cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80"}/>
          <div className="content flex flex-wrap gap-28 relative -top-52 max-md:-top-24">
              {
                arr.map(item => <TourCard key={item.id} {...item}/>)
              }
          </div>
      </Layout>
    </>
  )
}

export default Tours