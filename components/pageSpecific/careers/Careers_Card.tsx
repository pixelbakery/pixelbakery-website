import DateFormatter from '@lib/date-formatter'
import Link from 'next/link'

function Careers_Card({ job }) {
  return (
    <Link
      hrefLang={'en-US'}
      as={`/careers/${job.filePath.replace(/\.mdx?$/, '')}`}
      href={`/careers/[slug]`}
      className='col-span-1'
    >
      <article className='h-full w-full px-3 py-4 border-4 border-pink rounded-lg flex flex-col justify-between cursor-pointer duration-300 hover:scale-98'>
        <div className='text-blue-dark bg-yellow font-bold py-1 px-2 mr-auto rounded-md '>
          {job.data.commitment}
        </div>
        <div className='py-8'>
          <h3 className='text-pink text-3xl mb-0 pb-0 leading-none'>{job.data.title}</h3>
          <small className='text-blue-dark font-semibold opacity-80 my-0 py-0 leading-none '>
            {job.data.location}
          </small>
        </div>
        <small className='text-wine opacity-50 text-2xs leading-tight'>
          posted on <br />
          <DateFormatter dateString={job.data.date} />
        </small>
      </article>
    </Link>
  )
}
export default Careers_Card
