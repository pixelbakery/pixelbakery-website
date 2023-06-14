import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'
import H2AndLead from '@typography/H2AndLead'
import { Industries_UseCases_Card } from '@industries/index'
import Link from 'next/link'

const Industries_Corporate_UseCases = () => {
  return (
    <PageSection id='use-cases' color='blue-dark'>
      <InnerWrapper>
        <H2AndLead
          headerText={'Use Cases'}
          leadText={'A few ideas to get you going'}
          leadColor='cream'
          headerColor='cream'
        />
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-6'>
          <Industries_UseCases_Card title={'Testimonials & Case Studies'}>
            <p className='text-egg font-medium'>
              Harness the power of customer experiences with testimonial and case study videos.
              These videos build trust, create emotional connections, and differentiate your
              corporation from competitors.
            </p>
            <p className='text-egg font-medium'>
              They're persuasive assets that drive engagement, attract new customers, and provide
              valuable feedback for improvement. Let customer voices be your catalyst for success.
            </p>
          </Industries_UseCases_Card>

          <Industries_UseCases_Card title={'Training Videos'}>
            <p className='text-egg font-medium'>
              Empower your employees to thrive and succeed by leveraging the benefits of animation
              in your training programs. Animated training videos gets your entire team on the same
              page.
            </p>
            <p className='text-egg font-medium'>
              It also presents them with a dynamic and engaging learning experience that makes
              things easier to understand and remember.
            </p>
          </Industries_UseCases_Card>

          <Industries_UseCases_Card title={'Product Highlight Videos'}>
            <p className='text-egg font-medium'>
              Whether through enchanting animation or live-action,{' '}
              <Link
                href={'/work/case-studies/karma-nuts-get-your-nuts'}
                className='text-blue underline'
              >
                product highlight videos
              </Link>{' '}
              breathe life into your offerings, showcasing their incredible features, benefits, and
              value.
            </p>
            <p className='text-egg font-medium'>
              Get ready to soar above your competition, educate your customers, and create a lasting
              impression that turns curious onlookers into loyal fans.
            </p>
          </Industries_UseCases_Card>

          <Industries_UseCases_Card title={'Social Media Marketing Videos'}>
            <p className='text-egg font-medium'>
              From short, snappy videos optimized for platforms like Instagram and TikTok, to
              longer-form content for YouTube and Facebook, we tailor our approach to suit your
              specific social media marketing goals.
            </p>
            <p className='text-egg font-medium'>
              From bite-sized treats to stunning creations, we ensure each video aligns with your
              brand and goals. Let us help you whip up a storm of success in the world of social
              media.
            </p>
          </Industries_UseCases_Card>

          <Industries_UseCases_Card title={'Sales Videos'}>
            <p className='text-egg font-medium'>
              Make sure the message your sales team is sending is the one you want to send.
            </p>
            <p className='text-egg font-medium'>
              Captivate and Convert with{' '}
              <Link href={'/work/case-studies/sola-tiny-chef'} className='text-blue underline'>
                engaging sales videos
              </Link>
              . We combine compelling visuals, friendly narratives, and strategic calls-to-action to
              elevate your sales strategy and empower business growth through the power of
              persuasive storytelling.
            </p>
          </Industries_UseCases_Card>

          <Industries_UseCases_Card title={'Animated Infographics'}>
            <p className='text-egg font-medium'>
              Humans have a hard time rationalizing numbers. Presenting data with engaging motion
              graphics makes it more people-centric and understandable.
            </p>
            <p className='text-egg font-medium'>
              From statistics and trends to processes and concepts, animated infographics transform
              static data into an immersive and interactive experience.
            </p>
          </Industries_UseCases_Card>

          <Industries_UseCases_Card title={'Animated Explainer Videos'}>
            <p className='text-egg font-medium'>
              Generally clocking in around 60 to 90 seconds,{' '}
              <Link href='/services/animated-explainer-videos' className='text-blue underline'>
                animated explainer videos
              </Link>{' '}
              are used to explain your company’s product or service.
            </p>
            <p className='text-egg font-medium'>
              By introducing audiences to your brand in a concise, visually pleasing way, you can
              make sure that everyone is on the same page— fast.
            </p>
          </Industries_UseCases_Card>

          <Industries_UseCases_Card title={'Brand Storytelling'}>
            <p className='text-egg font-medium'>
              A brand anthem video is a powerful and cinematic representation of a brand's identity,
              values, and essence.
            </p>
            <p className='text-egg font-medium'>
              Brand storytelling is the art of creating a compelling narrative about a brand, its
              products, and its mission. It is a powerful marketing tool that helps businesses
              establish a strong emotional connection with their target audience.
            </p>
          </Industries_UseCases_Card>

          <Industries_UseCases_Card title={'Internal Hype Videos'}>
            <p className='text-egg font-medium'>
              Inspire excitement and unity within your organization with dynamic{' '}
              <Link
                href={'/work/case-studies/kodiak-cakes-brief-history'}
                className='text-blue underline'
              >
                internal hype videos
              </Link>
              . Our expert team creates captivating videos that motivate and engage employees. From
              milestones to team events, we enhance morale and foster a vibrant internal culture.
              Elevate your team spirit with our exceptional hype video services.
            </p>
            <p className='text-egg font-medium'>
              By showcasing achievements, milestones, and company culture in an engaging and
              visually appealing way, internal hype videos instill a sense of pride and motivation
              within the workforce.
            </p>
          </Industries_UseCases_Card>
        </div>
      </InnerWrapper>
    </PageSection>
  )
}

export default Industries_Corporate_UseCases
