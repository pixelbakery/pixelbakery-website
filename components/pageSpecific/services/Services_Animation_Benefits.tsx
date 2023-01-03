import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'
import H2 from '@typography/H2'
import Lead from '@typography/Lead'

function Services_Animation_Why() {
  return (
    <PageSection color='cream' id={'why-animation'}>
      <InnerWrapper>
        <div className='md:mx-12 lg:mx-0'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-lg lg:max-w-full mx-auto'>
            <div>
              <H2>Animation is Made for Marketing</H2>
            </div>
            <div>
              <Lead>
                Animation is a powerful marketing tool that engages, educates, and entertains.
                <br />
                <br /> We leverage the versatility, memorability, and shareability of animation to
                help our clients effectively reach and connect with their target audience.
              </Lead>
              <Lead color='blue' noMargins={true} className={'mb-0 pb-0'}>
                Animation Captures Attention
              </Lead>
              <p>
                With its bright colors, interesting characters, and dynamic movement, animation
                grabs the attention of viewers, even in a crowded media landscape. This makes it an
                effective way to stand out and get your message across.
              </p>
              <Lead color='blue' noMargins={true} className={'mb-0 pb-0'}>
                Animation Is Versitile
              </Lead>
              <p>
                Animation can be used to create a wide variety of content, from explainer videos and
                product demos to branded entertainment and social media ads. This versatility makes
                it a great choice for marketers looking to reach a diverse audience.
              </p>
              <Lead color='blue' noMargins={true} className={'mb-0 pb-0'}>
                Animation Is Memorable
              </Lead>
              <p>
                Studies have shown that people are more likely to remember information presented in
                an animated format compared to static text or images. This makes animation a great
                choice for delivering a message that sticks with your audience.
              </p>
              <Lead color='blue' noMargins={true} className={'mb-0 pb-0'}>
                Animation Is Engaging
              </Lead>
              <p>
                Whether you're creating a character-driven story or an informative explainer video,
                animation will engage your viewers and keep them interested. This makes it a great
                choice to build brand loyalty and drive conversions.
              </p>
              <Lead color='blue' noMargins={true} className={'mb-0 pb-0'}>
                Animation Gives You Creative Freedom
              </Lead>
              <p>
                Motion Graphics give you the freedom to be creative and push the boundaries of
                what's possible. With animation, you can create fantastical worlds and characters
                that would be impossible to achieve with live action. This makes it a good choice
                for marketing campaigns that want to stand out and be memorable.
              </p>
            </div>
          </div>
        </div>
      </InnerWrapper>
    </PageSection>
  )
}

export default Services_Animation_Why
