import React from 'react'
import { MdLocationPin } from 'react-icons/md';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { useTranslation } from 'next-i18next';



const Footer = () => {

    const {t} = useTranslation("footer")

  return (
        <>
        <footer className='overflow-hidden'>
            <div className="top flex justify-between max-md:flex-col mb-10 after:absolute after:left-0 after:z-[-1] after:bg-[#FAFAFA] after:w-full max-md:gap-3">
                <div className="about w-[30%] flex flex-col gap-3 max-md:w-full">
                    <h1 className='text-2xl font-semibold'>{t("aboutCompTitle")}</h1>
                    <p>{t("aboutComp")}</p>
                </div>
                <div className="useful w-[30%] flex flex-col gap-3 max-md:w-full">
                    <h1 className='text-2xl font-semibold '>{t("useful")}</h1>
                    <div className="info flex flex-col gap-1">
                        <a className='hover:underline' href="https://book.uzairways.com/ru">{t("tickets")}</a>
                        <a className='hover:underline' href="https://www.uzairways.com/ru/statform">{t("flight")}</a>
                        <a className='hover:underline' href="https://e-ticket.railway.uz/ru/home">{t("railway")}</a>
                        <a className='hover:underline' href="https://avtoticket.uz/">{t("bus")}</a>
                        <a className='hover:underline' href="https://e-visa.gov.uz/main">{t("evisa")}</a>
                        <a className='hover:underline' href="http://emehmon.uz/user/login">{t("regist")}</a>
                    </div>
                </div>
                <div className="about w-[30%] flex flex-col gap-3 max-md:w-full">
                    <h1 className='text-2xl font-semibold'>{t("contacts")}</h1>
                    <div className="info flex flex-col gap-1">
                        <a href='https://goo.gl/maps/K641jinTvtPexthq8' className=' flex items-center hover:underline'><MdLocationPin/>{t("addres")}</a>
                        <a href='tel:+998993333232' className=' flex items-center hover:underline'><FaPhoneAlt/>+99899 333-32-32, +99899 444-32-32</a>
                        <a href='mailto:info@opts.tours' className=' flex items-center hover:underline'><HiMail/>info@opts.tours</a>
                    </div>
                </div>
            </div>
            <div className="bot h-16 flex items-center justify-between text-white before:absolute before:left-0 before:z-[-1] before:bg-[#1EB8D4] before:w-full before:h-16">
                <p className=' max-md:text-sm'>COPYRIGHT ?? 2023 - OMEGA PREMIER TRAVEL SERVIS</p>
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