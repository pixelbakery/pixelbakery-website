import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'
import H2 from '@typography/H2'
import H3 from '@typography/H3'

const Industries_Reasons_Nonprofits = () => {
  return (
    <PageSection id='reasons' color='cream'>
      <InnerWrapper>
        <H2>Key Advantages</H2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6'>
          <div>
            <H3 className='text-wine mt-0 pt-0'>Enhanced Storytelling</H3>
            <p>
              Animation and video production allow nonprofits to tell their stories in a visually
              captivating and emotionally engaging way. By leveraging animation and videos,
              nonprofits can convey their mission, impact, and the stories of those they serve with
              greater impact, connecting with their audience on a deeper level.
            </p>
          </div>
          <div>
            <H3 className='text-wine mt-0 pt-0'>Increased Awareness and Engagement</H3>
            <p>
              Animated videos and visual content have a higher chance of capturing attention and
              generating engagement on digital platforms. By incorporating animation and video
              production, nonprofits can increase their reach, raise awareness about their cause,
              and inspire action among their target audience.
            </p>
          </div>
          <div>
            <H3 className='text-wine mt-0 pt-0'>Simplified Complex Concepts</H3>
            <p>
              Nonprofits often deal with complex social, environmental, or humanitarian issues.
              Animation and video production can simplify these concepts, making them more
              accessible and understandable to a wider audience.
            </p>
            <p>
              By breaking down complex information into visually appealing and easy-to-digest
              formats, nonprofits can effectively communicate their message and educate the public.
            </p>
          </div>
          <div>
            <H3 className='text-wine mt-0 pt-0'>Emotional Connection</H3>
            <p>
              Animation and videos have the power to evoke emotions and create a lasting impact. By
              incorporating these mediums, nonprofits can tap into the emotional aspect of
              storytelling, fostering empathy, compassion, and support for their cause. This
              emotional connection can inspire individuals to take action, whether through
              donations, volunteering, or spreading the word.
            </p>
          </div>
          <div>
            <H3 className='text-wine mt-0 pt-0'>Accessible Communication</H3>
            <p>
              Animation and video content can be made accessible to a wider audience by adding
              closed captions, subtitles, or audio descriptions. Nonprofits can ensure that their
              videos reach individuals with different abilities, hearing impairments, or language
              barriers, promoting inclusivity and ensuring that everyone can engage with their
              message.
            </p>
          </div>
          <div>
            <H3 className='text-wine mt-0 pt-0'>Memorable Branding</H3>
            <p>
              Animation and video production offer nonprofits an opportunity to create a distinctive
              brand identity. By incorporating animated logos, characters, or branded elements in
              their videos, nonprofits can leave a memorable impression on their audience. This
              helps in building brand recognition, increasing visibility, and establishing a unique
              identity within the crowded nonprofit sector.
            </p>
          </div>
        </div>
      </InnerWrapper>
    </PageSection>
  )
}

export default Industries_Reasons_Nonprofits
