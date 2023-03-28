import React from 'react'
import { Oval } from 'react-loader-spinner'

const Preloader = () => {
  return (
    <div className=' w-screen h-screen fixed overflow-hidden z-50 inset-0 bg-white flex items-center justify-center'>
         <Oval
            ariaLabel="loading-indicator"
            height={100}
            width={100}
            strokeWidth={5}
            strokeWidthSecondary={5}
            color="#00AFD7"
            secondaryColor="#00AF66"
            />
    </div>
  )
}

export default Preloader