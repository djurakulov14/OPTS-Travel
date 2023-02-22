import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Menu from './_child/Menu'
import axios from 'axios'



const Header = () => {
  const [open, setOpen] = useState({cities: false, hotels: false})
  const [arr, setArr] = useState([])
  const [cities, setCities] = useState([])
  useEffect(() => {
    axios.get("https://opts-travel.netlify.app/api/city")
      .then(res => setArr(res.data))
    axios.get("https://opts-travel.netlify.app/api/hotelsOfCity")
      .then(res => setCities(res.data))
  }, [])
  const style = open.cities ? {display: "block"} : {display: "none"}
  const style2 = open.hotels ? {display: "block"} : {display: "none"}

  return (
    <header className='flex justify-between items-center'>
      <div className="logo"><Image src="/icons/logo.png" alt='image' width={220} height={50}/></div>
      <nav className=' flex gap-4'>
        <Link href='/' className='hover:underline'>Главная</Link>
        <div className="link"  onMouseLeave={() => setOpen({...open, cities: false})}>
          <Link href='/cityPage' className='hover:underline' onMouseEnter={() => setOpen({...open, cities: true})}>Города Узбекистана</Link>
          <div className=' bg-slate-50 p-3 rounded-xl rounded-tl-none	absolute z-10' style={style}>
            <ul>
                {
                  arr.map(item =>
                    <li key={item.id} className=" h-4 py-4 flex items-center justify-left">
                      <Link href={item.link} className='hover:underline text-black'>{item.title}</Link>
                    </li>
                  )
                }
            </ul>
          </div>
        </div>
        <div className="link"  onMouseLeave={() => setOpen({...open, hotels: false})}>
          <Link href='/hotel' className='hover:underline' onMouseEnter={() => setOpen({...open, hotels: true})}>Отели</Link>
          <div className=' bg-slate-50 p-3 rounded-xl rounded-tl-none	absolute z-10' style={style2}>
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
        <Link href='/' className='hover:underline'>Туры</Link>
        <Link href='/' className='hover:underline'>О нас</Link>
        <Link href='/' className='hover:underline'>Контакты</Link>
      </nav>
      <div className="flex items-center hover:cursor-pointer">
        <Image src="/icons/russia.svg" width={35} height={35} alt='image'/>
        <p>RU</p>
      </div>
    </header>
  )
}

export default Header

