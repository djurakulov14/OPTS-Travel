import React from 'react'
import Layout from '@/Layout/Layout'
import TourCard from '@/components/_child/TourCard'
import TopSection from '@/components/TopSection'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'



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
    <Layout>
        <TopSection isSwiper={false} title={t("tourTitle")} dsc={t("tour")}/>
        <div className="content flex flex-wrap justify-between gap-8 relative -top-52 max-md:-top-24">
            {
              arr.map(item => <TourCard key={item.id} {...item}/>)
            }
        </div>
    </Layout>
  )
}

export default Tours