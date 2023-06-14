import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'
import H2AndLead from '@typography/H2AndLead'
import { Industries_UseCases_Card } from '@industries/index'

const Industries_UseCases_Education = () => {
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
          <Industries_UseCases_Card title={'Teacher Training'}>
            <p className='text-egg font-medium'>
              Animation and video production can support teacher training and professional
              development initiatives. By creating instructional videos, tutorials, and training
              materials, animation studios can assist in enhancing educators' skills and knowledge,
              ultimately benefiting the overall quality of education.
            </p>
          </Industries_UseCases_Card>

          <Industries_UseCases_Card title={'Career Exploration'}>
            <p className='text-egg font-medium'>
              Animation and video production can showcase various career paths and provide students
              with insights into different industries. By creating animated videos that highlight
              specific professions, skills, and job responsibilities, students can gain a better
              understanding of potential career options and develop relevant skills through
              interactive tutorials or simulations.
            </p>
          </Industries_UseCases_Card>
          <Industries_UseCases_Card title={'Digital Presentations and Visual Aids'}>
            <p className='text-egg font-medium'>
              Animation enhances traditional presentations and visual aids by adding movement,
              interactivity, and visual appeal. Animated infographics, charts, diagrams, and
              timelines can simplify complex information, making it easier for students to grasp and
              retain. It adds an element of excitement and engagement to classroom presentations,
              fostering active learning.
            </p>
          </Industries_UseCases_Card>
          <Industries_UseCases_Card title={'Virtual Field Trips'}>
            <p className='text-egg font-medium'>
              Animation and video production can bring virtual field trips to life, allowing
              students to explore distant places and historical landmarks without leaving the
              classroom.
            </p>
            <p className='text-egg font-medium'>
              By using animated visuals and virtual reality technologies, students can engage in
              immersive educational experiences, broadening their horizons and fostering a sense of
              curiosity and discovery.
            </p>
          </Industries_UseCases_Card>
          <Industries_UseCases_Card title={'Storytelling & Narrative-Based Learning'}>
            <p className='text-egg font-medium'>
              Animation is a powerful tool for storytelling, enabling educators to present
              educational content through captivating narratives.
            </p>
            <p className='text-egg font-medium'>
              By creating animated stories and characters, educators can engage students
              emotionally, making the learning experience more memorable and meaningful. Animated
              storytelling encourages critical thinking, empathy, and creativity among students.
            </p>
          </Industries_UseCases_Card>
          <Industries_UseCases_Card title={'Language Learning'}>
            <p className='text-egg font-medium'>
              Animation can be utilized to teach foreign languages, particularly for younger
              learners.
            </p>
            <p className='text-egg font-medium'>
              Animated characters, dialogues, and scenarios can immerse students in real-life
              language situations, helping them develop vocabulary, pronunciation, and
              conversational skills. The visual nature of animation aids in contextual understanding
              and retention of language concepts.
            </p>
          </Industries_UseCases_Card>
          <Industries_UseCases_Card title={'Social Emotional Learning (SEL)'}>
            <p className='text-egg font-medium'>
              Animation and video production can be used to teach social-emotional skills, such as
              empathy, self-awareness, and conflict resolution. Through animated scenarios and
              characters, students can learn to navigate emotions, understand diverse perspectives,
              and develop important life skills that contribute to their overall well-being and
              success.
            </p>
          </Industries_UseCases_Card>
          <Industries_UseCases_Card title={'Parent and Community Engagement'}>
            <p className='text-egg font-medium'>
              Motion graphics and video production can foster parent and community engagement in
              education. By creating informative videos, updates, or virtual events, schools can
              effectively communicate with parents, involve them in their child's education, and
              create a sense of community and collaboration between educators, parents, and the
              wider community.
            </p>
          </Industries_UseCases_Card>
        </div>
      </InnerWrapper>
    </PageSection>
  )
}

export default Industries_UseCases_Education
