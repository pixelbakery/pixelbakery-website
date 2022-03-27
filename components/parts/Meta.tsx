import Head from 'next/head'

const Meta = () => {
  return (
    <Head>
      <link rel='apple-touch-icon' sizes='32x32' href='/favicon.png' />
      <link rel='icon' type='image/png' sizes='32x32' href='/favicon.png' />
      <link rel='icon' type='image/ico' sizes='32x32' href='/favicon.ico' />
      <link rel='shortcut icon' href='/favicon.ico' />
      <meta
        name='description'
        content={`Pixel Bakery Design Studio is a multidisciplinary production studio focusing on animation, motion design, and commercial film production in Lincoln, Nebraska and NW Arkansas.`}
      />
      <meta property='og:image' content='/img/pixel-bakery-samee-dan.webp' />
    </Head>
  )
}

export default Meta
