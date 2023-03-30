import Layout from '@/Layout/Layout'
import TopSection from '@/components/TopSection'
import Accordionn from '@/components/_child/Accordionn'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material'
import React, { useState } from 'react'
import ReactStars from 'react-stars'
import { RxCrossCircled } from 'react-icons/rx';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Head from 'next/head'
import CardsSection from '@/components/CardsSection'



export async function getServerSideProps(context) {
  const res = await fetch("https://opts-travel.netlify.app/api/tours")
  const data = await res.json()
  const param = await context.params.tour.split('=').at(-1)

  const filtered = await data.filter(item => item.id === +param)

  return {
    props: {
      data: filtered,
      all: data,
      ...(await serverSideTranslations(context.locale, ["header", "footer", "main"])),
    }, // will be passed to the page component as props
  }
}

const TourPage = ({data, all}) => {

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const submitForm = (e) => {
      e.preventDefault()

      let data = {}
  
      let fm = new FormData(e.target)
  
      fm.forEach((value, key) => {
        data[key] = value
      })

      fetch("https://opts-travel.netlify.app/api/buyTour", {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json", Accept: "application/json" },
        }).then(res => {
        if (res.status !== 200){ 
            console.log("error")
        } else {
          console.log("Сообщение отправлено")
            e.target.reset()
        }
      })
  
      
  }
  let slides = 4
  let pageWidth = 0

  if (typeof window !== "undefined") {
    var width = window.innerWidth;
    pageWidth = width
    if(pageWidth <= 640){
     slides = 1
    } else if(pageWidth <= 1024){
     slides = 2
    } else if(pageWidth <= 1280){
     slides = 3
    }
 }

  const {t} = useTranslation("main")


  data = data[0]

  all = all.filter(item => item.id !== data.id)

  return (
<>
    <Head>
      <title>OPTS - Tour</title>
      <link rel="icon" href="/icons/favicon.ico" />
    </Head>
    <Layout>
        <TopSection isSwiper={false} title={data.title} dsc={data.cities} img={data.img} dsc2={`${data.duration} ${t("days")}/${data.duration + 1} ${t("nights")}`}/>
        <div className="content">
          <div className=" flex w-full justify-between max-md:flex-col gap-5">
            <div className="way w-[50%]">
                <div className="acc mb-20 w-full">
                    <h1 className='title mb-3'>{t("route")}:</h1>
                    <Accordionn data={data}/>
                </div>
            <div className="incuded mb-20 w-fit">
                <h1 className='title'>{t("include")}/{t("notInclude")}</h1>
                    <div className="inc mb-7">
                        <h1 className=' text-lg font-semibold'>{t("include")}:</h1>
                        <ul>
                            <li>{t("ras")}</li>
                            <li>{t("pit")}</li>
                            <li>{t("air")}</li>
                            <li>{t("meets")}</li>
                            <li>{t("loc")}</li>
                            <li>{t("ex")}</li>
                            <li>{t("mood")}</li>
                        </ul>
                    </div>

                <div className="uninc">
                    <h1 className=' text-lg font-semibold'>{t("notInclude")}:</h1>
                    <ul>
                        <li>{t("unticket")}</li>
                        <li>{t("unpit")}</li>
                        <li>{t("ent")}</li>
                        <li>{t("fee")}</li>
                        <li>{t("tip")}</li>
                        <li>{t("expan")}</li>
                        <li>{t("other")}</li>
                    </ul>
                </div>
            </div>
            </div>
              <div className="price sticky top-[20px] z-10 bg-[#00AFD7] w-[40%] max-md:w-full mb-20 h-fit text-white p-3 rounded-lg flex flex-col justify-between gap-5">
                    <div className="prices">
                        <h1 className='text-lg font-semibold'>{t("price")}:</h1>
                        <table className=' border-solid border-2 p-4 w-full rounded-xl'>
                            <tr className='text-center'>
                                <th className='border-solid border-2'>{t("person")}:</th>
                                <th className='border-solid border-2'><ReactStars count={3} value={3} edit={false} className='flex justify-center'/></th>
                                <th className='border-solid border-2'><ReactStars count={4} value={4} edit={false} className='flex justify-center'/></th>
                            </tr>
                            <tr className='text-center'>
                                <td className='border-solid border-2'>1</td>
                                <td className='border-solid border-2'>{data.price + 150}$</td>
                                <td className='border-solid border-2'>+150$</td>
                            </tr>
                            <tr className='text-center'>
                                <td className='border-solid border-2'>2</td>
                                <td className='border-solid border-2'>{data.price}$</td>
                                <td className='border-solid border-2'>+120$</td>
                            </tr>
                        </table>
                        <p className=' text-base leading-5'>{t("morePeople")}</p>
                    </div>
                    <button onClick={handleClickOpen} className=' border-[#00AFD7] border-solid border-2 bg-white text-[#00AFD7] w-full py-2 rounded-xl'>{t("book")}</button>
                </div>
          </div>
            <div className="dsc mb-20">
                <h1 className='title'>{t("dsc")}:</h1>
                <p className=' w-1/2 max-md:w-full'>Программы пребывания 1-го и последнего дня на маршруте зависят от времени прибытия к месту начала тура и времени вылета из конечного пункта, поэтому могут меняться. В программе маршрута указаны только завтраки, поскольку они входят в стоимость проживания в гостиницах. Время и место обедов/ужинов можно обсудить с гидами. После того, как вы окончательно приняли решение в выборе тура и направили в наш адрес заявку, мы подробно распишем вам программу маршрута (конкретные даты, тайминг и т.п.) и рассчитаем стоимость такового. По желанию заказчика, в свободное от основных экскурсионных программ время, мы можем предложить дополнительные экскурсии или объекты посещения.</p>
            </div>
            <CardsSection title="Другие туры" arr={all} slides={slides}  />
        </div>
        <Dialog open={open} onClose={handleClose}>
        <DialogTitle className='flex justify-between'><span>{t("bookingTour")} "{data.title}"</span>
        <RxCrossCircled onClick={handleClose} className=' cursor-pointer'/>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
          {t("operator")}
          </DialogContentText>
          <form onSubmit={submitForm}>
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email"
            type="email"
            fullWidth
            variant="outlined"
            required
            name='email'
          />
            <TextField
            margin="dense"
            id="name"
            label={t("name")}
            type="text"
            fullWidth
            variant="outlined"
            required
            name='name'
          />
            <TextField
            margin="dense"
            id="phone"
            label={t("phone")}
            type="tel"
            fullWidth
            variant="outlined"
            required
            name='phone'
          />
            <DialogActions>
              <Button onClick={handleClose}>{t("cancel")}</Button>
              <Button type='submit' onClick={handleClose}>{t("book")}</Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </Layout>
</>
  )
}

export default TourPage