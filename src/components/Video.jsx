import React from 'react'
import MyButton from './_child/MyButton'
import { useTranslation } from 'next-i18next'
import { BsFacebook, BsInstagram, BsWhatsapp } from 'react-icons/bs';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton } from '@mui/material';





const Video = () => {

  const {t} = useTranslation("main")

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  return (
<>

    <div className=' flex flex-col gap-4 items-center justify-center mt-7 h-[600px] max-md:h-[400px] w-full mb-24 max-lg:mb-6 text-center max-[560px]:h-[300px] max-[400px]:h-[250px] max-md:hidden'>
      <div className="forvid w-screen h-[600px] max-md:h-[400px] absolute z-[-1] left-0 bg-center overflow-hidden max-[560px]:h-[300px] max-[400px]:h-[250px]">
        <video autoPlay muted loop className="bg w-screen bg-center">
          <source  src='https://samcity.uz/images/video.mp4' type='video/mp4'/>
        </video>
      </div>
      <h1 className='title text-white max-sm:text-2xl'>{t("sale")}</h1>
      <MyButton onClick={handleClickOpen}>{t("more")}</MyButton>
    </div>
    <Dialog
    onClose={handleClose}
    aria-labelledby="customized-dialog-title"
    open={open}
  >
    <DialogTitle id="customized-dialog-title" onClose={handleClose}>
      Связжитесь с нами для получения скидки
    </DialogTitle>
    <DialogContent dividers className='flex flex-col gap-3'>
      <a href="#" className='flex gap-2'><BsInstagram size={30} color='#00AFD7'/> opts_uzb_tours </a>
      <a href="#" className='flex gap-2'><BsFacebook size={30} color='#00AFD7'/> opts_uzb_tours </a>
      <a href="#" className='flex gap-2'><BsWhatsapp size={30} color='#00AFD7'/> +998(99)333-32-32 </a>
    </DialogContent>
    <DialogActions>
      <Button autoFocus onClick={handleClose}>
        Close
      </Button>
    </DialogActions>
  </Dialog>

</>
  )
}

export default Video
