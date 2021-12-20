import React from 'react'
import Card_Rounded from '../parts/Card_Rounded'
import PropTypes from 'prop-types'
SolaTinyChef_OtherProjects.propTypes = {
  otherProjects: PropTypes.array.isRequired,
}
function SolaTinyChef_OtherProjects({ otherProjects }) {
  return (
    <section className='my-4 bg-yellow pt-12 px-6 '>
      <div className='mx-auto max-w-md lg:max-w-6xl'>
        <h2 className='text-left mt-0 pt-0 text-4xl max-w-md '> other sola projects</h2>
        <div className='grid grid-cols-1 lg:grid-cols-3 lg:gap-24'>
          {otherProjects.map((project) => {
            return (
              <div className='-mb-12 drop-shadow-md rounded-sm overflow-hidden' key={project.name}>
                <Card_Rounded
                  link={project.url}
                  aspectW={'4'}
                  aspectY={'3'}
                  img={project.image}
                  imgAlt={project.client + ' ' + project.name + ' ' + project.tag}
                  tags={[project.tag]}
                  head={project.name}
                  subhead={project.client}
                  tagBgColor={'cream'}
                  tagTextColor={'wine'}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
export default SolaTinyChef_OtherProjects
