import React from 'react'
import Link from 'next/link'
import SitemapTable from '../components/parts/sitemap-table'

function SiteMap() {
  return (
    <main id='' className='my-4 py-24 bg-pink-light'>
      <div className='mx-auto pt-14 max-w-5xl'>
        <div className='my-16'>
          <h1 className='text-6xl text-wine-200'>Quick Links</h1>
          <ul className='text-wine text-lg mt-8 py-3 pr-2 list-disc list-inside'>
            <li>
              <Link
                href='https://github.com/jordanlambrecht/pb-oct-2022'
                className='underline'
                target='_blank'
              >
                GitHub
              </Link>
            </li>
            <li>
              <Link
                href='https://pixelbakery.monday.com/boards/911081678/'
                className='underline'
                target='_blank'
              >
                Monday Board
              </Link>
            </li>
          </ul>
        </div>
        <h1 className='text-6xl text-wine-200'>Sitemap</h1>
      </div>
      <SitemapTable category={'primary'} />
      <SitemapTable category={'secondary'} />
      <SitemapTable category={'utility'} />
    </main>
  )
}

export default SiteMap
