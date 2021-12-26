import React from 'react'

import markdownStyles from './markdown-styles.module.css'

type Props = {
  content: string
}

const PostBody = ({ content }: Props) => {
  return (
    <section className='my-12 md:max-w-3xl mx-auto' id='blog-body-guts '>
      <div className={markdownStyles['markdown']} dangerouslySetInnerHTML={{ __html: content }} />
    </section>
  )
}

export default PostBody
