import Layout from '@/Layout/Layout'
import TopSection from '@/components/TopSection'
import TourCard from '@/components/_child/TourCard'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import React from 'react'

export async function getStaticProps({locale}) {
  
  
    return {
      props: {
        ...(await serverSideTranslations(locale, ["header", "footer", "about", "expirience"])),
      }, // will be passed to the page component as props
    }
  }

const AboutUs = () => {

    const {t} = useTranslation("about")

  return (
    <>
    <Head>
        <title>OPTS - {t("usTitle")}</title>
    </Head>
    <Layout>
        <TopSection isSwiper={false} title={t("usTitle")} dsc={t("info")} img={"https://images.unsplash.com/photo-1585734524189-30daa0b32a19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}/>
        <div className="content">
            <div className="top flex justify-between items-top mb-24 max-lg:flex-col max-lg:gap-5">
                <div className="exp w-[30%] flex flex-col gap-3 max-lg:w-full">
                    <h1 className='title'>{t("expTitle")}</h1>
                    <p>{t("exp")}</p>
                </div>
                <div className="pod w-[30%] flex flex-col gap-3 max-lg:w-full">
                    <h1 className='title'>{t("approachTitle")}</h1>
                    <p>{t("approach")}</p>
                </div>
                <div className="lic w-[30%] flex flex-col gap-3 max-lg:w-full">
                    <h1 className='title'>{t("licenceTitle")}</h1>
                    <p>{t("licence")}</p>
                </div>
            </div>
            <div className="list flex flex-col gap-3 mb-24  max-lg:w-full">
                <h1 className=' title w-2/3  max-lg:w-full'>{t("customTour")}</h1>
                <ul className='list-disc pl-5'>
                    <li>{t("time")}</li>
                    <li>{t("numDays")}</li>
                    <li>{t("citiesVisit")}</li>
                    <li>{t("category")}</li>
                </ul>
            </div>
            <div className="list flex flex-col gap-3 mb-24  max-lg:w-full">
                <h1 className=' title w-2/3'>{t("sivices")}</h1>
                <ul className='list-disc  pl-5'>
                    <li>{t("touristAuto")}</li>
                    <li>{t("bookingCategory")}</li>
                    <li>{t("guides")}</li>
                    <li>{t("soop")}</li>
                    <li>{t("bookTickets")}</li>
                    <li>{t("bookRailway")}</li>
                    <li>{t("food")}</li>
                    <li>{t("org")}</li>
                    <li>{t("etc")}</li>
                    <li>{t("orgMeets")}</li>
                </ul>
            </div>
        </div>
    </Layout>
    </>
  )
}

export default AboutUs