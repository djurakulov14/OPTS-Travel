import React from 'react'
import MyButton from './_child/MyButton'
import { useTranslation } from 'next-i18next'

const Video = () => {

  const {t} = useTranslation("main")

  return (
    <div className=' flex flex-col gap-4 items-center justify-center mt-7 h-[600px] max-md:h-[400px] w-full mb-24 max-lg:mb-6 text-center max-[560px]:h-[300px] max-[400px]:h-[250px]'>
      <div className="forvid w-screen h-[600px] max-md:h-[400px] absolute z-[-1] left-0 bg-center overflow-hidden max-[560px]:h-[300px] max-[400px]:h-[250px]">
        <video autoPlay muted className="bg w-screen bg-center">
          <source  src='https://samcity.uz/images/video.mp4' type='video/mp4'/>
        </video>
      </div>
      <h1 className='title text-white max-sm:text-2xl'>{t("sale")}</h1>
      <MyButton>{t("more")}</MyButton>
    </div>
  )
}

export default Video
