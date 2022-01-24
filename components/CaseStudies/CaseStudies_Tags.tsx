import Link from 'next/link'
import React from 'react'
import Pill from '../parts/Pill'

import PropTypes from 'prop-types'
CaseStudies_Tags.propTypes = {
  tags: PropTypes.array.isRequired,
}

function CaseStudies_Tags({ tags }) {
  // const values = this.props.tags.map(function (tag, i) {
  //   return <p key={tag.name}>value</p>
  // })
  return (
    <section className=' my-4 py-12'>
      <div className='mx-auto md:max-w-6'>
        <h3 className='text-center text-2xl text-pink mb-6'>here&apos;s what we did</h3>
        <div className='flex flex-row justify-center gap-3 flex-wrap'>
          {tags.map((tag) => {
            if (tag.enabled)
              return (
                <Link href={tag.url} passHref key={tag.name}>
                  <a className='cursor-pointer transition-all duration-500 ease-in-out hover:scale-98'>
                    <Pill
                      text={tag.name}
                      bgColor={'blue-light'}
                      textColor={'blue-dark'}
                      size={'md'}
                    />
                  </a>
                </Link>
              )
            else return null
          })}
        </div>
      </div>
    </section>
  )
}
export default CaseStudies_Tags
