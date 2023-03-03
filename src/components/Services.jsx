import React from 'react'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'

const Services = () => {

    const {t} = useTranslation("expirience")

  return (
    <div className='flex justify-between max-lg:flex-col max-lg:w-full mt-5 mb-14'>
        <div className="first flex gap-2 items-center w-2/6 max-lg:w-full">
            <Image src="/icons/bus.png" width={70} height={70} alt='image' className=' w-8'/>
            <div className="info">
                <h1 className=' text-xl font-semibold'>{t("transportTitle")}</h1>
                <p>{t("trnasport")}</p>
            </div>
        </div>
        <div className="first flex gap-2 items-center w-2/6 max-lg:w-full">
            <Image src="/icons/team.png" width={70} height={70} alt='image' className=' w-10'/>
            <div className="info">
                <h1 className=' text-xl font-semibold'>{t("approachTitle")}</h1>
                <p>{t("approach")}</p>
            </div>
        </div>
        <div className="first flex gap-2 items-center w-2/6 max-lg:w-full">
            <Image src="/icons/stars.png" width={70} height={70} alt='image' className=' w-10'/>
            <div className="info">
                <h1 className=' text-xl font-semibold'>{t("expTitle")}</h1>
                <p>{t("exp")}</p>
            </div>
        </div>
    </div>
  )
}

export default Services