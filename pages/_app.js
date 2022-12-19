import  '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import Layouts from '../components/Layouts'
import {useRouter} from 'next/router';
import Header from '../components/Header';

// function MyApp({ Component, pageProps }) {

//   return 
  
//   <Layouts>
//       <Component {...pageProps} />
//     </Layouts>
// }

// export default MyApp


function MyApp({ Component, pageProps }) {
  const router = useRouter();
  if(router.asPath =='/contact-us/' ||
      router.asPath =='/thank-you/' ||
      router.asPath =='/thanks-webinar-registration/' ||
      router.asPath =='/thank-you/email-subscriber/' ||
      router.asPath =='/support-dynamics-365/' ||
      router.asPath =='/subscribe-updates/' ||
      router.asPath =='/guides/download/Pdf-dynamics-crm/' ||
      router.asPath =='/guides/download/Pdf-guide-finance/' ||
      router.asPath =='/guides/download/Pdf-d365-supply-chain-management/' ||
      router.asPath =='/guides/download/power-guide-pdf/' ||
      router.asPath =='/thank-you-for-registration/'

  )  {
    return (
      <>
      <Header />
      <Component {...pageProps} />
      </>
    )
   
 };

  return <>
  <Layouts>
  <Component {...pageProps} />
  </Layouts>
  </>
}

export default MyApp
