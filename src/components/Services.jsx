import React from 'react'
import Image from 'next/image'

const Services = () => {
  return (
    <div className='flex justify-between mt-5 mb-14'>
        <div className="first flex gap-2 items-center w-2/6">
            <Image src="/icons/bus.png" width={70} height={70} alt='image'/>
            <div className="info">
                <h1 className=' text-xl font-semibold'>Транспортные услуги</h1>
                <p>Наша компания может предоствить вам любой вид автотранспорта для вас</p>
            </div>
        </div>
        <div className="first flex gap-2 items-center w-2/6">
            <Image src="/icons/team.png" width={70} height={70} alt='image'/>
            <div className="info">
                <h1 className=' text-xl font-semibold'>Индивидуальный подход</h1>
                <p>Туроператоры нашей компании могут разработать и организовать для вас туры в любой регион Узбекистана, предоставляя как комплексное, так и отдельное обслуживание на свободной базе.</p>
            </div>
        </div>
        <div className="first flex gap-2 items-center w-2/6">
            <Image src="/icons/stars.png" width={70} height={70} alt='image'/>
            <div className="info">
                <h1 className=' text-xl font-semibold'>Опыт работы</h1>
                <p>Мы являемся туроператором (out coming/incoming) в сфере международного туризма 8 лет. В команде собраны настоящие профессионалы — мультиязычные специалисты туристического бизнеса, предоставляющие исключительно высокий уровень сервиса.</p>
            </div>
        </div>
    </div>
  )
}

export default Services