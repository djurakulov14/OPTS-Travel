import { Rating } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'

const HotelCard = () => {
  const router = useRouter()
  return (
    <div onClick={() => router.push("https://www.movenpick.com/")} className=' cursor-pointer w-[420px] h-[300px] rounded-2xl relative z-10 flex flex-col items-center justify-end p-10 pb-5 before:absolute before:left-0 before:w-full before:h-full before:top-0 before:bg-[rgba(0,0,0,0.23)] before:z-[-1] overflow-hidden' style={{background: "url(/images/historic.png)",backgroundSize: "cover",backgroundPosition: "center"}} >
        <h1 className=' text-3xl font-bold text-white'>Movenpick</h1>
        <Rating name="disabled" value={5} readOnly />
        <h2 className=' text-lg font-semibold text-gray-200'>Отель в Самарканде</h2>
    </div>
  )
}

export default HotelCard