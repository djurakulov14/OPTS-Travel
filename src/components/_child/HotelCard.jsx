import React from 'react'
import { Rating } from '@mui/material'
import { useRouter } from 'next/router'

const HotelCard = ({title, stars, link, img, locationEn, location, swiper, locale}) => {
  const router = useRouter()
  return (
    <div onClick={() => router.push(link)} className={` cursor-pointer ${ swiper ? "w-full" : "w-[30%]" } h-[300px] max-lg:w-[300px] max-lg:h-[200px] max-sm:w-full rounded-2xl text-center relative z-10 flex flex-col items-center justify-end p-10 pb-5 before:absolute before:left-0 before:w-full before:h-full before:top-0 before:bg-[rgba(0,0,0,0.23)] before:z-[-1] overflow-hidden bg-no-repeat`} style={{background: `url(${img})`,backgroundSize: "cover",backgroundPosition: "center", objectFit: "cover"}} >
        <h1 className=' text-3xl font-bold text-white max-md:text-xl'>{title}</h1>
        <Rating name="disabled" value={stars} readOnly />
        <h2 className=' text-lg font-semibold text-gray-200 max-md:text-base'>{locale === "ru" ? location : locationEn}</h2>
    </div>
  )
}

export default HotelCard