import  '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import Layouts from '../components/Layouts'
import {useRouter} from 'next/router';
import Header from '../components/Header';
import CookieConsent from 'react-cookie-consent';

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
      router.asPath =='/contact-us/?utm_source=email&utm_medium=contact-us&utm_campaign=navtobc_jan&utm_term=ds_uk' ||
      router.asPath =='/contact-us/?utm_source=email&utm_medium=contact-us&utm_campaign=business_central_support&utm_term=ds_uk' ||
      router.asPath =='/thank-you/' ||
      router.asPath =='/thanks-webinar-registration/' ||
      router.asPath =='/thank-you/email-subscriber/' ||
      router.asPath =='/subscribe-updates/' ||
      router.asPath =='/subscribe-updates/?utm_source=email&utm_medium=subscribe_updates&utm_campaign=business_central_support&utm_term=ds_uk' ||
      router.asPath =='/subscribe-updates/?utm_source=email&utm_medium=subscribe_updates&utm_campaign=navtobc_jan&utm_term=ds_uk' ||
      router.asPath =='/guides/download/Pdf-dynamics-crm/' ||
      router.asPath =='/guides/download/Pdf-guide-finance/' ||
      router.asPath =='/guides/download/Pdf-d365-supply-chain-management/' ||
      router.asPath =='/guides/download/power-guide-pdf/' ||
      router.asPath =='/thank-you-for-registration/' ||
      router.asPath =='/not-for-profit-fundrasing-engagenment/' 
   

  )  {
    return (
      <>
      <Header />
      <Component {...pageProps} />
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        cookieName="myAwesomeCookieName2"
      >
       We use cookies on our website to give you the most relevant experience
        by remembering your preferences and repeat visits. By clicking "Accept",
        you consent to the use of ALL the cookies. Do not sell my personal
        information.
      </CookieConsent>
      </>
    )
   
 };

  return <>
  <Layouts>
  <Component {...pageProps} />
  </Layouts>
  <CookieConsent
        location="bottom"
        buttonText="Accept"
        cookieName="myAwesomeCookieName2"
      >
        We use cookies on our website to give you the most relevant experience
        by remembering your preferences and repeat visits. By clicking "Accept",
        you consent to the use of ALL the cookies. Do not sell my personal
        information.
      </CookieConsent>
  </>
}

export default MyApp

