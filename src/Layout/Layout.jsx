import React, { useEffect, useState } from 'react'
import Footer from '@/components/Footer'
import {BsArrowUpCircle} from 'react-icons/bs'

const Layout = ({children}) => {
  const [show, setShow] = useState(false);

  const scrollTop = () => {
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.onscroll = function () {
      let scrollBar = window.pageYOffset;
      if (scrollBar >= 500) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
  }, []);
  

  return (
    <div className='cont max-[660px]:px-6'>
        {children}
        <Footer/>
        <BsArrowUpCircle style={show ? {display: "block"} : {display: "none"}} size={40} onClick={scrollTop} className=' delay-200 cursor-pointer text-[#1EB8D4] fixed z-20 bottom-[8%] right-[2%]'/>
    </div>
  )
}

export default Layout