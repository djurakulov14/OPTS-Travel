import React from 'react'
import Image from 'next/image'
import MyButton from './MyButton'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

const TourCard = ({title, duration, price}) => {

  const {t} = useTranslation("more")

  const router = useRouter()

  function Push() {
    router.push('/tour/id=1')
  }
  return (
    <div className=' w-[300px] rounded-xl overflow-hidden shadow-lg'>
        <Image src="/images/historic.png" width={999} height={100}  alt='image'/>
        <div className="info p-3">
            <h1 className=' text-xl font-bold'>{title}</h1>
            <p>{duration}</p>
            <p>Lorem ipsum dolor sit amet.</p>
            <h2 className='text-xl font-bold mb-3'>{price}$</h2>
            <MyButton onClick={Push}>{t("more")}</MyButton>
        </div>
    </div>
  )
}

export default TourCard