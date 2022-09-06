import { LocalBusinessJsonLd } from 'next-seo'

function NextSEO_LocalBusiness() {
  return (
    <LocalBusinessJsonLd
      type='ProfessionalService'
      id='https://pixelbakery.com'
      name='Pixel Bakery Design Studio'
      logo={`${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/logos/initials/png/600x600px_transparent/pb_logo_initials_peach_onTransparent.png`}
      description='A multi-disciplinary production studio based out of the midwest with an emphasis on animation, motion design, and commercial video production'
      url='https://pixelbakery.com'
      telephone='402-302-0323'
      address={{
        streetAddress: '2124 Y Street, Suite 122',
        addressLocality: 'Lincoln',
        addressRegion: 'NE',
        postalCode: '68503',
        addressCountry: 'US',
      }}
      geo={{
        latitude: '40.8247413',
        longitude: '-96.6904574',
      }}
      map={'https://g.page/pixelbakery?share'}
      legalName='Pixel Bakery LLC'
      images={[
        `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/pixel-bakery-office.jpg`,
        `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/pixel-bakery-samee-dan-1200x900.png`,
        `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/pixelbakery-mug-iloveyou.png`,
        `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/pixelbakery-thumbnail.jpg`,
      ]}
      sameAs={[
        'https://www.linkedin.com/company/7593086',
        'https://vimeo.com/pixelbakery',
        'https://twitch.tv/pixelbakery',
        'https://www.youtube.com/c/pixelbakery',
        'https://instagram.com/pixelbakery',
        'http://facebook.com/pixelbakerylnk',
        'https://www.pinterest.com/pixelbakerylnk/',
        'https://twitter.com/pixelbakerylnk',
        'https://github.com/pixelbakery',
        'https://dribbble.com/PixelBakeryLNK',
        'https://pixelbakery.medium.com',
        'https://www.tiktok.com/@pixelbakery',
        'https://www.behance.net/pixelbakerylnk',
      ]}
      openingHours={[
        {
          opens: '08:00',
          closes: '17:00',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        },
      ]}
    />
  )
}

export default NextSEO_LocalBusiness
