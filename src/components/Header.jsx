import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='flex justify-between items-center'>
        <div className="logo"><Image src="/icons/logo.png" width={220} height={50}/></div>
        <nav className=' flex gap-4'>
            <Link href='/' className='hover:underline'>Главная</Link>
            <Link href='/' className='hover:underline'>Города Узбекистана</Link>
            <Link href='/' className='hover:underline'>Отели</Link>
            <Link href='/' className='hover:underline'>Туры</Link>
            <Link href='/' className='hover:underline'>О нас</Link>
            <Link href='/' className='hover:underline'>Контакты</Link>
        </nav>
        <div className="flex items-center hover:cursor-pointer">
            <Image src="/icons/russia.svg" width={35} height={35}/>
            <p>RU</p>
        </div>
    </header>
  )
}

export default Header