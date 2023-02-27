import React from 'react'
import Layout from '@/Layout/Layout'
import TourCard from '@/components/_child/TourCard'
import TopSection from '@/components/TopSection'

const Tours = () => {
  const arr = [
    {
      id:1,
      title: "Каменная Летопись Веков",
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis quo rerum cumque ut earum corrupti eius nam laborum dolorum nemo!",
      price: 1200,
      duration: "4 дней/3 ночей"
    },
    {
      id:2,
      title: "Каменная Летопись Веков",
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis quo rerum cumque ut earum corrupti eius nam laborum dolorum nemo!",
      price: 1200,
      duration: "5 дней/4 ночей"
    },
    {
      id:3,
      title: "Каменная Летопись Веков",
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis quo rerum cumque ut earum corrupti eius nam laborum dolorum nemo!",
      price: 1200,
      duration: "4 дней/3 ночей"
    },
    {
      id:4,
      title: "Каменная Летопись Веков",
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis quo rerum cumque ut earum corrupti eius nam laborum dolorum nemo!",
      price: 1200,
      duration: "7 дней/6 ночей"
    },
    {
      id:5,
      title: "Каменная Летопись Веков",
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis quo rerum cumque ut earum corrupti eius nam laborum dolorum nemo!",
      price: 1200,
      duration: "4 дней/3 ночей"
    },
    {
      id:6,
      title: "Каменная Летопись Веков",
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis quo rerum cumque ut earum corrupti eius nam laborum dolorum nemo!",
      price: 1200,
      duration: "12 дней/11 ночей"
    },
    {
      id:8,
      title: "Каменная Летопись Веков",
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis quo rerum cumque ut earum corrupti eius nam laborum dolorum nemo!",
      price: 1200,
      duration: "4 дней/3 ночей"
    },
    {
      id:9,
      title: "Каменная Летопись Веков",
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis quo rerum cumque ut earum corrupti eius nam laborum dolorum nemo!",
      price: 1200,
      duration: "9 дней/8 ночей"
    }
  ]
  return (
    <Layout>
        <TopSection isSwiper={false} title={"Туры"} dsc={"Все туры нашей компании"}/>
        <div className="content flex flex-wrap justify-between gap-8 relative -top-52">
            {
              arr.map(item => <TourCard key={item.id} {...item}/>)
            }
        </div>
    </Layout>
  )
}

export default Tours