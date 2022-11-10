import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Nav_HamburgerNav from '@nav/Nav_HamburgerMenu'
gsap.registerPlugin(ScrollTrigger)

export default function Navbar() {
  const logoWrapper = useRef(null)
  const hamRef = useRef(null)
  const logo = useRef(null)

  const line1 = useRef(null)
  const line2 = useRef(null)

  const p = useRef(null)
  const b = useRef(null)
  const d = useRef(null)
  const s = useRef(null)

  const ixel = useRef(null)
  const akery = useRef(null)
  const esign = useRef(null)
  const udio = useRef(null)

  const el = useRef()
  const q = gsap.utils.selector(el)
  //logo hover

  function handleMouseEnterLogo(e) {
    if (e.target) {
      gsap.to(line1.current, { scale: 1.05, ease: 'power2.out', duration: 0.17 })
      gsap.to(line2.current, { scale: 0.8, ease: 'power2.out', duration: 0.17 })
      gsap.to(line1.current, { scale: 1, ease: 'power2.in', duration: 0.17, delay: 0.06 })
      gsap.to(line2.current, { scale: 0.75, ease: 'power2.in', duration: 0.17, delay: 0.06 })
    } else return
  }

  //scrolly stuff
  useEffect(() => {
    gsap.set(logo.current, { y: -140, scale: 0.8 })
    gsap.set(logoWrapper.current, { height: 80, width: 300, ease: 'back.inOut' })
    gsap.set(line2.current, { scale: 0.75, x: -26, y: -12, duration: 0.25 })
    gsap.set(ixel.current, { autoAlpha: 1 })

    gsap.to(logo.current, {
      delay: 0.25,
      duration: 1.25,
      autoAlpha: 1,
      y: 0,
      ease: 'back.inOut(2.5)',
    })

    gsap.to(hamRef.current, {
      delay: 0.25,
      duration: 1.25,
      autoAlpha: 1,
      y: 0,
      ease: 'back.inOut(2.5)',
    })
    let tl_logo = gsap.timeline({
      paused: true,
      defaults: { duration: 0.33, ease: 'back.inOut(1)' },
    })
    tl_logo.to(ixel.current, { opacity: 0, autoAlpha: 0 }, '<25%')
    tl_logo.to(akery.current, { opacity: 0, autoAlpha: 0 }, '<25%')
    tl_logo.to(esign.current, { opacity: 0, autoAlpha: 0 }, '<25%')
    tl_logo.to(udio.current, { opacity: 0, autoAlpha: 0 }, '<25%')
    tl_logo.to(b.current, { x: -92, duration: 0.25 }, '<5%')
    tl_logo.to(d.current, { scale: 1.35, y: 4, x: -8, duration: 0.33 }, '<25%')
    tl_logo.to(s.current, { scale: 1.35, y: 4, x: -141, duration: 0.33 }, '<33%')
    tl_logo.to(line2.current, { y: -12, duration: 0.25 }, '<')
    tl_logo.to(logo.current, { scale: 1.02 }, '<')
    tl_logo.to(logo.current, { height: 124, width: 90, ease: 'sine.out' }, '<25%')
    tl_logo.to(logoWrapper.current, { x: -8, y: 4 }, '<')

    ScrollTrigger.create({
      start: `${window.innerHeight / 2} top`,
      end: 'max',
      // markers: true,
      onToggle(self) {
        // prevent toggling when at the bottom of page
        if (self.progress === 1) return
        if (self.isActive) {
          tl_logo.play()
        } else {
          tl_logo.reverse()
        }
      },
    })
    return () => {
      tl_logo.kill()
      ScrollTrigger.killAll()
      gsap.killTweensOf(logoWrapper.current)
      gsap.killTweensOf(hamRef.current)
      gsap.killTweensOf(logo.current)
      gsap.killTweensOf(line1.current)
      gsap.killTweensOf(line2.current)
      gsap.killTweensOf(p.current)
      gsap.killTweensOf(b.current)
      gsap.killTweensOf(d.current)
      gsap.killTweensOf(s.current)
      gsap.killTweensOf(ixel.current)
      gsap.killTweensOf(akery.current)
      gsap.killTweensOf(esign.current)
      gsap.killTweensOf(udio.current)
      gsap.killTweensOf(el.current)
    }
  }, [])

  return (
    <>
      <div ref={el} className={'z-40'}>
        <div className='navItem origin-top-left ml-8 mt-8 fixed top-0 left-0 z-40 '>
          <div
            ref={logo}
            className='bg-cream rounded-md origin-top-left hidden xl:block  '
            onMouseEnter={handleMouseEnterLogo}
          >
            <Link
              hrefLang={'en-US'}
              href={'/'}
              className='pointer-events-auto block relative  h-full w-full z-50 px-4 pt-3 my-0'
            >
              <div
                ref={logoWrapper}
                className=' relative z-20 top-0 bg-none text-peach font-extrabold rounded-md px-2 text-5xl leading-none inline-block'
              >
                <div
                  ref={line1}
                  className='relative block overflow-visible tracking-normal text-left whitespace-nowrap'
                >
                  <span ref={p} className='inline-block'>
                    p
                  </span>
                  <span ref={ixel} className='inline-block'>
                    ixel{' '}
                  </span>
                  <span ref={b} className='inline-block ml-3'>
                    b
                  </span>
                  <span ref={akery} className='inline-block'>
                    akery
                  </span>
                </div>
                <div
                  ref={line2}
                  className='relative block tracking-wide  text-left whitespace-nowrap'
                >
                  <span ref={d} className='inline-block'>
                    d
                  </span>
                  <span ref={esign} className='inline-block'>
                    esign{' '}
                  </span>
                  <span ref={s} className='inline-block ml-3'>
                    s
                  </span>
                  <span ref={udio} className='inline-block'>
                    tudio
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className=' overflow-visible mt-8 mr-8 fixed top-0 right-0 z-50 flex justify-end gap-x-6'>
          <div ref={hamRef} className=' navItem'>
            <Nav_HamburgerNav isActive={undefined} onModalUpdate={undefined} />
          </div>
        </div>
      </div>

      <div
        className=' z-50 xl:hidden absolute bg-egg rounded-lg px-3 py-2 top-8 left-8 pointer-events-auto transform transition-all duration-400 hover:scale-105'
        id='mobile-logo'
      >
        <Link
          hrefLang={'en-US'}
          href={'/'}
          className='text-4xl font-extrabold text-peach leading-none'
        >
          <div>pb</div>
          <div>ds</div>
        </Link>
      </div>
    </>
  )
}
