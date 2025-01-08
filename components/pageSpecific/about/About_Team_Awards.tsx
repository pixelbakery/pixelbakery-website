
import cn from 'classnames'
import { H2, H3 } from '@typography'
import {InnerWrapper, PageSection} from '@parts'
import type {Award } from '@/types/people'
import Link from 'next/link'
interface EmployeeAwardsProps {
  awards: Award[]
  name: string
}


export default function EmployeeAwards({ awards, name }: EmployeeAwardsProps) {
  if (awards.length === 0) return null
  const [firstName] = name.split(' ') // Extract the first name
  return (
<PageSection id={'awards'} color='blue'>
      <InnerWrapper className="mx-auto">
        <div className='w-full grid grid-cols-6 space-y-1 xl:grid-cols-7 gap-x-12'>
          <div className='col-span-6 xl:col-span-3'>
            <H2 className='text-balance  uppercase mb-6 xl:mb-4' color='cream' >
              {` Awards ${firstName} has won`}
            </H2>
          </div>
          <div className="col-span-6 xl:col-span-4">
            <ul
              className={cn(
                'w-full flex flex-col py-0 my-0 text-xl list-none list-outside divide-y divide-solid divide-blue-darker font-geologica text-blue-darker gap-y-0 md:gap-y-2 lg:gap-y-2 first',
              )}
            >
              {awards.map((award, idx) => (
                <li key={idx} className='w-full pt-3 mb-1 lg:pt-3 lg:mb-3  text-blue-darker first:pt-0 last:mb-0'>
                    <span className='text-balance font-bold'>{award.name}</span>
                    {' for '}
                    <br className='md:hidden'/>
                    <Link
                      href={award.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-balance text-blue-darker underline hover:opacity-75'
                    >
                      {award.project}
                    </Link>,
                    <p className='mt-1 text-balance xl:ml-5 italic text-blue-dark md:my-0 py-0 leading-none'><span className='font-semibold'>{award.client}</span>, {award.role}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </InnerWrapper>
</PageSection
>
  )
}