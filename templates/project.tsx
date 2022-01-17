import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

export default function Post({ children, frontMatter }) {
  const { title } = frontMatter
  return (
    <div>
      <main>
        <h1>{title}</h1>
        <div>{children}</div>
        <p>
          <Link href='/'>
            <a>Back to home</a>
          </Link>
        </p>
      </main>
    </div>
  )
}
