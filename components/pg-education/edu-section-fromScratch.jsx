import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import HeaderLink from '../../components/pg-education/edu-part-headerLink'
import Section__Header from '../../components/pg-education/edu-section-header'

function EducationL() {
  return (
    <section className='bg-white pt-16 pb-24  my-4 ' id='recentlyAdded'>
      <div className='px-2 max-w-md lg:max-w-7xl  mx-auto px-4'>
        <h2 className='text-blue mb-16'>from scratch</h2>
        <p className='text-wine-200 font-semibold text-xl max-w-sm'>
          Proactively repurpose premier leadership via sticky architectures. Uniquely predominate
          distinctive convergence for stand-alone alignments.{' '}
        </p>
      </div>
    </section>
  )
}

export default EducationL
