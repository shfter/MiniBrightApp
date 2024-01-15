import Layout from '@/components/Layout/Layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from 'react';
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import { Router, useRouter } from 'next/router'
import BoxNavLayout from '@/components/Layout/BoxNavLayout';
import { useSearchParams } from 'next/navigation'
import NProgress from 'nprogress';
import dynamic from 'next/dynamic';
const ProgressBar = dynamic(() => import('@/utils/ProgressBar'), { ssr: false });

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

 
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}



export default function App({ Component, pageProps }: AppPropsWithLayout) {
  NProgress.configure({
    minimum: 0.3,
    easing: 'ease',
    speed: 800,
    showSpinner: false,
  });
  Router.events.on('routeChangeStart', () => NProgress.start());
  Router.events.on('routeChangeComplete', () => NProgress.done());
  Router.events.on('routeChangeError', () => NProgress.done());
  const { pathname} = useRouter()  
  const router = useRouter(); 


  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  });

  const getLayout = Component.getLayout ?? ((page) => page)

  if (pathname.includes('/box')){
    return(
      <>      
      <Layout>
        <BoxNavLayout box_id={router.query.box_id}>
          {getLayout(<Component{...pageProps}/>)}
        </BoxNavLayout>
      </Layout>
      <ProgressBar/>
      </>

    ) 
  }
  

  return(
    <Layout>
      {getLayout(<Component {...pageProps} />)}
    </Layout> 
  )
}
