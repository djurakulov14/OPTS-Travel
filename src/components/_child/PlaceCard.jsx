import React from 'react'

export const PlaceCard = ({title, img}) => {
  console.log(img);
  return (
    <div>
        <div className='w-[420px] h-[300px] max-lg:w-[300px] max-lg:h-[200px] rounded-2xl relative z-10 flex flex-col items-center justify-end p-10 before:absolute before:left-0 before:w-full before:h-full before:top-0 before:bg-[rgba(0,0,0,0.23)] before:z-[-1] overflow-hidden' style={{backgroundImage: `url(${img})`,backgroundSize: "cover",backgroundPosition: "center"}} >
            <h1 className=' text-3xl font-bold text-white max-md:text-xl text-center'>{title}</h1>
        </div>
    </div>
  )
}
