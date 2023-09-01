import { LocalBusinessJsonLd, LogoJsonLd, OrganizationJsonLd, SocialProfileJsonLd } from 'next-seo'
import services from '@data/services'

function NextSEO_LocalBusiness() {
  let itemsOffered = []
  services.forEach((x) => {
    let temp = {
      name: x.service,
      description: x.description,
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
        description='A creative studio based out of Nebraska focused on animation, animated explainer videos, explainer videos, motion design, product photography, and commercial video production.'
        url='https://pixelbakery.com'
        telephone='402-302-0323'
        makesOffer={itemsOffered}
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
        legalName='Pixel Bakery LLC'
        images={[
          `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/pixel-bakery-office.jpg`,
          `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/pixel-bakery-samee-dan-1200x900.png`,
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
          'https://www.behance.net/pixelbakery-lnk',
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
        // makesOffer={[
        //   {
        //     priceSpecification: {
        //       type: 'UnitPriceSpecification',
        //       // priceCurrency: 'USD',
        //       price: 'Custom Pricing',
        //     },
        //     itemOffered: {
        //       name: 'Animation & Motion Design Services',
        //       description:
        //         'We create captivating motion graphics for your brand. Animation is a great marketing tool that can be used to engage and entertain your audience.',
        //       url: 'https://pixelbakery.com/services/animation',
        //       images: [
        //         {
        //           url: `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/services/services_animation_800x800.jpg`,
        //           width: 800,
        //           height: 800,
        //           alt: `We create captivating motion graphics for your brand. Animation is a great marketing tool that can be used to engage and entertain your audience.`,
        //         },
        //         {
        //           url: `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/services/services_animation_800x600.jpg`,
        //           width: 800,
        //           height: 600,
        //           alt: `We create captivating motion graphics for your brand. Animation is a great marketing tool that can be used to engage and entertain your audience.`,
        //         },
        //         {
        //           url: `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/services_animation_1280x720.jpg`,
        //           width: 1280,
        //           height: 720,
        //           alt: 'We create captivating motion graphics for your brand. Animation is a great marketing tool that can be used to engage and entertain your audience.',
        //         },
        //       ],
        //     },
        //   },
        //   {
        //     priceSpecification: {
        //       type: 'UnitPriceSpecification',
        //       // priceCurrency: 'USD',
        //       price: 'Custom Pricing',
        //       availability: 'http://schema.org/InStock',
        //     },
        //     itemOffered: {
        //       name: 'Video Production Services',
        //       description:
        //         'Video production can include TV commercials, YouTube pre-roll ads, company highlight videos, social media videos, and way more.',
        //       url: 'https://pixelbakery.com/services/video-production',
        //       images: [
        //         {
        //           url: `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/services/services_videoProduction_800x800.jpg`,
        //           width: 800,
        //           height: 800,
        //           alt: `Video production can include TV commercials, YouTube pre-roll ads, company highlight videos, social media videos, and way more.`,
        //         },
        //         {
        //           url: `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/services/services_videoProduction_800x600.jpg`,
        //           width: 800,
        //           height: 600,
        //           alt: `Video production can include TV commercials, YouTube pre-roll ads, company highlight videos, social media videos, and way more.`,
        //         },
        //         {
        //           url: `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/services_videoProduction_1280x720.jpg`,
        //           width: 1280,
        //           height: 720,
        //           alt: 'Video production can include TV commercials, YouTube pre-roll ads, company highlight videos, social media videos, and way more.',
        //         },
        //       ],
        //     },
        //   },
        //   {
        //     priceSpecification: {
        //       type: 'UnitPriceSpecification',
        //       // priceCurrency: 'USD',
        //       price: 'Custom Pricing',
        //       availability: 'http://schema.org/InStock',
        //     },
        //     itemOffered: {
        //       name: 'Custom Animated Explainer Videos',
        //       description:
        //         'We build custom, high-quality bespoke animated explainer videos to help brands showcase who they are. Quality visuals that resonate with your audiance.',
        //       url: 'https://pixelbakery.com/services/animated-explainer-videos',
        //       images: [
        //         {
        //           url: `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/services/services_explainerVideos_800x800.jpg`,
        //           width: 800,
        //           height: 800,
        //           alt: `We build custom, high-quality bespoke animated explainer videos to help brands showcase who they are. Quality visuals that resonate with your audiance.`,
        //         },
        //         {
        //           url: `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/services/services_explainerVideos_800x600.jpg`,
        //           width: 800,
        //           height: 600,
        //           alt: `We build custom, high-quality bespoke animated explainer videos to help brands showcase who they are. Quality visuals that resonate with your audiance.`,
        //         },
        //         {
        //           url: `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/services_explainerVideos_1280x720.jpg`,
        //           width: 1280,
        //           height: 720,
        //           alt: 'We build custom, high-quality bespoke animated explainer videos to help brands showcase who they are. Quality visuals that resonate with your audiance.',
        //         },
        //       ],
        //     },
        //   },
        //   {
        //     priceSpecification: {
        //       type: 'UnitPriceSpecification',
        //       // priceCurrency: 'USD',
        //       price: 'Custom Pricing',
        //       availability: 'http://schema.org/InStock',
        //     },
        //     itemOffered: {
        //       name: 'Social Media Video Content Services',
        //       description:
        //         'Engage with your audience on their favorite platforms. We add animation, motion graphics, and videos to your social media channels.',
        //       url: 'https://pixelbakery.com/services/social-media',
        //       images: [
        //         {
        //           url: `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/services/services_explainerVideos_800x800.jpg`,
        //           width: 800,
        //           height: 800,
        //           alt: `Engage with your audience on their favorite platforms. We add animation, motion graphics, and videos to your social media channels.`,
        //         },
        //         {
        //           url: `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/services/services_explainerVideos_800x600.jpg`,
        //           width: 800,
        //           height: 600,
        //           alt: `Engage with your audience on their favorite platforms. We add animation, motion graphics, and videos to your social media channels.`,
        //         },
        //         {
        //           url: `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/services_explainerVideos_1280x720.jpg`,
        //           width: 1280,
        //           height: 720,
        //           alt: 'Engage with your audience on their favorite platforms. We add animation, motion graphics, and videos to your social media channels.',
        //         },
        //       ],
        //     },
        //   },
        //   {
        //     priceSpecification: {
        //       type: 'UnitPriceSpecification',
        //       // priceCurrency: 'USD',
        //       price: 'Custom Pricing',
        //       availability: 'http://schema.org/InStock',
        //     },
        //     itemOffered: {
        //       name: 'Product Photography Services',
        //       description:
        //         "Showcase your brand's essence with Nebraska's premier product photography. Capturing every detail to reflect your dedication.",
        //       url: 'https://pixelbakery.com/services/product-photography',
        //       images: [
        //         {
        //           url: `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/services/services_productPhotography_800x800.jpg`,
        //           width: 800,
        //           height: 800,
        //           alt: "Showcase your brand's essence with Nebraska's premier product photography. Capturing every detail to reflect your dedication.",
        //         },
        //         {
        //           url: `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/services/services_productPhotography_800x600.jpg`,
        //           width: 800,
        //           height: 600,
        //           alt: "Showcase your brand's essence with Nebraska's premier product photography. Capturing every detail to reflect your dedication.",
        //         },
        //         {
        //           url: `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/services_productPhotography_1280x720.jpg`,
        //           width: 1280,
        //           height: 720,
        //           alt: "Showcase your brand's essence with Nebraska's premier product photography. Capturing every detail to reflect your dedication.",
        //         },
        //       ],
        //     },
        //   },
        //   {
        //     priceSpecification: {
        //       type: 'UnitPriceSpecification',
        //       price: 'Custom Pricing',
        //       availability: 'http://schema.org/InStock',
        //     },
        //     itemOffered: {
        //       name: 'Logo Animation',
        //       description: 'bring your logo to life with an eye-catching and memorable animation',
        //       url: 'https://pixelbakery.com/logo-animation',
        //     },
        //   },
        //   {
        //     priceSpecification: {
        //       type: 'UnitPriceSpecification',
        //       // priceCurrency: 'USD',
        //       price: 'Custom Pricing',
        //     },
        //     itemOffered: {
        //       name: 'Emerging Media Design Services',
        //       description:
        //         'Artificial reality, projection mapping, virtual reality, holograms, Why not? The world is evolving and so should your marketing strategy',
        //       url: 'https://pixelbakery.com/services/emerging-media',
        //       images: [
        //         {
        //           url: `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/services/services_emergingMedia_800x800.jpg`,
        //           width: 800,
        //           height: 800,
        //           alt: `Artificial reality, projection mapping, virtual reality, holograms, Why not? The world is evolving and so should your marketing strategy`,
        //         },
        //         {
        //           url: `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/services/services_emergingMedia_800x600.jpg`,
        //           width: 800,
        //           height: 600,
        //           alt: `Artificial reality, projection mapping, virtual reality, holograms, Why not? The world is evolving and so should your marketing strategy`,
        //         },
        //         {
        //           url: `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/services_emergingMedia_1280x720.jpg`,
        //           width: 1280,
        //           height: 720,
        //           alt: 'Artificial reality, projection mapping, virtual reality, holograms, Why not? The world is evolving and so should your marketing strategy',
        //         },
        //       ],
        //     },
        //   },
        //   {
        //     priceSpecification: {
        //       type: 'UnitPriceSpecification',
        //       // priceCurrency: 'USD',
        //       price: 'Custom Pricing',
        //     },
        //     itemOffered: {
        //       name: 'Creative Concepting & Strategy Services',
        //       description:
        //         'From discovery to delivery, we craft strategies and briefs at Pixel Bakery to align your message and achieve project goals.',
        //       url: 'https://pixelbakery.com/services/creative-strategy',
        //       images: [
        //         {
        //           url: `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/services/services_creativeStrategy_800x800.jpg`,
        //           width: 800,
        //           height: 800,
        //           alt: `From discovery to delivery, we craft strategies and briefs at Pixel Bakery to align your message and achieve project goals.`,
        //         },
        //         {
        //           url: `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/services/services_creativeStrategy_800x600.jpg`,
        //           width: 800,
        //           height: 600,
        //           alt: `From discovery to delivery, we craft strategies and briefs at Pixel Bakery to align your message and achieve project goals.`,
        //         },
        //         {
        //           url: `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/services_creativeStrategy_1280x720.jpg`,
        //           width: 1280,
        //           height: 720,
        //           alt: 'From discovery to delivery, we craft strategies and briefs at Pixel Bakery to align your message and achieve project goals.',
        //         },
        //       ],
        //     },
        //   },
        // ]}
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
          'https://dribbble.com/PixelBakeryLNK',
          'https://behance.net/pixelbakery-lnk',
        ]}
      />
    </>
  )
}

export default NextSEO_LocalBusiness
