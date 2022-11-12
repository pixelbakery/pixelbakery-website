import LogoAnimation_Descriptions_Card from './LogoAnimation_Descriptions_Card'
import InnerWrapper from '@parts/InnerWrapper'
import H2 from '@typography/H2'
import PageSection from '@parts/PageSection'

function LogoAnimation_Descriptions() {
  return (
    <PageSection id='logo-animation-descriptions'>
      <InnerWrapper>
        <H2 className='pb-6'>Package Details</H2>
        <div className='grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-8 gap-y-16'>
          <LogoAnimation_Descriptions_Card
            header='Concepts'
            desc="The number of ideas we'll present to you to choose from"
          />
          <LogoAnimation_Descriptions_Card
            header='Revisions'
            desc='How many edits you get to make on the animation'
          />
          <LogoAnimation_Descriptions_Card
            header='Transition IN'
            desc='How your logo enters. You can think of this as how your logo "pops" into view'
          />
          <LogoAnimation_Descriptions_Card
            header='Transition OUT'
            desc='How your logo exits the screen. The opposite of Transition In'
          />
          <LogoAnimation_Descriptions_Card
            header='Passive Animation'
            desc=' A seamlessly looped version of your logo animation that will indefinitely chill wherever you put it. Great for slide decks, events, office kiosks, menu screens, watermarks, and long-form video content'
          />
          <LogoAnimation_Descriptions_Card
            header='Instagram Pack'
            desc='We’ll include a 1:1 and 9:16 version of your logo for you to use on Instagram posts and stories. These are great for creating announcements or stories that are mostly text-based.'
          />
          <LogoAnimation_Descriptions_Card
            header='Alternative Colors'
            desc='If you have alternative brand colors, we’ll incorporate them in your package'
          />
          <LogoAnimation_Descriptions_Card
            header='White (Reverse) Version'
            desc='Sometimes you simply need a fully white version to drop onto darker backgrounds 🤷‍♀️'
          />
          <LogoAnimation_Descriptions_Card
            header='Deliverables'
            desc='What all will be included in the package we pass off to you'
          />
          <LogoAnimation_Descriptions_Card
            header='Lower Thirds'
            desc='Lower Thirds are banners that appear at the bottom of videos to introduce a person (name and title) or subject (subject name and  description). We’ll provide a template that animates it in + out'
          />
          <LogoAnimation_Descriptions_Card
            header='Animated Section Markers'
            desc='These are full-screen quick-cut transitions to be used between video scenes. They can be used  introduce a new ‘chapter’, for callout cards, display information, or whatever your heart desires'
          />
          <LogoAnimation_Descriptions_Card
            header='MORGT Templates'
            desc='.mogrt files are Adobe Premiere template files that you can load into your projects so you don’t have to hunt down and import your animation each time. They also include the ability to dynamically edit text, which is essential if you have lower thirds'
          />
        </div>
      </InnerWrapper>
    </PageSection>
  )
}
export default LogoAnimation_Descriptions
