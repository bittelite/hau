import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/uwx7pki.css" />
        <script 
          async 
          src={"https://www.googletagmanager.com/gtag/js?id=G-HCLEWMMHXD"}
        /> 
        <script
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || []; 
          function gtag(){dataLayer.push(arguments);} 
          gtag('js', new Date()); 
          gtag('config', 'G-HCLEWMMHXD', {
            page_path: window.location.pathname,
          });
          `,
         }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}