import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import Footer from '../components/footer/Footer'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <body className='px-4'>
          <Main />
          <Footer />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
