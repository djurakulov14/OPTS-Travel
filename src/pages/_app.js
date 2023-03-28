import '@/styles/globals.css'
import "@/styles/swiper.css";
import { appWithTranslation } from 'next-i18next';
import "swiper/css";
import "swiper/css/pagination";
import NextI18nextConfig from '../../next-i18next.config'
import { useRouter } from 'next/router';
import Preloader from '@/components/_child/Preloader';
import { useEffect, useState } from 'react';

 function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setLoading(true);
    });

    router.events.on("routeChangeComplete", () => {
      setLoading(false);
    });

  }, []);
  if(loading === true){
    window.scrollY.toFixed()
  }
  return <>
      {
        loading && <Preloader />
      }
      <Component {...pageProps} />
    </>
}

export default appWithTranslation(App, NextI18nextConfig)

