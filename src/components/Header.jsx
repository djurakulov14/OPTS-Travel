import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Menu from './_child/Menu'
import axios from 'axios'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'



const Header = () => {
  const [open, setOpen] = useState({cities: false, hotels: false})
  const hotelsOfCities = [
    {
        id:1,
        title: "Отели в Самарканде",
        link: "/hotel/id=1",
    },
    {
        id:2,
        title: "Отели в Бухаре",
        link: "/hotel/id=2",
    },
    {
        id:3,
        title: "Отели в Хиве",
        link: "/hotel/id=3",
    },
    {
        id:5,
        title: "Отели в Ташкенте",
        link: "/hotel/id=5",
    },
    {
        id:6,
        title: "Отели в Коканд",
        link: "/hotel/id=6",
    },
    {
        id:7,
        title: "Отели в Намангане",
        link: "/hotel/id=7",
    }
]

const cities = [
  {
      id:1,
      title: "Самарканд",
      link: "/cityPage/id=1",
  },
  {
      id:2,
      title: "Бухара",
      link: "/cityPage/id=2",
  },
  {
      id:3,
      title: "Хива",
      link: "/cityPage/id=3",
  },
  {
      id:5,
      title: "Ташкент",
      link: "/cityPage/id=5",
  },
  {
      id:6,
      title: "Коканд",
      link: "/cityPage/id=6",
  },
  {
      id:7,
      title: "Наманган",
      link: "/cityPage/id=7",
  }
]


  const style = open.cities ? {display: "block"} : {display: "none"}
  const style2 = open.hotels ? {display: "block"} : {display: "none"}

  const {t, i18n} = useTranslation("header")
  const lng = i18n.language
  const router = useRouter()

  return (
    <header className='flex justify-between items-center'>
      <div className="logo"><Image src="/icons/logo.png" alt='image' width={220} height={50}/></div>
      <nav className=' flex gap-4'>
        <Link href='/' className='hover:underline'>{t("main")}</Link>
        <div className="link"  onMouseLeave={() => setOpen({...open, cities: false})}>
          <Link href='/cityPage' className='hover:underline' onMouseEnter={() => setOpen({...open, cities: true})}>{t("cities")}</Link>
          <div className=' bg-slate-50 p-3 rounded-xl rounded-tl-none	absolute z-10' style={style}>
            <ul>
                {
                  cities.map(item =>
                    <li key={item.id} className=" h-4 py-4 flex items-center justify-left">
                      <Link href={item.link} className='hover:underline text-black'>{item.title}</Link>
                    </li>
                  )
                }
            </ul>
          </div>
        </div>
        <div className="link"  onMouseLeave={() => setOpen({...open, hotels: false})}>
          <Link href='/hotel' className='hover:underline' onMouseEnter={() => setOpen({...open, hotels: true})}>{t("hotels")}</Link>
          <div className=' bg-slate-50 p-3 rounded-xl rounded-tl-none	absolute z-10' style={style2}>
            <ul>
                {
                  hotelsOfCities.map(item =>
                    <li key={item.id} className=" h-4 py-4 flex items-center justify-left">
                      <Link href={item.link} className='hover:underline text-black'>{item.title}</Link>
                    </li>
                  )
                }
            </ul>
          </div>
        </div>
        <Link href='/tour' className='hover:underline'>{t("tours")}</Link>
        <Link href='/aboutUs' className='hover:underline'>{t("about")}</Link>
        <Link href='/contacts' className='hover:underline'>{t("contact")}</Link>
      </nav>
      <Link href={router.asPath} locale={lng === 'ru' ? "en" : "ru"}>
        <div className="flex items-center hover:cursor-pointer">
          <Image src="/icons/russia.svg" width={35} height={35} alt='image'/>
          <p>RU</p>
        </div>
      </Link>
    </header>
  )
}

export default Header

