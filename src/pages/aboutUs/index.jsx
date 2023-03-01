import Layout from '@/Layout/Layout'
import TopSection from '@/components/TopSection'
import TourCard from '@/components/_child/TourCard'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React from 'react'

export async function getStaticProps({locale}) {
  
  
    return {
      props: {
        ...(await serverSideTranslations(locale, ["header", "footer", "main"])),
      }, // will be passed to the page component as props
    }
  }

const AboutUs = () => {
  return (
    <Layout>
        <TopSection isSwiper={false} title={"О нас"} dsc={"Вся информация о нашей компании"}/>
        <div className="content">
            <div className="top flex justify-between items-top mb-24">
                <div className="exp w-[30%] flex flex-col gap-3">
                    <h1 className='title'>Опыт работы</h1>
                    <p>Мы являемся туроператором (out coming/incoming) в сфере международного туризма 8 лет. В команде собраны настоящие профессионалы — мультиязычные специалисты туристического бизнеса, предоставляющие исключительно высокий уровень сервиса.</p>
                </div>
                <div className="pod w-[30%] flex flex-col gap-3">
                    <h1 className='title'>Индивидуальный подход</h1>
                    <p>Туроператоры нашей компании могут разработать и организовать для вас туры в любой регион Узбекистана, предоставляя как комплексное, так и отдельное обслуживание на свободной базе.</p>
                </div>
                <div className="lic w-[30%] flex flex-col gap-3">
                    <h1 className='title'>Услуги лицензированы</h1>
                    <p>Лицензия на туроператорскую деятельность № Т-0042-08 Государственного Комитета по развитию туризма. Добро пожаловать в Узбекистан!</p>
                </div>
            </div>
            <div className="list flex flex-col gap-3 mb-24">
                <h1 className=' title w-2/3'>Мы готовы создать для вас индивидуальные туры по историческим городам, если в предварительной заявке будет указано:</h1>
                <ul className='list-disc pl-5'>
                    <li>Удобное для вас время года;</li>
                    <li>Желаемое количество дней пребывания на маршруте;</li>
                    <li>Города посещения;</li>
                    <li>Категория обслуживания.</li>
                </ul>
            </div>
            <div className="list flex flex-col gap-3 mb-24">
                <h1 className=' title w-2/3'>Перечень туристических услуг, предлагаемых заказчику:</h1>
                <ul className='list-disc  pl-5'>
                    <li>Туристический автотранспорт любой категории и вместимости;</li>
                    <li>Бронирование и размещение в гостиницах любой категории;</li>
                    <li>Локальные экскурсоводы на различных языках;</li>
                    <li>Сопровождение гидов-переводчиков по всему маршруту;</li>
                    <li>Бронирование и выкуп авиабилетов как на внутренние рейсы, так и на международные;</li>
                    <li>Бронирование и выкуп ж/д билетов на электропоезда внутри Узбекистана;</li>
                    <li>Питание — европейская кухня и узбекская национальная;</li>
                    <li>Организация дополнительных услуг, не входящих в основную программу обслуживания;</li>
                    <li>Аренда помещений для проведения конференций, семинаров, круглых столов и т.п.;</li>
                    <li>Организация встреч со специалистами в различных областях экономики Узбекистана.</li>
                </ul>
            </div>
            <div className="magazine flex flex-col gap-3 mb-24">
                <h1 className='title'>Наши журналы</h1>
                <div className="flex flex-wrap justify-between gap-8">
                    <TourCard/>
                    <TourCard/>
                    <TourCard/>
                    <TourCard/>
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default AboutUs