import Image from 'next/image'
import Link from 'next/link'
import { Pill } from '@parts'
import cn from 'classnames'

interface TutorialData {
  coverImage: string
  title: string
  category: string
}

interface Tutorial {
  filePath: string
  data: TutorialData
}

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
            'bg-blue  cursor-pointer rounded-lg overflow-hidden transform transition-all duration-500 hover:scale-98  ',
            `aspect-w-${aspectW}`,
            `aspect-h-${aspectH}`,
          )}
        >
          <Image
            src={`${process.env.NEXT_PUBLIC_IMG_PREFIX}${tutorial.data.coverImage}`}
            placeholder='blur'
            width={300}
            height={400}
            blurDataURL={`${process.env.NEXT_PUBLIC_IMG_PREFIX}${tutorial.data.coverImage}`}
            quality={50}
            className='object-cover w-full h-full bg-blue'
            alt={`cover photo for ${tutorial.data.title}`}
          />

          <div className='mt-2 ml-2'>
            <Pill
              text={tutorial.data.category.toString()}
              bgColor={'blue'}
              textColor={'cream'}
              size='xs'
            />
          </div>
        </div>
        <div className='z-20 flex flex-col justify-between p-2 mt-2 cursor-pointer h-100'>
          <div className=''>
            <h3 className='font-semibold leading-none text-md md:text-xl text-wine line-clamp-3'>
              {tutorial.data.title}
            </h3>
          </div>
        </div>
      </>
    </Link>
  )
}
export default Education_MadeToOrder_Card
