import Image from 'next/image'
import clientList from '@data/work-client-list'
import PageSection from '@parts/PageSection'
import InnerWrapper from '@parts/InnerWrapper'
import Lead from '@typography/Lead'
import H2 from '@typography/H2'
import Link from 'next/link'

function Work_Clients() {
  const activeClients = clientList.filter((client) => client.active)
  return (
    <PageSection id={'clients'} color={'white'}>
      <InnerWrapper>
        <div className='mb-12'>
          <H2 color={'peach'}>Our lovely clients</H2>
          <Lead color='blue-dark'>
            Our story wouldn’t exist if it weren’t for all of the wonderful clients that have been
            on this journey with us.
          </Lead>
          <p>
            From initial discovery meetings to seeing the final product, we thrive in bringing a
            client’s vision to life. Check out some of our past and present clients below.
          </p>
        </div>
        <div className='mt-3 grid grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-x-12 lg:gap-x-0'>
          {activeClients.map((client, index) => (
            <div key={index} className='col-span-1'>
              <Link hrefLang={'en-US'} href={client.url} passHref legacyBehavior>
                <div className='cursor-pointer duration-300 hover:scale-99 ease-in-out relative w-full h-32'>
                  <Image
                    layout='fill'
                    objectFit='contain'
                    src={`${process.env.NEXT_PUBLIC_IMG_PREFIX}${client.logo}`}
                    alt={client.client}
                    className='w-full'
                    quality={25}
                    placeholder='blur'
                    blurDataURL={`${process.env.NEXT_PUBLIC_IMG_PREFIX}${client.logo}`}
                  />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </InnerWrapper>
    </PageSection>
  );
}
export default Work_Clients
