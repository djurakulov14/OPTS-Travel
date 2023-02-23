import React from 'react'
import Footer from '@/components/Footer'
import {BsArrowUpCircle} from 'react-icons/bs'

const Layout = ({children}) => {

  const scrollTop = () => {
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  };

  return (
    <div className='cont'>
        {children}
        <Footer/>
        <BsArrowUpCircle size={40} onClick={scrollTop} className=' cursor-pointer text-[#1EB8D4] fixed z-20 bottom-[8%] right-[2%]'/>
    </div>
  )
}

export default Layout