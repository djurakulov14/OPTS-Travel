import React from 'react'
import Layout from '@/Layout/Layout'
import TourCard from '@/components/_child/TourCard'
import TopSection from '@/components/TopSection'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'



export async function getStaticProps({locale}) {
  const res = await fetch("https://opts-travel.netlify.app/api/tours")
  const data = await res.json()

  return {
    props: {
      arr: data,
      ...(await serverSideTranslations(locale, ["header", "footer", "main"])),
    }, // will be passed to the page component as props
  }
}

const Tours = ({arr}) => {


  const {t} = useTranslation("main")

  return (
    <>
      <Head>
        <title>OPTS - Tours</title>
      <link rel="icon" href="/icons/favicon.ico" />
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