import Layout from '@/Layout/Layout'
import CardsSection from '@/components/CardsSection'
import Services from '@/components/Services'
import TopSection from '@/components/TopSection'
import Video from '@/components/Video'
import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

export async function getStaticProps({locale}) {

  const res = await fetch(locale === "ru" ? "https://opts-tours.netlify.app/api/tours" : "https://opts-tours.netlify.app/api/toursEn")
  const data = await res.json()


  return {
    props: {
      data: data,
      ...(await serverSideTranslations(locale, ["header", "expirience", "footer", "main", "about"])),
    },
  }
}

export default function Home({data}) {

  const {t} = useTranslation("main", "about")
  let pageWidth = 0
  let slides = 4

  if (typeof window !== "undefined") {
    var width = window.innerWidth;
    pageWidth = width
 }
 if(pageWidth <= 640){
  slides = 1
 } else if(pageWidth <= 1024){
  slides = 2
 } else if(pageWidth <= 1280){
  slides = 3
 }

 data = data.slice(0,4)
 

  return (
    <>
      <Head>
        <title>OPTS Travel</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="Omega Premier Travel Servis" />
	      <meta name="robots" content="index, nofollow" />
        <meta name="description" content="Туристическая компания «Omega Premier Travel Servis» приглашает вас посетить гостеприимный и солнечный Узбекистан по нашим маршрутам! " />
	      <meta name="generator" content="opts.tours" />
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>
      <main>
        <Layout>
          <TopSection arr={data} isSwiper={true} />
          <Services/>
          <CardsSection title={t("popular")} slides={slides} arr={data} />
          <Video/>
        </Layout>
      </main>
    </>
  )
}
