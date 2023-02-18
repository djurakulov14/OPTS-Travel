import Image from 'next/image'
import React from 'react'
import MyButton from './MyButton'

const TourCard = () => {
  return (
    <div className=' w-[300px] rounded-xl overflow-hidden shadow-lg'>
        <Image src="/images/historic.png" width={999} height={100}  alt='image'/>
        <div className="info p-3">
            <h1 className=' text-xl font-bold'>Тур по Ташкенту</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor natus quam. . .</p>
            <h2 className='text-xl font-bold mb-3'>1200$</h2>
            <MyButton>Подробнее</MyButton>
        </div>
    </div>
  )
}

export default TourCard