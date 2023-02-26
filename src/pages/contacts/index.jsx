import Layout from '@/Layout/Layout'
import TopSection from '@/components/TopSection'
import MyButton from '@/components/_child/MyButton';
import { TextField } from '@mui/material';
import axios from 'axios';
import React from 'react'
import { BsFacebook, BsInstagram, BsWhatsapp } from 'react-icons/bs';



const Contacts = () => {

    const submitForm = (e) => {      
        e.preventDefault()
  
        let data = {}
    
        let fm = new FormData(e.target)
    
        fm.forEach((value, key) => {
          data[key] = value
        })
    
        fetch("http://localhost:3000/api/contact", {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json", Accept: "application/json" },
        }).then((res) => {
            if (!res.ok){ 
                alert("error")
            } else {
                e.target.name.value = ""
                e.target.email.value = ""
                e.target.phone.value = ""
                e.target.massage.value = ""
                alert("nice baby")

            }
            return res.json();
          });

        console.log(data);


    }

  return (
    <Layout>
        <TopSection isSwiper={false} title={"Контакты"} dsc={"Мы будем рады получить от вас обратную связь"}/>
        <div className="content ">
            <div className=" flex justify-between mb-20">
                <div className="left">
                    <div className="media flex flex-col gap-1 mb-16">
                        <h1 className='title'>Соц.сети:</h1>
                        <div className="links flex gap-2">
                            <a href="#"><BsInstagram size={30}/></a>
                            <a href="#"><BsFacebook size={30}/></a>
                            <a href="#"><BsWhatsapp size={30}/></a>
                        </div>
                    </div>
                    <div className="media flex flex-col gap-1 mb-16">
                        <h1 className='title'>Номера телефонов:</h1>
                        <div className="links flex flex-col gap-1 text-lg font-medium">
                            <a href="#">+998(99)333-32-32</a>
                            <a href="#">+998(99)333-32-32</a>
                        </div>
                    </div>
                    <div className="media flex flex-col gap-1 mb-16">
                        <h1 className='title'>Адрес:</h1>
                        <div className="links flex gap-2 text-lg font-medium">
                            <a href="#">Узбекистан, Самарканд, ул.Али-Кушчи 7</a>
                        </div>
                    </div>
                    <div className="media flex flex-col gap-1 mb-16">
                        <h1 className='title'>Email:</h1>
                        <div className="links flex gap-2 text-lg font-medium">
                            <a href="#">info@opts.tours</a>
                        </div>
                    </div>
                    <div className="media flex flex-col gap-1 mb-16">
                        <h1 className='title'>График:</h1>
                        <div className="links flex flex-col text-lg font-medium">
                            <p>Пн-Сб: от 10:00 до 18:00</p>
                            <p>Обед с 13:00 до 14:00</p>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <h1 className='title mb-3'>Локация:</h1>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d615.8545868541881!2d66.91915879517765!3d39.65616255175086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3b2174a42a7b64b2!2sOMEGA%20PREMIER%20TRAVEL%20SERVIS!5e0!3m2!1sru!2s!4v1677322352320!5m2!1sru!2s" width="800" height="600" style={{border: 0}} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <form className=' w-fit flex flex-col gap-5 mb-20' onSubmit={submitForm}>
                <h1 className='title '>Форма обратной связи</h1>
                <div className="top flex gap-5">
                    <TextField name='name' label="Имя" required/>
                    <TextField name='email' label="Email" required/>
                    <TextField name='phone' label="Телефон"/>
                </div>
                    <TextField name='massage' label="Сообщение" fullWidth  required rows={3}/>
                    <MyButton type="submit">Отправить</MyButton>
            </form>
        </div>
    </Layout>
  )
}

export default Contacts