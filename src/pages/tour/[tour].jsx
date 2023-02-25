import Layout from '@/Layout/Layout'
import TopSection from '@/components/TopSection'
import Accordionn from '@/components/_child/Accordionn'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material'
import React, { useState } from 'react'
import ReactStars from 'react-stars'
import { RxCrossCircled } from 'react-icons/rx';


const TourPage = () => {

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

  return (
    <Layout>
        <TopSection isSwiper={false} title={"Тур по Узбекистану"} dsc={"Ташкент-Самарканд-Бухара-Шахрисабс-Ургенч"} dsc2={"8-дней / 7-ночей"}/>

        <div className="content">
            <div className="way flex justify-between items-center mb-20">
                <div className="acc">
                    <h1 className='title mb-3'>Маршрут:</h1>
                    <Accordionn/>
                </div>
                <div className="price sticky top-[100px] z-50 bg-[#1EB8D4] w-[40%] text-white p-3 rounded-lg flex flex-col justify-between gap-5">
                    <div className="prices">
                        <h1>Цены:</h1>
                        <table className=' border-solid border-2 p-4 w-full rounded-xl'>
                            <tr className='text-center'>
                                <th className='border-solid border-2'>Кол-во персон:</th>
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
                        <p className=' text-base leading-5'>Если вы хотите групповой тур то напешите нам и мы подберём для вас подходящий тур по низкой цене.</p>
                    </div>
                    <button onClick={handleClickOpen} className=' border-[#1EB8D4] border-solid border-2 bg-white text-[#1EB8D4] w-full py-2 rounded-xl'>Забронировать</button>
                </div>
            </div>
            <div className="incuded mb-20 w-fit">
                <h1 className='title'>Влючено/Не включено</h1>
                    <div className="inc mb-7">
                        <h1 className=' text-lg font-semibold'>Включено:</h1>
                        <ul>
                            <li>Размещение в комфортабельных гостиницах в двухместных номерах</li>
                            <li>Питание: завтрак в отелях</li>
                            <li>Комфортабельный кондиционированный транспорт на весь маршрут </li>
                            <li>Все встречи и проводы в аэропорту</li>
                            <li>Местные гиды-экскурсоводы в городах на время экскурсии.</li>
                            <li>Экскурсии согласно программе тура</li>
                            <li>Отличное настроение :)</li>
                        </ul>
                    </div>

                <div className="uninc">
                    <h1 className=' text-lg font-semibold'>Не включено:</h1>
                    <ul>
                        <li>Международный Авиабилет</li>
                        <li>Питание (обед и ужин)</li>
                        <li>Входные билеты на указанные монументы</li>
                        <li>Сборы за фото и видеосъемку на памятниках</li>
                        <li>Чаевые, и носильщики в отелях/аэропорту</li>
                        <li>Личные расходы</li>
                        <li>Другие услуги не указанные выше</li>
                    </ul>
                </div>
            </div>
            <div className="dsc mb-20">
                <h1 className='title'>Описание:</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis officiis ea ut dicta, autem aliquam assumenda quis voluptas tenetur pariatur deleniti molestias hic quia nam blanditiis at eveniet possimus illo rerum eligendi, dolores repellat debitis repudiandae fuga? Distinctio inventore sequi repellendus harum quae! Obcaecati, praesentium alias libero veniam omnis maxime repudiandae, enim molestiae atque, fuga nam modi. Dolorem nam eos recusandae dolores animi adipisci temporibus voluptatem incidunt quidem, consequatur earum repellendus illum at quam, accusantium minus voluptatum dicta beatae repellat suscipit quaerat perferendis quia? Maiores cum magnam odit, veniam iusto omnis ea cupiditate deserunt libero dolore quasi saepe dolor eos!</p>
            </div>
        </div>
        <Dialog open={open} onClose={handleClose}>
        <DialogTitle className='flex justify-between'>Бронирование тура "Имя тура"
        <RxCrossCircled onClick={handleClose} className=' cursor-pointer'/>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            После отправки заявки на бронирование тура, с вами свяжется наш оператор.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email"
            type="email"
            fullWidth
            variant="standard"
          />
            <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Ф.И.О"
            type="email"
            fullWidth
            variant="standard"
          />
            <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Номер телефона"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Отмена</Button>
          <Button onClick={handleClose}>Забронировать</Button>
        </DialogActions>
      </Dialog>
    </Layout>
  )
}

export default TourPage