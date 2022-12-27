import Image from 'next/image'
import Link from 'next/link'
import Pill from './Pill'

function Card_Rounded(props) {
  const aspectW = ' aspect-w-' + props.aspectW
  const aspectH = ' aspect-h-' + props.aspectY
  return (
    <Link hrefLang={'en-US'} href={props.link}>
      <article
        className={
          'bg-blue cursor-pointer rounded-lg overflow-hidden transform transition-all duration-500 hover:scale-98  ' +
          aspectW +
          aspectH
        }
      >
        <Image
          alt={props.imgAlt}
          src={`${process.env.NEXT_PUBLIC_IMG_PREFIX}${props.img}`}
          layout='fill'
          objectFit='cover'
          placeholder='blur'
          blurDataURL={`${process.env.NEXT_PUBLIC_IMG_PREFIX}${props.img}`}
          quality={75}
        />
        <div className={'absolute w-100 h-100 bg-gradient-to-r from-blue-dark  opacity-25'} />
        <div
          className={
            'absolute w-100 h-100 bg-gradient-to-t via-transparent from-blue-dark  opacity-25'
          }
        ></div>
        <div className=' z-20 h-100 p-6 flex flex-col justify-between'>
          {props.tags ? (
            <div className='-py-3 flex flex-wrap flex-row  gap-4'>
              {props.tags.map((tag) => (
                <Pill
                  text={tag}
                  bgColor={props.tagBgColor}
                  textColor={props.tagtextColor}
                  size='sm'
                  key={tag}
                />
              ))}
            </div>
          ) : (
            <div></div>
          )}

          <div className=''>
            <div className='text-sm text-white'>{props.subhead}</div>
            <h3 className='text-2xl text-white'>{props.head}</h3>
          </div>
        </div>
      </article>
    </Link>
  )
}
export default Card_Rounded
