import H3 from '@typography/H3'
import Image from 'next/image'
import Link from 'next/link'
function Services_Related_Card({ project }) {
  return (
    <Link href={'/'} passHref>
      <article className='  portfolio-project hover:opacity-90 hover:scale-99 duration-300 cursor-pointer'>
        <div className='relative aspect-w-4 aspect-h-3 xl:aspect-w-2  xl:aspect-h-3  w-full '>
          <Image
            layout='fill'
            objectFit='cover'
            src={project.previewImg}
            className='w-full h-full object-center object-cover'
            alt={project.previewImgAlt}
          />
        </div>
        <div className='relative w-full h-full  '>
          <div className=' py-4 inline-block'>
            <p className=' font-medium text-sm leading-none my-0  mb-0 pb-0  text-wine '>
              {project.client}
            </p>
            <H3 color='wine' className='mt-0 pt-0 leading-none'>
              {project.name}
            </H3>
          </div>
        </div>
      </article>
    </Link>
  )
}
export default Services_Related_Card
