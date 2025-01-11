import Link from 'next/link'
import { InnerWrapper, PageSection, StrokeText } from '@parts'
import { H2 } from '@typography'
import cn from 'classnames'

import SocialUrls_Contact from '@data/SocialUrls_Contact'

function Contact_HangOut() {
  return (
    <PageSection className='overflow-visible ' id={'socials'}>
      <InnerWrapper>
        <div className='w-full flex flex-col justify-center  overflow-visible animate-horizontal'>
          <div className=' text-center self-center mx-auto'>
            <h2 className='l text-effect text-x' data-text="LET'S HANG OUT">
              LET'S HANG OUT
            </h2>
          </div>

          <div className='self-center'>
            <ul className='justify-center flex flex-wrap gap-8 mt-24 lg:gap-x-16'>
              {SocialUrls_Contact.map((URL, index) => {
                return (
                  <li key={URL.name} className={cn('')}>
                    <Link hrefLang={'en-US'} href={URL.url}>
                      <StrokeText
                        text={URL.name}
                        index={index}
                        fontSize={'text-3xl lg:text-6xl'}
                        strokeWidth={'stroke-1'}
                        color={'blue-dark'}
                        fontWeight={'font-black'}
                        active={false}
                      />
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </InnerWrapper>
    </PageSection>
  )
}
export default Contact_HangOut
