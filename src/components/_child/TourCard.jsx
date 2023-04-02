import React from 'react'
import Image from "next/image"
import MyButton from './MyButton'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

const TourCard = ({id, title, duration, price, cities, img}) => {

  const {t} = useTranslation("main")

  const router = useRouter()

  function Push() {
    router.push('/tour/id=' + id)
  }
  return (
    <div className=' w-[300px] rounded-xl h-fit overflow-hidden bg-white shadow-lg max-sm:w-[100%]'>
        <Image src={img} width={999} height={176}  alt='image' className='w-full h-44 '/>
        <div className="info p-3 flex flex-col justify-end">
            <h1 className=' text-xl font-bold h-14'>{title}</h1>
            <p>{duration} {t("days")}/{duration - 1} {t("nights")}</p>
            <p>{cities}</p>
            <h2 className='text-xl font-bold mb-3'>{price}$</h2>
            <MyButton onClick={Push}>{t("more")}</MyButton>
        </div>
    </div>
  )
}

export default TourCard