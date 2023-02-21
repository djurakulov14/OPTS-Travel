import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

const Layout = ({children}) => {
  return (
    <div className='cont'>
        {children}
        <Footer/>
    </div>
  )
}

export default Layout