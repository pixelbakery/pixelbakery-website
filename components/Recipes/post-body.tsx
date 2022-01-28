import React from 'react'
import Pill from '../../parts/Pill'
import markdownStyles from '../../../styles/markdown-styles.module.css'

import Button_Filled from '../../parts/Button_Filled'
type Props = {
  content: string
  tags: Array<string>
}

const PostBody = ({ content, tags }: Props) => {
  return (
    <section className='px-6 mt-8 md:max-w-3xl mx-auto' id='blog-body-guts '>
      <div className={markdownStyles['markdown']} dangerouslySetInnerHTML={{ __html: content }} />
      <div className='my-4 pt-12 max-w-3xl mx-auto'>
        <h3 className='text-blue font-semibold text-3xl mb-4'>Tags</h3>
        <div className='flex justify-start flex-wrap gap-2'>
          {tags.map((tag) => {
            return <Pill key={tag} text={tag} bgColor='pink-light' textColor='pink' size='sm' />
          })}
        </div>
        <div className='mt-12'>
          <Button_Filled
            text='we got more'
            link='/recipes'
            bgColor='blue'
            textColor='cream'
            chevronDirection='left'
          />
        </div>
      </div>
    </section>
  )
}

export default PostBody
