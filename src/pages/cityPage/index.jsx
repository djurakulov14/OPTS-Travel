import React from 'react'
import Layout from '@/Layout/Layout'
import TopSection from '@/components/TopSection'
import CityCard from '@/components/_child/CityCard'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Head from 'next/head'

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

  const {t} = useTranslation("main")

  return (
    <>
    <Head>
      <title>OPTS - Cities</title>
      <link rel="icon" href="/icons/favicon.ico" />
    </Head>
    <Layout>
    <TopSection isSwiper={false} title={t("citiesOfTitle")} dsc={t("citiesOf")} img={"https://images.unsplash.com/photo-1669664321446-d6f903bddc32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}/>
    <div className="content flex flex-wrap justify-around gap-8 relative -top-52 max-md:-top-24">
      {
        city.map(item => <Link key={item.id} href={item.link}><CityCard {...item}/></Link>)
      }
    </div>
  </Layout>
    </>
  )
}

export default City