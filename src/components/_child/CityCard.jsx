import React from 'react'

const CityCard = ({title, subTitle}) => {
  return (
    <div className='w-[420px] h-[300px] rounded-2xl relative z-10 flex flex-col max-md:w-[300px] max-md:h-[200px] items-center justify-end p-10 before:absolute before:left-0 before:w-full before:h-full before:top-0 before:bg-[rgba(0,0,0,0.23)] before:z-[-1] overflow-hidden' style={{background: "url(/images/historic.png)",backgroundSize: "cover",backgroundPosition: "center"}} >
        <h1 className=' text-3xl font-bold text-white'>{title}</h1>
        <h2 className=' text-lg font-semibold text-gray-400'>{subTitle}</h2>
    </div>
  )
}

export default CityCard