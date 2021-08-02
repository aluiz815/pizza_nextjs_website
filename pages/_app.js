import GlobalStyles from '../styles/globals'
import Head from 'next/head'
function MyApp({ Component, pageProps }) {
  return(
    <>
      <Head>
        <title>Italian Pizza</title>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@400;900&display=swap" rel="stylesheet"/>
        <script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" async=""></script>
      </Head>
      <GlobalStyles/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
