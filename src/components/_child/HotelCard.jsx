import { Rating } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'

const HotelCard = ({title, stars, link, img, location}) => {
  const router = useRouter()
  return (
    <div onClick={() => router.push(link)} className=' cursor-pointer w-[420px] h-[300px] rounded-2xl relative z-10 flex flex-col items-center justify-end p-10 pb-5 before:absolute before:left-0 before:w-full before:h-full before:top-0 before:bg-[rgba(0,0,0,0.23)] before:z-[-1] overflow-hidden bg-no-repeat' style={{background: `url(${img})`,backgroundSize: "cover",backgroundPosition: "center", objectFit: "cover"}} >
        <h1 className=' text-3xl font-bold text-white'>{title}</h1>
        <Rating name="disabled" value={stars} readOnly />
        <h2 className=' text-lg font-semibold text-gray-200'>{location}</h2>
    </div>
  )
}

export default HotelCard