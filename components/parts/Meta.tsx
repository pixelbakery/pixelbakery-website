import Head from 'next/head'

const Meta = () => {
  return (
    <Head>
      <Link hrefLang={'en-US'} rel='apple-touch-icon' sizes='32x32' href='/favicon.png' />
      <Link hrefLang={'en-US'} rel='icon' type='image/png' sizes='32x32' href='/favicon.png' />
      <Link hrefLang={'en-US'} rel='icon' type='image/ico' sizes='32x32' href='/favicon.ico' />
      <Link hrefLang={'en-US'} rel='shortcut icon' href='/favicon.ico' />
    </Head>
  )
}

export default Meta
