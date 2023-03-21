import Layout from '@/Layout/Layout'
import TopSection from '@/components/TopSection'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import React from 'react'


export async function getStaticProps({locale}) {

  return {
    props: {
      ...(await serverSideTranslations(locale, ["header", "footer", "main"])),
    }, // will be passed to the page component as props
  }
}


const mice = () => {


  return (
    <>
    <Head>
      <title>OPTS - MICE</title>
    </Head>
    <div>
        <Layout>
            <TopSection title={"MICE"} img={"https://evu.uz/wp-content/uploads/05_Kongress_Rus.jpg"} dsc={"MICE в нашей компании - понятие, выходящее далеко за рамки стандартной аббревиатуры Meetings*Incentives*Conferences*Events."}/>
            <div className="content">
                <div className="mb-20">
                  <h1 className='title'>О MICE</h1>
                  <p>Компания Omega Premier Travel  Servis на протяжении 10 лет работает  на туристическом рынке Узбекистана, специализируясь на приеме иностранных туристов, включая групповые туры корпоративного сегмента и инсентив.</p>
                  <p>MICE в нашей компании - понятие, выходящее далеко за рамки стандартной аббревиатуры Meetings*Incentives*Conferences*Events.</p>
                  <p>С помощью корпоративных поездок можно получить необходимые знания и улучшить профессиональные навыки, завязать новые знакомства и наладить эффективное партнерство с коллегами. MICE – своего рода полезный отдых. Открывая для себя новые уголки мира и участвуя в интересных событиях, люди с удовольствием делятся знаниями и учатся у более квалифицированных коллег.</p>
                </div>
                <div className="mb-20">
                  <h1 className='title'>VIP туры и MICE проекты: деловые встречи, конференции, семинары, инсентив мероприятия:</h1>
                  <ul>
                    <li>Бронирование авиабилетов, содействие в организации чартерных рейсов и частных самолетов</li>
                    <li>Подбор проживания в гостиницах любой категории</li>
                    <li>Выбор конференц-зала и локаций для встреч</li>
                    <li>Все трансферы и любые транспортные услуги</li>
                    <li>Организация экскурсионных туров от одного часа до нескольких дней</li>
                    <li>Организация инсентив-возможностей до и после поездки, индивидуально или в группах</li>
                    <li>Эксклюзивные и авторские VIP туры</li>
                  </ul>
                </div>
                <div className="mb-20">
                  <h1 className='title'>Организация конференций и семинаров под ключ:</h1>
                  <ul>
                    <li>Подбор необходимых площадок с требуемыми условиями и рассадкой</li>
                    <li>От одного часа до целого дня</li>
                    <li>Отели, конгресс-холлы и другие места</li>
                    <li>Любое оборудование: интерактивные панели, конференц-системы, голосование и синхроперевод, проекторы, флипчарты и т.д.</li>
                    <li>Организация кофе-брейков, бранчей, обедов, ужинов, гала-ужинов</li>
                  </ul>
                </div>
            </div>
        </Layout>
    </div>
    </>
  )
}

export default mice