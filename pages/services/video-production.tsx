import Services_AllServices from '@services/Services_AllServices'
import Services_OurApproach from '@services/Services_OurApproach'
import Main from '@parts/Main'
import Services_Modulation from '@services/Services_Modulation'
import CaseStudies_CTA from '@caseStudies/CaseStudies_CTA'
import Services_Header from '@services/Services_Header'
import Services_SEO from '@services/Services_SEO'
import Services_VideoProduction_Why from '@services/Services_VideoProduction_Why'

export default function Services() {
  const desc = `Commercial video production can include video advertisements, TV commercials, YouTube
          pre-roll ads, online advertisements, or digital campaigns. These are all great ways to
          give your brand more recognition and to boost your marketplace identity. With our
          experience in both video production and animation, there are no limits to what we can
          produce for your brand.`
  return (
    <Main>
      <Services_SEO serviceName='Video Production' description={desc} path='video-production' />
      <Services_Header
        serviceName={'Video Production'}
        isLottie={false}
        subheader={'Making your story come to life'}
        bgColor={'dangerPink'}
        videoSourceWEBM={'/img/PB_ServiceAniamtion_VideoProduction.webm'}
        videoSourceMP4={'/img/PB_ServiceAniamtion_VideoProduction.mp4'}
      >
        <p>
          Commercial video production can include video advertisements, TV commercials, YouTube
          pre-roll ads, online advertisements, or digital campaigns. These are all great ways to
          give your brand more recognition and to boost your marketplace identity. With our
          experience in both video production and animation, there are no limits to what we can
          produce for your brand.
        </p>
      </Services_Header>
      <Services_VideoProduction_Why />
      <Services_Modulation />
      <Services_OurApproach />
      <CaseStudies_CTA />

      <Services_AllServices />
    </Main>
  )
}
