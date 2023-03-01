import '@/styles/globals.css'
import "@/styles/swiper.css";
import { appWithTranslation } from 'next-i18next';
import "swiper/css";
import "swiper/css/pagination";
import NextI18nextConfig from '../../next-i18next.config'

 function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default appWithTranslation(App, NextI18nextConfig)
