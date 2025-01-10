import Image from 'next/image'
import Link from 'next/link'
import { Pill } from '@parts'
import cn from 'classnames'
import type { Tutorial } from '@/types/tutorials'

interface Props {
  tutorial: Tutorial
  aspectW: string
  aspectH: string
}

const Education_MadeToOrder_Card = ({ tutorial, aspectW, aspectH }: Props) => {
  return (
    <Link
      as={`/education/tutorials/${tutorial.filePath.replace(/\.mdx?$/, '')}`}
      href={`/education/tutorials/[slug]`}
    >
      <>
        <div
          className={cn(
            'bg-blue cursor-pointer rounded-lg overflow-hidden transform transition-all duration-500 hover:scale-98',
            `aspect-w-${aspectW}`,
            `aspect-h-${aspectH}`,
          )}
        >
          <Image
            src={`${tutorial.frontMatter.coverImage}`}
            placeholder='blur'
            width={300}
            height={400}
            blurDataURL={`${tutorial.frontMatter.coverImage}`}
            quality={50}
            className='object-cover w-full h-full bg-blue'
            alt={`cover photo for ${tutorial.frontMatter.title}`}
          />

          <div className='mt-2 ml-2'>
            <Pill
              text={tutorial.frontMatter.category}
              bgColor={'blue'}
              textColor={'cream'}
              size='xs'
            />
          </div>
        </div>
        <div className='z-20 flex flex-col justify-between p-2 mt-2 cursor-pointer h-100'>
          <div className=''>
            <h3 className='font-semibold leading-none text-md md:text-xl text-wine line-clamp-3'>
              {tutorial.frontMatter.title}
            </h3>
          </div>
        </div>
      </>
    </Link>
  )
}

export default Education_MadeToOrder_Card
