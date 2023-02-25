import Layout from '@/Layout/Layout'
import TopSection from '@/components/TopSection'
import React from 'react'
import { BsFacebook, BsInstagram, BsWhatsapp } from 'react-icons/bs';



const Contacts = () => {
  return (
    <Layout>
        <TopSection isSwiper={false} title={"Контакты"} dsc={"Мы будем рады получить от вас обратную связь"}/>
        <div className="content flex justify-between">
            <div className="left">
                <div className="media flex flex-col gap-1 mb-16">
                    <h1 className='title'>Соц.сети:</h1>
                    <div className="links flex gap-2">
                        <a href="#"><BsInstagram size={30}/></a>
                        <a href="#"><BsFacebook size={30}/></a>
                        <a href="#"><BsWhatsapp size={30}/></a>
                    </div>
                </div>
                <div className="media flex flex-col gap-1 mb-16">
                    <h1 className='title'>Номера телефонов:</h1>
                    <div className="links flex flex-col gap-1 text-lg font-medium">
                        <a href="#">+998(99)333-32-32</a>
                        <a href="#">+998(99)333-32-32</a>
                    </div>
                </div>
                <div className="media flex flex-col gap-1 mb-16">
                    <h1 className='title'>Адрес:</h1>
                    <div className="links flex gap-2 text-lg font-medium">
                        <a href="#">Узбекистан, Самарканд, ул.Али-Кушчи 7</a>
                    </div>
                </div>
                <div className="media flex flex-col gap-1 mb-16">
                    <h1 className='title'>Email:</h1>
                    <div className="links flex gap-2 text-lg font-medium">
                        <a href="#">info@opts.tours</a>
                    </div>
                </div>
                <div className="media flex flex-col gap-1 mb-16">
                    <h1 className='title'>График:</h1>
                    <div className="links flex flex-col text-lg font-medium">
                        <p>Пн-Сб: от 10:00 до 18:00</p>
                        <p>Обед с 13:00 до 14:00</p>
                    </div>
                </div>
            </div>
            <div className="right">
                <h1 className='title mb-3'>Локация:</h1>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d615.8545868541881!2d66.91915879517765!3d39.65616255175086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3b2174a42a7b64b2!2sOMEGA%20PREMIER%20TRAVEL%20SERVIS!5e0!3m2!1sru!2s!4v1677322352320!5m2!1sru!2s" width="800" height="600" style={{border: 0}} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </Layout>
  )
}

export default Contacts