import React from 'react'
import MyButton from './_child/MyButton'

const Video = () => {
  return (
    <div className=' flex flex-col gap-4 items-center justify-center mt-7 h-[600px] w-full mb-24'>
      <div className="forvid w-screen h-[600px] absolute z-[-1] left-0 bg-center overflow-hidden">
        <video autoPlay muted className="bg w-screen bg-center">
          <source  src='https://samcity.uz/images/video.mp4' type='video/mp4'/>
        </video>
      </div>
      <h1 className='title text-white'>Получите скидку 10% на ваше следующее путешествие</h1>
      <MyButton>Подробнее</MyButton>
    </div>
  )
}

export default Video
