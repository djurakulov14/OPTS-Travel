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
    },
    {
      id:2,
      title: "Каменная Летопись Веков",
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis quo rerum cumque ut earum corrupti eius nam laborum dolorum nemo!",
      price: 1200,
    },
    {
      id:3,
      title: "Каменная Летопись Веков",
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis quo rerum cumque ut earum corrupti eius nam laborum dolorum nemo!",
      price: 1200,
    },
    {
      id:4,
      title: "Каменная Летопись Веков",
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis quo rerum cumque ut earum corrupti eius nam laborum dolorum nemo!",
      price: 1200,
    },
    {
      id:5,
      title: "Каменная Летопись Веков",
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis quo rerum cumque ut earum corrupti eius nam laborum dolorum nemo!",
      price: 1200,
    },
    {
      id:5,
      title: "Каменная Летопись Веков",
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis quo rerum cumque ut earum corrupti eius nam laborum dolorum nemo!",
      price: 1200,
    },
    {
      id:5,
      title: "Каменная Летопись Веков",
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis quo rerum cumque ut earum corrupti eius nam laborum dolorum nemo!",
      price: 1200,
    },
    {
      id:5,
      title: "Каменная Летопись Веков",
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis quo rerum cumque ut earum corrupti eius nam laborum dolorum nemo!",
      price: 1200,
    }
  ]
  return (
    <Layout>
        <TopSection isSwiper={false} title={"Туры"} dsc={"Все туры нашей компании"}/>
        <div className="content flex flex-wrap justify-between gap-8 relative -top-52">
            {
              arr.map(item => <TourCard/>)
            }
        </div>
    </Layout>
  )
}

export default Tours