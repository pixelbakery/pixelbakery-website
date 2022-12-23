import { LocalBusinessJsonLd, LogoJsonLd, OrganizationJsonLd, SocialProfileJsonLd } from 'next-seo'
import services from '@data/services'

function NextSEO_LocalBusiness() {
  let itemsOffered = []
  services.forEach((x) => {
    let temp = {
      itemOffered: {
        name: x.service,
        description: x.description,
      },
    }

    itemsOffered.push(temp)
  })
  return (
    <>
      <LocalBusinessJsonLd
        type='ProfessionalService'
        id='https://pixelbakery.com'
        name='Pixel Bakery Design Studio'
        logo={`${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/logos/initials/png/600x600px_transparent/pb_logo_initials_peach_onTransparent.png`}
        description='A creative studio based out of Nebraska focused on animation, explainer videos, motion design, product photography, and commercial video production.'
        url='https://pixelbakery.com'
        telephone='402-302-0323'
        makesOffer={itemsOffered}
        address={{
          streetAddress: '2124 Y Street, Suite 122',
          addressLocality: 'Lincoln',
          addressRegion: 'NE',
          postalCode: '68503',
          addressCountry: 'US',
          type: 'PostalAddress',
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
        areaServed={[
          {
            geoMidpoint: {
              latitude: '40.8247413',
              longitude: '-96.6904574',
            },
            geoRadius: '1000',
          },
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
      <OrganizationJsonLd
        type='Corporation'
        logo={`${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/logos/initials/png/600x600px_transparent/pb_logo_initials_peach_onTransparent.png`}
        legalName='Pixel Bakery LLC'
        name='Pixel Bakery'
        address={{
          streetAddress: '2124 Y Street Suite 122',
          addressLocality: 'Lincoln',
          addressRegion: 'NE',
          postalCode: '68503',
          addressCountry: 'US',
        }}
        contactPoint={[
          {
            telephone: '+1-402-302-03232',
            contactType: 'Office',
            areaServed: 'US',
            availableLanguage: ['English'],
          },
        ]}
        url='https://pixelbakery.com'
      />
      <LogoJsonLd
        logo={`${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/logos/initials/png/600x600px_transparent/pb_logo_initials_peach_onTransparent.png`}
        url='https://pixelbakery.com'
      />
      <SocialProfileJsonLd
        type='Organization'
        name='Pixel Bakery'
        url='https://pixelbakery.com'
        sameAs={[
          'https://www.linkedin.com/company/7593086',
          'https://www.youtube.com/c/pixelbakery',
          'https://instagram.com/pixelbakery',
          'http://facebook.com/pixelbakerylnk',
          'https://www.pinterest.com/pixelbakerylnk/',
          'https://twitter.com/pixelbakerylnk',
        ]}
      />
    </>
  )
}

export default NextSEO_LocalBusiness
