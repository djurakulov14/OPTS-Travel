import React from 'react'
import { MdLocationPin } from 'react-icons/md';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';



const Footer = () => {
  return (
        <>
        <footer className='overflow-hidden'>
            <div className="top flex justify-between mb-10 before:absolute before:left-0 before:z-[-1] before:bg-[#c4c4c4] before:w-full">
                <div className="about w-[30%] flex flex-col gap-3">
                    <h1 className='text-2xl font-semibold'>О компании</h1>
                    <p>Туристическая компания «Omega Premier Travel Servis» является туроператором (out coming/incoming) в сфере международного туризма 8 лет. В команде собраны настоящие профессионалы — мультиязычные специалисты туристического бизнеса, предоставляющие исключительно высокий уровень сервиса.</p>
                </div>
                <div className="useful w-[30%] flex flex-col gap-3">
                    <h1 className='text-2xl font-semibold '>Полезные ресурсы</h1>
                    <div className="info flex flex-col gap-1">
                        <a className='hover:underline' href="https://book.uzairways.com/ru">Купить авиабилеты онлайн</a>
                        <a className='hover:underline' href="https://www.uzairways.com/ru/statform">Расписание рейсов</a>
                        <a className='hover:underline' href="https://railway.uz/ru/interaktivnye_uslugi/spravochnye_telefony/">Купить авиабилеты онлайн</a>
                        <a className='hover:underline' href="https://e-ticket.railway.uz/ru/home">Купить ж/д билет</a>
                        <a className='hover:underline' href="https://avtoticket.uz/">Купить билет на междугородные автобусы</a>
                        <a className='hover:underline' href="https://e-visa.gov.uz/main">Подать заявку на E-Visa</a>
                        <a className='hover:underline' href="http://emehmon.uz/user/login">Получить временную регистрацию</a>
                    </div>
                </div>
                <div className="about w-[30%] flex flex-col gap-3">
                    <h1 className='text-2xl font-semibold'>Контакты</h1>
                    <div className="info flex flex-col gap-1">
                        <a href='https://goo.gl/maps/K641jinTvtPexthq8' className=' flex items-center gap-1 hover:underline'><MdLocationPin/>Узбекистан, Самарканд, ул.Али-Кушчи 7</a>
                        <a href='tel:+998993333232' className=' flex items-center gap-1 hover:underline'><FaPhoneAlt/>+99899 333-32-32, +99899 444-32-32</a>
                        <a href='mailto:info@opts.tours' className=' flex items-center gap-1 hover:underline'><HiMail/>info@opts.tours</a>
                    </div>
                </div>
            </div>
            <div className="bot h-16 flex items-center justify-between text-white before:absolute before:left-0 before:z-[-1] before:bg-[#1EB8D4] before:w-full before:h-16">
                <p>COPYRIGHT © 2023 - OMEGA PREMIER TRAVEL SERVIS DESIGNED BY <a href="https://www.instagram.com/djuraku1ov/">SARDOR</a></p>
                <div className="links flex items-center gap-2">
                    <a href="#"><FaFacebook/></a>
                    <a href="#"><FaInstagram/></a>
                    <a href="#"><FaYoutube/></a>
                    <a href="#"><FaWhatsapp/></a>
                </div>
            </div>
        </footer>
        </>
  )
}

export default Footer