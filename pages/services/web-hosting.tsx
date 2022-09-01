import Services_Header from '@services/Services_Header'
import Services_AllServices from '@services/Services_AllServices'
import Main from '@parts/Main'
import CaseStudies_CTA from '@caseStudies/CaseStudies_CTA'
import Lottie_Animation from '@data/lottie_services/lottie_services_webHosting.json'
import Services_SEO from '@services/Services_SEO'
import Obfuscate from 'react-obfuscate'
export default function Services() {
  const desc = `We offer this service to any Nebraskan. You're welcome to choose how much you can afford.
          We'll help you install Wordpress (if that's your jam) and provide you with security
          updates as well as weekly backups.`
  return (
    <Main>
      <Services_SEO serviceName='Web Hosting' description={desc} path='web-hosting' />

      <Services_Header
        serviceName={'Web Hosting'}
        isLottie={true}
        subheader={'Because you deserve it'}
        bgColor={'blue'}
        LottieComponent={Lottie_Animation}
      >
        <p>
          We offer this service to any Nebraskan. You&apos;re welcome to choose how much you can
          afford. We&apos;ll help you install Wordpress (if that&apos;s your jam) and provide you
          with security updates as well as weekly backups. Email Jordan for more information:{' '}
          <Obfuscate email={'jordan@pixelbakery.com'} />
        </p>
      </Services_Header>
      <CaseStudies_CTA />
      <Services_AllServices />
    </Main>
  )
}
