import { Variants, m, LazyMotion, domAnimation } from 'framer-motion'
interface Props {
  showNavBar: boolean
}

const fadeAway: Variants = {
  hide: (delay) => ({
    opacity: 0, // Explicitly setting opacity
    transition: {
      ease: 'easeOut',
      duration: 0.05,
      delay: delay,
    },
  }),
  show: () => ({
    opacity: 1, // Explicitly setting opacity
    transition: {
      ease: 'easeOut',
      duration: 0.25,
      delay: 0.5,
    },
  }),
}

const Nav_Logo = ({ showNavBar }: Props) => {
  return (
    <LazyMotion features={domAnimation}>
      <m.svg
        xmlns='http://www.w3.org/2000/svg'
        version='1.1'
        id='Logo_Wordmark'
        viewBox={'0 0 494 138'}
        width={235}
        initial='hide'
        height={'100%'}
        animate={showNavBar ? { scale: 1, y: 0 } : { scale: 1.3, y: -11 }}
        layout
        className={
          'overflow-hidden pointer-events-none origin-top-left object-left-top transform mx-auto align-middle self-center'
        }
        preserveAspectRatio='xMaxYMin meet'
      >
        {/* P */}
        <m.path
          layout
          className={'fill-peach stroke-peach'}
          initial='show'
          d='M48.8,42.6c0-13.5-9.8-24.1-22.3-24.1c-4.9,0-9,1.4-12.3,4v-2.8h-14v63h14v-20c3.2,2.6,7.4,4,12.3,4
  	C39,66.7,48.8,56.1,48.8,42.6z M24.5,53.2c-6.1,0-10.3-4.4-10.3-10.6c0-6.3,4.1-10.6,10.2-10.6c6.1,0,10.4,4.4,10.4,10.6
  	S30.5,53.2,24.5,53.2z'
        />
        {/* IXEL */}
        <m.g
          variants={fadeAway}
          animate={showNavBar ? 'show' : 'hide'}
          custom={0.05}
          layout
          initial='hide'
        >
          <g>
            <rect
              x='53.6'
              y='19.7'
              className={'fill-peach stroke-peach'}
              width='14'
              height='45.8'
            />
            <path
              className={'fill-peach stroke-peach'}
              d='M60.2,17.2c0.1,0,0.3,0,0.4,0c2,0,4-0.8,5.5-2.2c1.6-1.5,2.6-3.6,2.7-5.8l0-0.5c-0.1-4.5-4-8.1-8.5-8
  			c-2.2,0.1-4.2,1-5.7,2.6C53,5,52.2,7.1,52.3,9.3l0,0C52.5,13.7,56,17.1,60.2,17.2z'
            />
          </g>
          <polygon
            className={'fill-peach stroke-peach'}
            points='103.7,42.1 119.7,19.7 103.4,19.7 95.6,30.7 87.8,19.7 71.4,19.7 87.3,42.1 70.7,65.5 87.1,65.5 
  		95.6,53.5 104,65.5 120.4,65.5 	'
          />
          <path
            className={'fill-peach stroke-peach'}
            d='M143.3,66.7c8.4,0,15.5-3.5,19.8-9.8l-11.3-6.9c-2,2.5-5.1,3.9-8.4,3.8l0,0c-3.5,0-7.8-0.9-9.9-5.1h31.3
		l0.2-1.2c0.3-1.4,0.4-3,0.4-4.8c0-13.7-9.9-24.1-23.1-24.1c-13.9,0-24,10.1-24,24.1C118.4,56.7,128.6,66.7,143.3,66.7z M133.2,37.1
		c1.5-3.6,4.7-5.6,9.1-5.6c2,0,6.6,0.6,8.6,5.6H133.2z'
          />
          <rect x='170.3' y='0' className={'fill-peach stroke-peach'} width='14' height='65.5' />
        </m.g>
        {/* B */}
        <m.path
          layout
          initial='show'
          animate={showNavBar ? { x: -0 } : { x: -160 }}
          transition={showNavBar ? { delay: 0.2 } : { delay: 0 }}
          className={'fill-peach stroke-peach'}
          d='M265.6,42.6c0-13.3-10-24.1-22.3-24.1c-4.9,0-9,1.4-12.3,4v-20h-14v63h14v-2.8c3.2,2.6,7.4,4,12.3,4
  	C255.8,66.7,265.6,56.1,265.6,42.6z M251.6,42.6c0,6.2-4.3,10.6-10.4,10.6c-6.1,0-10.3-4.4-10.3-10.6c0-6.3,4.1-10.6,10.3-10.6
  	C247.3,32,251.6,36.3,251.6,42.6z'
        />
        {/* AKERY */}
        <m.g
          variants={fadeAway}
          initial='hide'
          animate={showNavBar ? 'show' : 'hide'}
          custom={0.1}
          transition={{ delay: 1 }}
          layout
        >
          <path
            className={'fill-peach stroke-peach'}
            d='M316.8,65.5V19.7h-14v2.9c-3.3-2.7-7.6-4.1-12.4-4.1c-12.2,0-22.2,10.8-22.2,24.1c0,13.5,9.8,24.1,22.2,24.1
  		c4.8,0,9.1-1.4,12.4-4.1v2.9H316.8z M292.5,53.2c-6.1,0-10.3-4.4-10.3-10.6c0-6.3,4.1-10.6,10.2-10.6c6.1,0,10.4,4.4,10.4,10.6
  		S298.5,53.2,292.5,53.2z'
          />
          <polygon
            className={'fill-peach stroke-peach'}
            points='337.8,48.8 350.3,64.5 350.3,65.6 367.7,65.6 348.9,42.3 367.2,19.7 350.2,19.7 337.8,35.6 337.8,2.5 
  		323.8,2.5 323.8,65.5 337.8,65.5 	'
          />
          <path
            className={'fill-peach stroke-peach'}
            d='M396.8,49.9c-2,2.5-5.1,3.9-8.4,3.8l0,0c-3.5,0-7.8-0.9-9.9-5.1h31.3l0.2-1.2c0.3-1.4,0.4-3,0.4-4.8
		c0-13.7-9.9-24.1-23.1-24.1c-13.9,0-24,10.1-24,24.1c0,14.2,10.2,24.1,24.9,24.1c8.4,0,15.5-3.5,19.8-9.8L396.8,49.9z M378.2,37.1
		c1.5-3.6,4.7-5.6,9.1-5.6c2,0,6.6,0.6,8.6,5.6H378.2z'
          />

          <path
            className={'fill-peach stroke-peach'}
            d='M429.2,23.3v-3.7h-14v45.8h14v-22c0-3.1,0.9-5.5,2.8-7.2c2-1.8,5.2-2.7,8.5-2.2l1.7,0.2V18.8h-1.5
  		C436,18.8,431.9,20.4,429.2,23.3z'
          />
          <path
            className={'fill-peach stroke-peach'}
            d='M478.9,19.7l-8.5,25.8l-10-25.8h-15.3l18.1,43c-2,5-4.5,6.8-9.6,6.7l-1.5,0v13.2l1.4,0.1c0.6,0,1.1,0,1.6,0
  		c10.6,0,17.9-6,22.4-18.2l16.2-44.8H478.9z'
          />
        </m.g>
        {/* D */}
        <m.path
          animate={
            showNavBar
              ? { scale: 1, x: 0, y: 0, transition: { delay: 0.3 } }
              : { scale: 1.45, x: -17, y: 10 }
          }
          className={'fill-peach stroke-peach'}
          layout
          initial='hide'
          d='M48,87.1c-2.3-1.9-5.2-2.8-8.1-2.7c-8.2,0-14.7,6.9-14.7,15.8c0,8.8,6.6,15.9,14.6,15.9c0,0,0,0,0,0
  	c0.2,0,0.5,0,0.7,0c2.7,0,5.4-1,7.5-2.7v1.9h9.2V74H48V87.1z M48,100.9c-0.2,3.6-3.2,6.4-6.8,6.3c-3.7-0.2-6.7-3.1-6.7-6.7
  	c-0.1-3.8,2.9-7,6.7-7.2l0.6,0c1.8,0.1,3.4,0.9,4.6,2.2c1.2,1.3,1.7,3,1.6,4.7l0,0L48,100.9z'
        />
        {/* ESIGN */}
        <m.g variants={fadeAway} animate={showNavBar ? 'show' : 'hide'} layout initial='hide'>
          <path
            className={'fill-peach stroke-peach'}
            d='M81.8,84.5c-9.2,0-15.8,6.6-15.8,15.8c0,9.4,6.7,15.9,16.4,15.9c5.6,0,10.2-2.3,13-6.4l0.6-0.9l-7.5-4.4
  		l-0.5,0.6c-1.4,1.6-3.4,2.5-5.5,2.4l0,0c-2.3,0-5.1-0.6-6.5-3.2h20.5l0.2-0.8c0.2-1.1,0.3-2.1,0.3-3.2C97,91.3,90.4,84.5,81.8,84.5
  		z M87.5,96.7H75.8c1-2.4,3-3.7,6-3.7C84.3,92.9,86.5,94.4,87.5,96.7z'
          />
          <path
            className={'fill-peach stroke-peach'}
            d='M117.3,96.2c-2-0.6-4.1-1.1-4.2-2c0-1,1.4-1.3,2.3-1.3c1.6,0,2.9,0.9,3.6,2.3l0.4,1l8.1-4.4l-0.5-0.9
  		c-2.4-4.1-6.8-6.6-11.6-6.5c-6.9,0-11.7,4.1-11.7,10c0,6.8,6,8.5,10.3,9.7c2.1,0.6,4.2,1.2,4.2,2.1c0,1.3-2.2,1.4-3,1.4
  		c-2,0.2-3.8-1.1-4.5-3l-0.4-1.1l-8.1,4.7l0.4,0.8c2.2,4.7,6.7,7.3,12.7,7.3c7.4,0,12.3-4,12.3-10C127.7,99,121.5,97.3,117.3,96.2z'
          />
          <g>
            <rect
              x='136'
              y='85.3'
              className={'fill-peach stroke-peach'}
              width='9.2'
              height='30.2'
            />
            <circle className={'fill-peach stroke-peach'} cx='140.7' cy='78.4' r='5.5' />
          </g>
          <path
            className={'fill-peach stroke-peach'}
            d='M177.2,87.2c-2.2-1.9-5-2.9-8-2.8h-0.3c-4,0.1-7.7,1.7-10.5,4.6c-2.8,2.9-4.3,6.8-4.2,10.8
  		c0,8.6,6.6,15.4,15,15.4c3,0.1,5.8-0.9,8-2.8v0.5c0,3.8-2.3,5.9-6.4,5.9c-3.9,0-5.4-1.4-6.5-3.4l-0.5-0.9l-7.9,4.6l0.5,0.9
  		c2.6,4.8,7.6,7.4,14.2,7.4c7.8,0,15.6-4.5,15.6-14.4V85.3h-8.9V87.2z M177,100.4c-0.1,1.7-0.8,3.3-2.1,4.5
  		c-1.3,1.2-2.9,1.8-4.7,1.7H170c-1.8,0-3.5-0.8-4.8-2.1c-1.3-1.3-2-3.1-1.9-4.9c0-1.8,0.8-3.5,2.1-4.8c1.3-1.3,3-2,4.9-1.9
  		c1.8,0,3.5,0.8,4.8,2.1c1.3,1.3,2,3.1,1.9,4.9l0,0L177,100.4z'
          />
          <path
            className={'fill-peach stroke-peach'}
            d='M212.8,84.5c-2.9,0-5.5,0.8-7.4,2.4v-1.6h-9.2v30.2h9.2V99.3c0-3.9,1.8-6,5.2-6c2.9,0,4.6,1.7,4.6,4.8v17.3
  		h9.2V97.1C224.4,89.5,219.7,84.5,212.8,84.5z'
          />
        </m.g>
        {/* S */}
        <m.path
          initial='hide'
          animate={
            showNavBar
              ? { scale: 1, x: 0, y: 0, transition: { delay: 0.3, custom: 2 } }
              : { scale: 1.6, x: -185, y: 8, transition: { delay: 0.2 } }
          }
          layout
          className={'fill-peach stroke-peach'}
          d='M266.7,96.2c-2-0.6-4.1-1.1-4.1-2c0-1.2,1.8-1.3,2.2-1.3c1.6,0,2.9,0.9,3.6,2.3l0.4,1l8.1-4.4l-0.5-0.9
  	c-2.4-4.1-6.8-6.6-11.6-6.5c-6.9,0-11.7,4.1-11.7,10c0,6.8,6,8.5,10.3,9.7c2.1,0.6,4.2,1.2,4.2,2.1c0,1.3-2.2,1.4-3,1.4
  	c-2,0.2-3.8-1.1-4.5-3l-0.4-1.1l-8.1,4.7l0.4,0.8c2.2,4.7,6.7,7.3,12.7,7.3c7.4,0,12.3-4,12.3-10C277,99,270.8,97.3,266.7,96.2z'
        />
        {/* TUDIO */}
        <m.g variants={fadeAway} animate={showNavBar ? 'show' : 'hide'} layout initial='hide'>
          <path
            className={'fill-peach stroke-peach'}
            d='M296.6,106.4c-0.1-0.1-0.4-0.4-0.4-1.4V94.3h6.2v-9h-6.3V77l-9.2,2.8v5.4H282v9h4.9V105c0,4,0.9,6.6,2.8,8.4
  		c1.8,1.6,4.4,2.3,8.1,2.3c1.2,0,2.4-0.1,3.8-0.2l0.9-0.1v-8.5l-1,0.1C299.2,107,297.3,107,296.6,106.4z'
          />
          <path
            className={'fill-peach stroke-peach'}
            d='M330.2,101.5c0,3.9-1.8,6-5.2,6c-2.9,0-4.6-1.7-4.6-4.8V85.3h-9.2v18.2c0,7.6,4.7,12.7,11.6,12.7
  		c3,0,5.5-0.8,7.4-2.4v1.7h9.2V85.3h-9.2V101.5z'
          />
          <path
            className={'fill-peach stroke-peach'}
            d='M370.9,87.1c-2.3-1.9-5.2-2.8-8.1-2.7c-8.2,0-14.6,6.9-14.6,15.8c0,8.8,6.6,15.9,14.6,15.9c0,0,0,0,0,0
  		c0.2,0,0.5,0,0.7,0c2.7,0,5.4-1,7.5-2.7v1.9h9.2V74h-9.3V87.1z M371,100.8c0,0.1,0,0.1,0,0.1c-0.2,3.6-3.2,6.4-6.8,6.3
  		c-3.7,0-6.7-3-6.8-6.6c0-1.8,0.6-3.5,1.9-4.8c1.2-1.3,2.9-2,4.8-2.1c0.1,0,0.1,0,0.2,0c3.6,0,6.6,2.9,6.7,6.6l0,0.2L371,100.8z'
          />
          <g>
            <circle className={'fill-peach stroke-peach'} cx='395.1' cy='78.4' r='5.5' />
            <polygon
              className={'fill-peach stroke-peach'}
              points='390.5,115.5 399.7,115.5 399.7,85.3 390.4,85.3 		'
            />
          </g>
          <path
            className={'fill-peach stroke-peach'}
            d='M424.3,84.6c-8.8,0-15.9,7.1-15.9,15.8v0.3c0.1,4.2,1.7,8.2,4.7,11.1c2.9,2.9,6.8,4.5,10.9,4.5
  		c0.1,0,0.1,0,0.2,0c8.8,0,15.9-7.1,15.9-15.8C440.1,91.7,433,84.6,424.3,84.6z M424.1,94c0.1,0,0.1,0,0.2,0c3.6,0,6.5,2.8,6.6,6.4
  		v0.5c-0.1,3.5-3,6.3-6.4,6.3c-0.1,0-0.1,0-0.2,0c-3.6,0-6.5-2.9-6.6-6.4C417.6,97.1,420.5,94,424.1,94z'
          />
        </m.g>
      </m.svg>
    </LazyMotion>
  )
}

export default Nav_Logo
