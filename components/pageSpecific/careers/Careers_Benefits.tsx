import Link from 'next/link'
import PageSection from '@parts/PageSection'
import InnerWrapper from '@parts/InnerWrapper'

const Careers_Benefits = () => {
  return (
    <PageSection color='pink-lighter' id='careers-benefits'>
      <InnerWrapper className='container grid grid-cols-1 md:grid-cols-5 gap-20 mx-auto py-4 max-w-7xl'>
        <div className='col-span-2'>
          <h2 className='text-pink text-right mb-1 pb-1'>benefits</h2>
          <h4 className='my-0 py-0 text-right text-2xl text-blue font-extrabold'>nice.</h4>
        </div>
        <div className='col-span-3 flex flex-col justify-between mx-auto w-full gap-12'>
          <div className='mx-4 px-4'>
            <div>
              <ul
                className='text-blue font-body font-bold text-lg relative benefitslist'
                id='awardslist1'
              >
                <li className='my-3 benefit'>🐶 office dogs</li>
                <li className='my-3 benefit'>🎂 paid birthdays off </li>
                <li className='my-3 benefit'>
                  👩‍⚕️ out-of-state reproductive healthcare travel reimbursement
                </li>
                <li className='my-3 benefit'>💸 4% 401k match</li>
                <li className='my-3 benefit'>
                  ☕️ open tab at{' '}
                  <Link hrefLang={'en-US'} href='https://reactor.coffee' target='_blank'>
                    Reactor Coffee
                  </Link>
                </li>
                <li className='my-3 benefit'>📚 monthly book stipend</li>
                <li className='my-3 benefit'>🤒 1 week sick leave per year</li>
                <li className='my-3 benefit'>🧘‍♀️ 2 mental health days per year</li>
                <li className='my-3 benefit'>🎊 paid holidays</li>
                <li className='my-3 benefit'>🏝 2 weeks vacation per year</li>
                <li className='my-3 benefit'>🍪 office snacks</li>
                <li className='my-3 benefit'>🏋️‍♂️ 50% gym membership reimbursement</li>
                <li className='my-3 benefit'>
                  👩‍💻 free personal website domain and hosting… forever
                </li>
                <li className='my-3 benefit'>
                  📹 access to pb&apos;s camera equipment and studio for personal use
                </li>
                <li className='my-3 benefit'>🐣 12 weeks paid maternity/paternity leave</li>
              </ul>
            </div>
          </div>
        </div>
      </InnerWrapper>
    </PageSection>
  )
}

export default Careers_Benefits
