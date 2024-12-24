import CustomImage from '@parts/CustomImage'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import Link from 'next/link'

const Footer_Poptart = () => {
  return (
    <div>
      <Link
        href={'/'}
        className='relative flex justify-center lg:pr-8 justify-self-center lg:justify-start'
      >
        <LazyMotion features={domAnimation}>
          <m.div
            className=''
            animate={{
              translateY: [24, -12, 24],
            }}
            transition={{
              duration: 8,
              ease: 'easeInOut',
              times: [1, 1, 1, 1],
              repeat: Infinity,
              repeatDelay: 0,
            }}
          >
            <m.div
              animate={{
                rotate: [6, -12, 6],
              }}
              transition={{
                duration: 32,
                ease: 'easeInOut',
                times: [4, 4, 4, 4],
                repeat: Infinity,
                repeatDelay: 0,
              }}
            >
              <CustomImage
                src={`/img/icons/doodles/PB_ColorIcon_PopTart.svg`}
                width={218}
                height={278}
                className={
                  'transform scale-[0.66] md:scale-100 rotate-6 origin-center w-full block relative'
                }
                alt={'Pixel Bakery Design Studio'}
              />
            </m.div>
          </m.div>
          <span className='sr-only'>Home</span>
        </LazyMotion>
      </Link>
    </div>
  )
}

export default Footer_Poptart
