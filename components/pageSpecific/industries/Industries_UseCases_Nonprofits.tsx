import { InnerWrapper, PageSection } from '@parts'
import H2AndLead from '@typography/H2AndLead'
import { Industries_UseCases_Card } from '@industries/index'

const Industries_UseCases_Nonprofits = () => {
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
          <Industries_UseCases_Card title={'Fundraising Campaigns'}>
            <p className='text-egg font-medium'>
              Create compelling videos that highlight the organization's mission, showcase the
              impact of donations, and inspire viewers to contribute to fundraising campaigns.
            </p>
          </Industries_UseCases_Card>
          <Industries_UseCases_Card title={'Awareness Campaigns'}>
            <p className='text-egg font-medium'>
              Develop animated videos to raise awareness about social issues, share statistics and
              facts, and educate the public about the cause the nonprofit is addressing.
            </p>
          </Industries_UseCases_Card>
          <Industries_UseCases_Card title={'Volunteer Recruitment'}>
            <p className='text-egg font-medium'>
              Use videos to showcase the volunteer opportunities available, highlight the impact of
              volunteers, and encourage individuals to get involved.
            </p>
          </Industries_UseCases_Card>
          <Industries_UseCases_Card title={'Impact Stories'}>
            <p className='text-egg font-medium'>
              Share powerful stories of the people or communities that have been positively affected
              by the nonprofit's work through emotionally resonant videos.
            </p>
          </Industries_UseCases_Card>
          <Industries_UseCases_Card title={'Advocacy and Policy Campaigns'}>
            <p className='text-egg font-medium'>
              Create animated videos that explain complex policy issues, advocate for change, and
              encourage viewers to take action, such as signing petitions or contacting lawmakers.
            </p>
          </Industries_UseCases_Card>
          <Industries_UseCases_Card title={'Event Promotion'}>
            <p className='text-egg font-medium'>
              Develop animated promotional videos for fundraising events, galas, or awareness
              campaigns to generate excitement, increase attendance, and convey key event details.
            </p>
          </Industries_UseCases_Card>
          <Industries_UseCases_Card title={'Donor Appreciation'}>
            <p className='text-egg font-medium'>
              Create personalized videos to express gratitude and appreciation to donors, showcasing
              the impact of their contributions and acknowledging their support.
            </p>
          </Industries_UseCases_Card>
          <Industries_UseCases_Card title={'Educational Content'}>
            <p className='text-egg font-medium'>
              Produce animated videos that provide educational resources, tutorials, or workshops
              related to the nonprofit's mission, empowering individuals to learn and take action.
            </p>
          </Industries_UseCases_Card>
          <Industries_UseCases_Card title={'Social Media Engagement'}>
            <p className='text-egg font-medium'>
              Utilize short and engaging animated videos optimized for social media platforms to
              spark conversations, drive engagement, and expand the nonprofit's reach.
            </p>
          </Industries_UseCases_Card>
          <Industries_UseCases_Card title={'Training and Capacity Building'}>
            <p className='text-egg font-medium'>
              Develop animated videos to provide training materials, educate staff and volunteers,
              or enhance the skills and knowledge of the nonprofit's team.
            </p>
          </Industries_UseCases_Card>
          <Industries_UseCases_Card title={'Donor Impact Reports'}>
            <p className='text-egg font-medium'>
              Create animated videos to showcase the tangible outcomes and impact achieved through
              donor contributions, providing transparent and engaging reports that inspire continued
              support.
            </p>
          </Industries_UseCases_Card>
          <Industries_UseCases_Card title={'Program and Service Promotion'}>
            <p className='text-egg font-medium'>
              Develop videos that highlight the nonprofit's various programs, services, and
              initiatives, explaining how they address specific needs and improve the lives of
              individuals or communities.
            </p>
          </Industries_UseCases_Card>
          <Industries_UseCases_Card title={'Public Service Announcements (PSAs)'}>
            <p className='text-egg font-medium'>
              Produce animated PSAs to raise awareness about important issues, promote behavior
              change, and encourage viewers to take steps towards positive social outcomes.
            </p>
          </Industries_UseCases_Card>
          <Industries_UseCases_Card title={'Crowdfunding Campaigns'}>
            <p className='text-egg font-medium'>
              Create compelling videos for crowdfunding platforms, sharing the nonprofit's story,
              goals, and impact to attract donors and supporters.
            </p>
          </Industries_UseCases_Card>
          <Industries_UseCases_Card title={'Annual Reports'}>
            <p className='text-egg font-medium'>
              Present annual reports in an engaging and visually appealing way through animated
              videos, showcasing the nonprofit's achievements, milestones, and financial
              information.
            </p>
          </Industries_UseCases_Card>
          <Industries_UseCases_Card title={'Volunteer Testimonials'}>
            <p className='text-egg font-medium'>
              Capture testimonials from volunteers who have contributed their time and skills,
              showcasing their experiences and the personal rewards of volunteering with the
              nonprofit.
            </p>
          </Industries_UseCases_Card>
          <Industries_UseCases_Card title={'Community Engagement'}>
            <p className='text-egg font-medium'>
              Develop videos that engage the local community, such as event invitations, community
              spotlights, or collaborative projects that encourage participation and foster a sense
              of belonging.
            </p>
          </Industries_UseCases_Card>
          <Industries_UseCases_Card title={'Training Resources for Beneficiaries'}>
            <p className='text-egg font-medium'>
              Create animated videos that provide training and educational resources directly to the
              individuals or communities the nonprofit serves, empowering them with valuable skills
              and knowledge.
            </p>
          </Industries_UseCases_Card>
          <Industries_UseCases_Card title={'Collaboration and Partnership Promotion'}>
            <p className='text-egg font-medium'>
              Use videos to highlight successful collaborations and partnerships with other
              organizations, demonstrating the collective impact achieved and encouraging further
              collaboration.
            </p>
          </Industries_UseCases_Card>
          <Industries_UseCases_Card title={'Emotional Appeals'}>
            <p className='text-egg font-medium'>
              Produce emotionally powerful videos that convey the urgency and importance of the
              nonprofit's mission, leveraging storytelling techniques to evoke empathy and motivate
              viewers to support the cause.
            </p>
          </Industries_UseCases_Card>
        </div>
      </InnerWrapper>
    </PageSection>
  )
}

export default Industries_UseCases_Nonprofits
