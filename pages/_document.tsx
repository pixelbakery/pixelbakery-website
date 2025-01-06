import { Html, Head, Main, NextScript } from 'next/document'
import { dempsey, poppins, geologica } from '@styles/fonts'

const MyDocument = () => {
  return (
    <Html lang='en-US' className={`${geologica.variable} ${dempsey.variable} ${poppins.variable}`}>
      <Head />
      <body className='px-4 overflow-x-hidden bg-egg max-w-screen'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default MyDocument
