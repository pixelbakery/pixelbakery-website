import { H3 } from '@typography'
import MenuLink from './MenuLink'
interface MoreLinksProps {
  update: () => void
}

const MoreLinks = ({ update }: MoreLinksProps) => {
  return (
    <div className='hidden xl:block'>
      <div>
        <div className='hidden max-w-xs mb-4 border-b-4 lg:block lg:mt-4 border-blue-dark md:pr-4'>
          <H3 className='mt-0 text-3xl font-extrabold leading-none md:text-left' color='blue-dark'>
            more stuff
          </H3>
        </div>
        <nav>
          <ul className='grid grid-cols-1 mt-3 mb-0 lg:grid-cols-1 w-fit align-center gap-y-2 gap-x-3 text-blue-dark'>
            <MenuLink
              href='https://clients.pixelbakery.com'
              text='Client Portal'
              update={update}
              external
            />
            <MenuLink href='/careers' text='Careers' update={update} />
            <MenuLink href='/logo-animation' text='Motion Mixer' update={update} />
            <MenuLink
              href='https://nebraskacreative.com'
              text='Nebraska Creative'
              update={update}
              external
            />
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default MoreLinks
