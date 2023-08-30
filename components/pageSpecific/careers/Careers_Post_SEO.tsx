import { BreadcrumbJsonLd, JobPostingJsonLd, NextSeo } from 'next-seo'
function Careers_SEO({ ...props }) {
  return (
    <>
      <BreadcrumbJsonLd
        itemListElements={[
          {
            position: 1,
            name: 'Careers',
            item: 'https://pixelbakery.com/careers',
          },
          {
            position: 2,
            name: `${props.title}`,
            item: `https://pixelbakery.com/careers/${props.slug}`,
          },
        ]}
      />
      <NextSeo
        title={`${props.title} | Careers`}
        description={`We're hiring a ${props.commitment} ${props.title}. Come join our awesome team on a journey to create outstanding animations, motion graphics, and video productions.`}
        canonical={`https://pixelbakery.com/careers/${props.slug}`}
        openGraph={{
          url: `https://pixelbakery.com/careers/${props.slug}`,
          title: `${props.title} | Careers`,
          description: `We're hiring a ${props.commitment} ${props.title}.Come join our awesome team on a journey to create outstanding animations, motion graphics, and video productions.`,
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_IMG_PREFIX}${props.coverImage}`,
              width: 800,
              height: 600,
              alt: `Pixel Bakery is hiring a ${props.commitment} ${props.title}`,
            },
            {
              url: `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/pixelbakery-thumbnail.jpg`,
              width: 1200,
              height: 900,
              alt: 'Pixel Bakery Design Studio is an award-winning multidisciplinary production studio centered around motion graphics, animated explainer videos, video production, and product photography.',
            },
            {
              url: `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/pixel-bakery-office.jpg`,
              width: 1080,
              height: 810,
              alt: 'Pixel Bakery Design Studio is an award-winning multidisciplinary production studio centered around motion graphics, animated explainer videos, video production, and product photography.',
            },
            {
              url: `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/pixel-bakery-samee-dan-1200x900.png`,
              width: 1080,
              height: 810,
              alt: 'Daniel Hinz and Samee Callahan, two Pixel Bakery employees in Lincoln, Nebraska',
            },
            {
              url: `${process.env.NEXT_PUBLIC_IMG_PREFIX}${props.coverImage}`,
              width: 800,
              height: 600,
              alt: `Pixel Bakery is hiring a ${props.commitment} ${props.title}`,
            },
          ],
        }}
      />
      <JobPostingJsonLd
        title={`${props.title}`}
        validThrough={`${props.dateExpiredISO}`}
        datePosted={`${props.datePostedISO}`}
        description={`Pixel Bakery is looking to hire a ${props.commitment} ${props.title}`}
        employmentType={`FULL_TIME`}
        hiringOrganization={{
          name: 'Pixel Bakery Design Studio',
          sameAs: 'https://pixelbakery.com',
          logo: 'https://pixelbakery.com/img/logos/initials/600x600px/darkBlue_withCreamShadow_onBlue_concave.png',
        }}
        jobLocation={{
          streetAddress: '2124 Y Street Suite 122',
          addressLocality: 'Lincoln',
          addressRegion: 'NE',
          postalCode: '68503',
          addressCountry: 'USA',
        }}
      />
    </>
  )
}
export default Careers_SEO
