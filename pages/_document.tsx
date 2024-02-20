import { Html, Head, Main, NextScript } from 'next/document'
import { dempsey, poppins } from '@styles/fonts'

// import '@styles/fonts'
const MyDocument = () => {
  return (
    <Html lang='en-US' className={`${dempsey.variable} ${poppins.variable} `}>
      <Head></Head>
      <body className={`px-4 bg-egg max-w-screen overflow-x-hidden`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default MyDocument
