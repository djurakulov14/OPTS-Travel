import React from 'react'
import Layout from '@/Layout/Layout'
import TopSection from '@/components/TopSection'
import CityCard from '@/components/_child/CityCard'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

export async function getStaticProps({locale}) {
  const res = await fetch("https://opts-travel.netlify.app/api/city")
  const data = await res.json()


  return {
    props: {
      city: data,
      ...(await serverSideTranslations(locale, ["header", "footer", "main"])),
    }, // will be passed to the page component as props
  }
}

const City = ({city}) => {
  const router = useRouter()

  const {t} = useTranslation("main")

  return (
    <Layout>
      <TopSection isSwiper={false} title={t("citiesOfTitle")} dsc={t("citiesOf")}/>
      <div className="content flex flex-wrap justify-around gap-8 relative -top-52 max-md:-top-24">
        {
          city.map(item => <Link key={item.id} href={item.link}><CityCard {...item}/></Link>)
        }
      </div>
    </Layout>
  )
}

export default City