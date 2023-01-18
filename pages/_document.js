
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
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-5BJVL7GDB9"
    ></script>
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
            <Script id="googletagmanager" strategy="beforeInteractive">
                {`
               (function (w, d, s, l, i) {
                w[l] = w[l] || [];
                w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
                var f = d.getElementsByTagName(s)[0],
                  j = d.createElement(s),
                  dl = l != "dataLayer" ? "&l=" + l : "";
                j.async = true;
                j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
                f.parentNode.insertBefore(j, f);
              })(window, document, "script", "dataLayer", "GTM-TV88P3N");
                `}
            </Script>
            <Script id="google-analytics" strategy="beforeInteractive">
                {`
                window.dataLayer = window.dataLayer || [];
                function gtag() {
                  dataLayer.push(arguments);
                }
                gtag("js", new Date());
                gtag("config", "G-5BJVL7GDB9");
                `}
            </Script>
            <script src="https://www.googleoptimize.com/optimize.js?id=OPT-M8FWRNS"></script>
            {/* <Script id="Adoric-Script" strategy="beforeInteractive">
                {`
               (function (a, d, o, r, i, c, u, p, w, m) {
                (m = d.getElementsByTagName(o)[0]),
                  (a[c] = a[c] || {}),
                  (a[c].trigger =
                    a[c].trigger ||
                    function () {
                      (a[c].trigger.arg = a[c].trigger.arg || []).push(arguments);
                    }),
                  (a[c].on =
                    a[c].on ||
                    function () {
                      (a[c].on.arg = a[c].on.arg || []).push(arguments);
                    }),
                  (a[c].off =
                    a[c].off ||
                    function () {
                      (a[c].off.arg = a[c].off.arg || []).push(arguments);
                    }),
                  (w = d.createElement(o)),
                  (w.id = i),
                  (w.src = r),
                  (w.async = 1),
                  w.setAttribute(p, u),
                  m.parentNode.insertBefore(w, m),
                  (w = null);
              })(
                window,
                document,
                "script",
                "https://6644018.adoric-om.com/adoric.js",
                "Adoric_Script",
                "adoric",
                "f017283e0ae31abc41082986c03676d1",
                "data-key"
              );
                `}
            </Script> */}
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