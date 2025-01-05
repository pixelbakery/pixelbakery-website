import { InnerWrapper, PageSection } from '@parts'
import H2 from '@typography/H2'

const Industries_Important_Education = () => {
  return (
    <PageSection id='why-important'>
      <InnerWrapper>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-12'>
          <div className=''>
            <H2>Why is Video Production Important for Education?</H2>
          </div>
          <div className=''>
            <p>
              Animation plays a crucial role in the educational sector by bringing learning to life
              in a visually captivating and engaging way. Through the power of animation, complex
              concepts can be simplified and presented in a manner that resonates with students of
              all ages. Visual storytelling, interactive elements, and dynamic graphics help to
              spark curiosity, foster creativity, and deepen understanding.
            </p>
            <p>
              By incorporating animation into educational materials, educators can create immersive
              learning experiences that ignite students' imaginations and make learning more
              enjoyable. Animation not only enhances comprehension but also promotes critical
              thinking, problem-solving skills, and information retention. It has the potential to
              revolutionize traditional teaching methods and cultivate a lifelong love for learning
              in students.
            </p>
          </div>
        </div>
      </InnerWrapper>
    </PageSection>
  )
}

export default Industries_Important_Education
