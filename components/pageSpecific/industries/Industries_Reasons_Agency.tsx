import { InnerWrapper, PageSection } from '@parts'
import H2 from '@typography/H2'
import H3 from '@typography/H3'

const Industries_Reasons_Agency = () => {
  return (
    <PageSection id='reasons' color='cream'>
      <InnerWrapper>
        <H2>Key Advantages</H2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6'>
          <div>
            <H3 className='text-wine mt-0 pt-0'>Cost Efficiency</H3>
            <p>
              Outsourcing can be cost-effective compared to hiring in-house resources for video
              production. Specialized equipment, software, and skilled professionals are required
              for video production.
            </p>
            <p>
              video production. By outsourcing particular tasks or projects, companies can reduce
              expenses related to equipment purchases or upgrades, employee salaries, benefits, and
              training. Outsourcing allows video production companies to access a pool of skilled
              professionals at a lower cost than keeping an in-house team. video production.
            </p>
          </div>
          <div>
            <H3 className='text-wine mt-0 pt-0'>Access to Expertise</H3>
            <p>
              Outsourcing allows video production companies to tap into a broader talent pool and
              access specialized expertise. They can collaborate with experienced professionals who
              possess unique skills, knowledge, and creative perspectives.
            </p>
            <p>
              Outsourcing opens up opportunities to work with experts in specific niches, such as
              animation, visual effects, or post-production, who can contribute to creating
              high-quality videos that meet clients' needs and exceed their expectations.
            </p>
          </div>
          <div>
            <H3 className='text-wine mt-0 pt-0'>Scalability & Flexibility</H3>
            <p>
              Outsourcing provides video production companies with the flexibility to scale their
              operations according to project requirements. During peak periods or when faced with
              larger projects, outsourcing allows companies to quickly expand their production
              capacity without the need for significant infrastructure investments or long-term
              commitments.
            </p>

            <p>
              Conversely, during quieter periods, they can scale back without the risk of
              underutilized resources.
            </p>
          </div>
          <div>
            <H3 className='text-wine mt-0 pt-0'>Focus on Core Competencies</H3>
            <p>
              Outsourcing non-core activities frees up the video production company's resources and
              allows them to focus on their core competencies.
            </p>
            <p>
              By delegating tasks like editing, motion graphics, or sound design to external
              experts, the company can concentrate on strategic planning, client management, and
              overall project coordination. This ensures that their attention is directed towards
              delivering high-quality videos and providing excellent customer service.
            </p>
          </div>
          <div>
            <H3 className='text-wine mt-0 pt-0'>Time Saving</H3>
            <p>
              Outsourcing non-core activities frees up the video production company's resources and
              allows them to focus on their core competencies.
            </p>
            <p>
              By delegating tasks like editing, motion graphics, or sound design to external
              experts, the company can concentrate on strategic planning, client management, and
              overall project coordination. This ensures that their attention is directed towards
              delivering high-quality videos and providing excellent customer service.
            </p>
          </div>
          <div>
            <H3 className='text-wine mt-0 pt-0'>Access to Advanced Technologies</H3>
            <p>
              Outsourcing can significantly reduce project turnaround times. Video production
              companies can delegate specific tasks to external partners who specialize in those
              areas, thereby accelerating the production process. This enables the company to meet
              tight deadlines, handle multiple projects simultaneously, and enhance overall project
              efficiency.
            </p>
          </div>
        </div>
      </InnerWrapper>
    </PageSection>
  )
}

export default Industries_Reasons_Agency
