import { dateFormatter } from '@lib'
import Link from 'next/link'
interface JobData {
  title: string
  commitment: string
  location: string
  date: string | Date
}

interface Job {
  filePath: string
  data: JobData
}

interface CareersCardProps {
  job: Job
}
function Careers_Card({ job }: CareersCardProps) {
  return (
    <Link
      hrefLang={'en-US'}
      as={`/careers/${job.filePath.replace(/\.mdx?$/, '')}`}
      href={`/careers/[slug]`}
      className='col-span-1'
    >
      <article className='flex flex-col justify-between w-full h-full px-3 py-4 duration-300 border-4 rounded-lg cursor-pointer border-pink hover:scale-98'>
        <div className='px-2 py-1 mr-auto font-bold rounded-md text-blue-dark bg-yellow '>
          {job.data.commitment}
        </div>
        <div className='py-8'>
          <h3 className='pb-0 mb-0 text-3xl leading-none text-pink'>{job.data.title}</h3>
          <small className='py-0 my-0 font-semibold leading-none text-blue-dark opacity-80 '>
            {job.data.location}
          </small>
        </div>
        <small className='leading-tight opacity-50 text-wine text-2xs'>
          posted on <br />
          {dateFormatter({ dateString: job.data.date })}
        </small>
      </article>
    </Link>
  )
}
export default Careers_Card
