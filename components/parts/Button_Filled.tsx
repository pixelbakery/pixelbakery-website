import Link from 'next/link'
import { ChevronRightIcon, DownloadIcon } from 'components/icons/Icons_UI/index'
import cn from 'classnames'
import {
  textColorVariants,
  TextColorVariant,
  backgroundColorVariants,
  backgroundColorVariant,
} from '@lib/colorHelper'
import { Chevron, ChevronType } from '@lib/chevronHelper'
interface Props {
  text: string
  link: string
  center: boolean
  bgColor: backgroundColorVariant
  textColor: TextColorVariant
  className?: string
  chevronDirection: ChevronType
}

function Button_Filled({
  center,
  text,
  link,
  textColor = 'pink-lighter',
  bgColor = 'peach',
  chevronDirection,
  className,
}: Props) {
  return (
    <Link
      hrefLang={'en-US'}
      href={link}
      className={cn(
        'block my-3 py-3 rounded-lg px-6 max-w-sm  hover-99',
        `${backgroundColorVariants[bgColor]}`,
        {
          ['mx-auto']: center,
          [`${className}`]: className,
        },
      )}
    >
      <div
        className={cn(
          'font-geologica font-bold text-xl lowercase flex flex-row ',
          `${textColorVariants[textColor]}`,
        )}
      >
        <span
          // className={`-mt-[0.1em] py-0 text-center flex-grow self-center tracking-wide ${textColorVariants[textColor]} `}
          className={cn(
            '-mt-[0.1em] py-0 text-center flex-grow self-center  tracking-wide ',
            `${textColorVariants[textColor]}`,
          )}
        >
          {text}
        </span>

        <i
          className={cn(
            'p-2 self-center',
            `${Chevron[chevronDirection]}`,
            `${textColorVariants[textColor]}`,
          )}
        >
          {chevronDirection === 'download' ? <DownloadIcon /> : <ChevronRightIcon />}
        </i>
      </div>
    </Link>
  )
}

export default Button_Filled
