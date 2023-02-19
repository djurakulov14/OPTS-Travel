import Footer from '@/components/Footer'
import TopSection from '@/components/TopSection'
import CityCard from '@/components/_child/CityCard'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const City = () => {
  const router = useRouter()
  return (
    <div className='cont'>
        <TopSection isSwiper={false} title={"Города Узбекистана"} dsc={"Все исторические города солнечного Узбекистана"}/>
        <div className="content flex flex-wrap justify-between gap-8 relative -top-52">
          <Link href="/cityPage/city=samarkand"><CityCard/></Link>
          <Link href="/"><CityCard/></Link>
          <Link href="/"><CityCard/></Link>
          <Link href="/"><CityCard/></Link>
          <Link href="/"><CityCard/></Link>
          <Link href="/"><CityCard/></Link> 
        </div>
        <Footer/>
    </div>
  )
}

export default City