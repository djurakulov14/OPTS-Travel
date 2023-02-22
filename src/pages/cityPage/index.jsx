import React from 'react'
import Layout from '@/Layout/Layout'
import TopSection from '@/components/TopSection'
import CityCard from '@/components/_child/CityCard'
import Link from 'next/link'
import { useRouter } from 'next/router'

export async function getStaticProps() {
  const res = await fetch("https://opts-travel.netlify.app/api/city")
  const data = await res.json()

  return {
    props: {
      city: data
    }, // will be passed to the page component as props
  }
}

const City = ({city}) => {
  const router = useRouter()
  return (
    <Layout>
      <TopSection isSwiper={false} title={"Города Узбекистана"} dsc={"Все исторические города солнечного Узбекистана"}/>
      <div className="content flex flex-wrap justify-between gap-8 relative -top-52">
        {
          city.map(item => <Link key={item.id} href={item.link}><CityCard {...item}/></Link>)
        }
      </div>
    </Layout>
  )
}

export default City