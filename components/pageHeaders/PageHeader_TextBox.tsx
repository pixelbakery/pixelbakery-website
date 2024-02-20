import cn from 'classnames'
import H1 from '@typography/H1'

import {
  backgroundColorVariants,
  backgroundColorVariant,
  textColorVariants,
  TextColorVariant,
} from '@lib/colorHelper'
interface Props {
  backgroundColor: backgroundColorVariant
  header: string
  headerColor: TextColorVariant
  subheader: string
  subheaderColor: TextColorVariant
  loading: boolean
}
const PageHeader_TextBox = ({
  backgroundColor,
  header,
  headerColor,
  subheader,
  subheaderColor,
  loading,
}: Props) => {
  return (
    <div
      className={
        'z-10 relative py-16  2xl:my-20 h-full flex flex-col justify-center  transition-all duration-700'
      }
    >
      <div
        className={cn(
          'my-20 max-w-sm  sm:max-w-md md:max-w-lg lg:max-w-3xl py-12 flex justify-center transition-all duration-700 bg-egg opacity-0',
          {
            [`${backgroundColorVariants[backgroundColor]} opacity-100`]: !loading,
            [`bg-egg opacity-0`]: loading,
          },
        )}
      >
        <div className='w-fit px-6 mx-12'>
          <H1 color={headerColor}>{header}</H1>
          <div
            className={cn(
              'lowercase 2xl:my-2 text-2xl font-bold italic transition-all duration-700',
              [`${textColorVariants[subheaderColor]}`],
            )}
          >
            {subheader}
          </div>
        </div>
      </div>
    </div>
  )
}
export default PageHeader_TextBox
