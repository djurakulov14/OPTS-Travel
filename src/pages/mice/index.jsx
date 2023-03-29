import Layout from '@/Layout/Layout'
import TopSection from '@/components/TopSection'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import React from 'react'


export async function getStaticProps({locale}) {

  return {
    props: {
      ...(await serverSideTranslations(locale, ["header", "footer", "main", "mice"])),
    }, // will be passed to the page component as props
  }
}


const Mice = () => {

  const {t} = useTranslation("mice")

  return (
    <>
    <Head>
      <title>OPTS - MICE</title>
      <link rel="icon" href="/icons/favicon.ico" />
    </Head>
    <div>
        <Layout>
            <TopSection title={"MICE"} img={"https://evu.uz/wp-content/uploads/05_Kongress_Rus.jpg"} dsc={t("subTitle")}/>
            <div className="content">
                <div className="mb-20">
                  <h1 className='title'>{t("firstTitle")}</h1>
                  <p>{t("sub2")}</p>
                  <p>{t("sub3")}</p>
                </div>
                <div className="mb-20">
                  <h1 className='title'>{t("title2")}</h1>
                  <ul>
                    <li>{t("l1")}</li>
                    <li>{t("l2")}</li>
                    <li>{t("l3")}</li>
                    <li>{t("l4")}</li>
                    <li>{t("l5")}</li>
                    <li>{t("l6")}</li>
                    <li>{t("l7")}</li>
                  </ul>
                </div>
                <div className="mb-20">
                  <h1 className='title'>{t("title3")}</h1>
                  <ul>
                    <li>{t("l8")}</li>
                    <li>{t("l9")}</li>
                    <li>{t("l10")}</li>
                    <li>{t("l11")}</li>
                    <li>{t("l12")}</li>
                  </ul>
                </div>
            </div>
        </Layout>
    </div>
    </>
  )
}

export default Mice