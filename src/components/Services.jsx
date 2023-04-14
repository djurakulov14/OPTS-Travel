import React from 'react'
import Image from "next/image"
import { useTranslation } from 'next-i18next'

const Services = () => {

    const {t} = useTranslation("expirience")

  return (
    <div className='flex gap-7 flex-col h-fit max-lg:w-full -mt-5 max-lg:gap-8 before:absolute before:left-0 before:w-full before:h-[105%] max-2xl:before:h-[95%] max-xl:before:h-[80%] max-lg:before:h-[70%] max-md:before:h-[110%] max-sm:before:h-[135%] max-[400px]:before:h-[225%] before:bg-[#00AFD7] before:z-[-1]'>
        <div className="absolute left-0 w-full h-full bg-[#00AFD7] z-[-1]"></div>
        <div className="first flex justify-between w-full text-white pt-10 items-start relative max-md:flex-col max-lg:w-full max-lg:items-start ">
            <Image src="/images/exp.jpeg" width={500} height={300} alt='image' className="rounded-3xl max-xl:w-96 max-lg:w-72 max-md:w-full"/>
            <div className="info w-2/4 gap-2 text-right max-md:w-full max-md:text-left">
                <h1 className=' text-6xl font-semibold max-xl:text-3xl'>{t("expTitle")}</h1>
                <p className=' text-xl max-xl:text-lg max-xl:w-full'>{t("exp")}</p>
            </div>
        </div>
        <div className="first flex justify-between w-full text-white items-end relative max-md:flex-col-reverse -top-[150px] max-xl:-top-[70px] max-lg:-top-[25px]  max-lg:w-full max-lg:items-start  max-md:top-0">
            <div className="info flex flex-col gap-4 max-lg:gap-2">
                <h1 className=' text-6xl font-semibold max-xl:text-3xl'>{t("approachTitle")}</h1>
                <p className='w-2/4 text-xl max-xl:w-4/5 max-xl:text-lg max-lg:w-full'>{t("approach")}</p>
            </div>
            <Image src="/images/indivigual.jpg" width={500} height={300} alt='image' className='rounded-3xl max-xl:w-96 max-lg:w-72 max-md:w-full'/>
        </div>
        <div className="first flex justify-between w-full pb-10 text-white relative max-md:flex-col -top-[150px] max-xl:-top-[70px] max-lg:-top-[25px] items-center max-lg:w-full max-lg:items-start max-md:top-0">
            <Image src="/images/bus.avif" width={500} height={300} alt='image' className=' rounded-3xl max-xl:w-96 max-lg:w-72 max-md:w-full'/>
            <div className="info flex flex-col gap-4 w-[605px] text-right max-lg:gap-2 max-md:text-left max-md:w-fit">
                <h1 className=' text-6xl font-semibold max-xl:text-3xl'>{t("transportTitle")}</h1>
                <p className=' text-xl max-xl:w-4/5 max-xl:text-lg max-lg:w-full'>{t("trnasport")}</p>
            </div>
        </div>
    </div>
  )
}
// before:absolute before:left-0 before:w-full before:h-[105%] before:bg-[#00AFD7] before:z-[-1]
export default Services