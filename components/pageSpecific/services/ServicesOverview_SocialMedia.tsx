import Button_Outlined from '@parts/Button_Outlined'
import PageSection_FullWidth from '@parts/PageSection_FullWidth'
import H2 from '@typography/H2'
import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false })

function ServicesOverview_SocialMedia() {
  return (
    <PageSection_FullWidth id='social-media'>
      <div className='grid lg:grid-cols-2 gap-4 '>
        <div className='bg-yellow h-full max-h-screen'>
          <ReactPlayer
            muted={true}
            playsInline={true}
            autoPlay={true}
            loop={true}
            controls={false}
            width='100%'
            height='100%'
            className='bg-yellow'
            url={`${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/services/PB_ServiceAniamtion_SocialMedia.mp4`}
            config={{
              file: {
                attributes: {
                  autoPlay: true,
                  loop: true,
                  playsInline: true,
                  muted: true,
                  style: { width: '100%', height: '100%', objectFit: 'cover' },
                  // poster: `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/work/${project.data.vimeoPreview}.jpg`,
                },
              },
            }}
          />
        </div>
        <div className='flex flex-col justify-center px-12  py-12'>
          <H2 color='blue-dark' className='mb-6 2xl:mb-10 '>
            Social Media Video Content
          </H2>
          <p>
            You typically have 5 seconds to grab the attention of your user base on social media. In
            a world of over-stimulation and digital noise, it's important to stand out. Nothing
            immerses your audience more than a catchy animation. Engage with your audience on their
            favorite platforms. We bring your feeds to life using dynamic content and motion design.
          </p>
          <Button_Outlined
            text={'More'}
            link={'/services/social-media'}
            color={'blue-dark'}
            chevronDirection='right'
          />
        </div>
      </div>
    </PageSection_FullWidth>
  )
}
export default ServicesOverview_SocialMedia
