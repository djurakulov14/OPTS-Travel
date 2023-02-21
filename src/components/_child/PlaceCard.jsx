import React from 'react'

export const PlaceCard = ({title}) => {
  return (
    <div>
        <div className='w-[420px] h-[300px] rounded-2xl relative z-10 flex flex-col items-center justify-end p-10 before:absolute before:left-0 before:w-full before:h-full before:top-0 before:bg-[rgba(0,0,0,0.23)] before:z-[-1] overflow-hidden' style={{background: "url(/images/historic.png)",backgroundSize: "cover",backgroundPosition: "center"}} >
            <h1 className=' text-3xl font-bold text-white'>{title}</h1>
        </div>
    </div>
  )
}
