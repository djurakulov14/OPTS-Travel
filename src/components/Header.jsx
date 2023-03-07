import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import { IoMenu } from 'react-icons/io5';
import { CSSTransition } from 'react-transition-group'




const Header = () => {
  const [open, setOpen] = useState({cities: false, hotels: false, menu: false})
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
  const style3 = open.menu ? {display: "block"} : {display: "none"}

  const {t, i18n} = useTranslation("header")
  const lng = i18n.language
  const router = useRouter()

  return (
    <header className='flex justify-between items-center'>
      <div className="logo cursor-pointer" onClick={() => router.push('/')}><Image src="/icons/logo.png" alt='image' width={220} height={50} className=' max-lg:w-44'/></div>
      <nav className=' flex gap-4 max-lg:hidden'>
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
      <div className=" flex items-center gap-5" >
        <div className=" hidden max-lg:block" onClick={() => setOpen({...open, menu: !open.menu})}>
          <div>
            <IoMenu size={25}/>
          </div>
          <CSSTransition
            in={open.menu}
            timeout={400}
            classNames="list-transition"
            unmountOnExit
            appear>
          <div className=' bg-slate-50 p-3 absolute w-full left-0 z-10' style={style3}  >
            <ul>
                <li><Link href='/' className=' text-black hover:underline'>{t("main")}</Link></li>
                <li><Link href='/cityPage' className='text-black hover:underline' >{t("cities")}</Link></li>
                <li><Link href='/hotel' className=' text-black hover:underline'>{t("hotels")}</Link></li>
                <li><Link href='/tour' className='text-black hover:underline'>{t("tours")}</Link></li>
                <li><Link href='/aboutUs' className=' text-black hover:underline'>{t("about")}</Link></li>
                <li><Link href='/contacts' className=' text-black hover:underline'>{t("contact")}</Link></li>
            </ul>
          </div>
          </CSSTransition>
        </div>
        <Link href={router.asPath} locale={lng === 'ru' ? "en" : "ru"}>
          <div className="flex items-center gap-1 hover:cursor-pointer">
            <Image src={lng === 'ru' ? "/icons/ru.png" : "/icons/uk.png"} width={30} height={30} alt='image' className=' max-lg:w-[20px]'/>
            <p>{lng === 'ru' ? "РУ" : "EN"}</p>
          </div>
        </Link>
      </div>
    </header>
  )
}

export default Header

