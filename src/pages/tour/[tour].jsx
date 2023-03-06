import Layout from '@/Layout/Layout'
import TopSection from '@/components/TopSection'
import Accordionn from '@/components/_child/Accordionn'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material'
import React, { useState } from 'react'
import ReactStars from 'react-stars'
import { RxCrossCircled } from 'react-icons/rx';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'


export async function getServerSideProps({locale}) {


  return {
    props: {
      ...(await serverSideTranslations(locale, ["header", "footer", "main"])),
    }, // will be passed to the page component as props
  }
}

const TourPage = () => {

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
        }).then((res) => {
            if (!res.ok){ 
                alert("error")
            } else {
              alert("Сообщение отправлено")
                e.target.name.value = ""
                e.target.email.value = ""
                e.target.phone.value = ""
            }
            return res.json();
          });
  
      
  }

  const {t} = useTranslation("main")

  return (
    <Layout>
        <TopSection isSwiper={false} title={"Тур по Узбекистану"} dsc={"Ташкент-Самарканд-Бухара-Шахрисабс-Ургенч"} dsc2={`8 ${t("days")}/9 ${t("nights")}`}/>

        <div className="content">
          <div className=" flex justify-between max-md:flex-col">
            <div className="way ">
                <div className="acc mb-20">
                    <h1 className='title mb-3'>{t("route")}:</h1>
                    <Accordionn/>
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
              <div className="price sticky top-[20px] z-50 bg-[#1EB8D4] w-[40%] max-md:w-full mb-20 h-fit text-white p-3 rounded-lg flex flex-col justify-between gap-5">
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
                                <td className='border-solid border-2'>660$</td>
                                <td className='border-solid border-2'>+150$</td>
                            </tr>
                            <tr className='text-center'>
                                <td className='border-solid border-2'>2</td>
                                <td className='border-solid border-2'>600$</td>
                                <td className='border-solid border-2'>+120$</td>
                            </tr>
                        </table>
                        <p className=' text-base leading-5'>{t("morePeople")}</p>
                    </div>
                    <button onClick={handleClickOpen} className=' border-[#1EB8D4] border-solid border-2 bg-white text-[#1EB8D4] w-full py-2 rounded-xl'>{t("book")}</button>
                </div>
          </div>
            <div className="dsc mb-20">
                <h1 className='title'>{t("dsc")}:</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis officiis ea ut dicta, autem aliquam assumenda quis voluptas tenetur pariatur deleniti molestias hic quia nam blanditiis at eveniet possimus illo rerum eligendi, dolores repellat debitis repudiandae fuga? Distinctio inventore sequi repellendus harum quae! Obcaecati, praesentium alias libero veniam omnis maxime repudiandae, enim molestiae atque, fuga nam modi. Dolorem nam eos recusandae dolores animi adipisci temporibus voluptatem incidunt quidem, consequatur earum repellendus illum at quam, accusantium minus voluptatum dicta beatae repellat suscipit quaerat perferendis quia? Maiores cum magnam odit, veniam iusto omnis ea cupiditate deserunt libero dolore quasi saepe dolor eos!</p>
            </div>
        </div>
        <Dialog open={open} onClose={handleClose}>
        <DialogTitle className='flex justify-between'><span>Бронирование тура "Имя тура"</span>
        <RxCrossCircled onClick={handleClose} className=' cursor-pointer'/>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            После отправки заявки на бронирование тура, с вами свяжется наш оператор.
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
            label="Ф.И.О"
            type="text"
            fullWidth
            variant="outlined"
            required
            name='name'
          />
            <TextField
            margin="dense"
            id="phone"
            label="Номер телефона"
            type="tel"
            fullWidth
            variant="outlined"
            required
            name='phone'
          />
            <DialogActions>
              <Button onClick={handleClose}>Отмена</Button>
              <Button type='submit' onClick={handleClose}>{t("book")}</Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </Layout>
  )
}

export default TourPage