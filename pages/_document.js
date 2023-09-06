
import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang='en-GB'>
        <Head>
          <link href="/favicon.png" rel="icon" />
          <link href="/favicon.png" rel="apple-touch-icon" />
          <link
            href="https://fonts.googleapis.com/css2?family=El+Messiri:wght@400;500;600;700&family=Inter:wght@400;500;600;700;800&family=Mochiy+Pop+One&family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,900;1,200;1,300;1,400;1,600;1,700&display=swap"
            rel="stylesheet"
          />
          <meta name="msvalidate.01" content="EE56DA95B952D734B4521A0EFA1F0E8B" />
          <meta
            name="google-site-verification"
            content="uAsN7nCfnYQszC3rCTid53T7TSRjV1aotOCInjwu6lI"
          />
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-G7DMKRQVGJ"></script>
          <Script id="google-analytics" strategy="beforeInteractive">
            {`
               window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-G7DMKRQVGJ'); 
                `}
          </Script>
          <Script id="hotjar" strategy="beforeInteractive">
            {`
               (function (h, o, t, j, a, r) {
                h.hj =
                  h.hj ||
                  function () {
                    (h.hj.q = h.hj.q || []).push(arguments);
                  };
                h._hjSettings = { hjid: 2914258, hjsv: 6 };
                a = o.getElementsByTagName("head")[0];
                r = o.createElement("script");
                r.async = 1;
                r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
                a.appendChild(r);
              })(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=");
                `}
          </Script>
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
          <script src="https://code-eu1.jivosite.com/widget/0vnMaZXeaH" async></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument