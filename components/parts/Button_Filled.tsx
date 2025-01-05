import Link from 'next/link'
import cn from 'classnames'
import { usePlausible } from 'next-plausible'
import { ChevronRightIcon, DownloadIcon } from '@icons'
import {
  textColorVariants,
  TextColorVariant,
  backgroundColorVariants,
  backgroundColorVariant,
} from '@lib/colorHelper'
import { Chevron, ChevronType } from '@lib/chevronHelper'

interface CustomEvents {
  [key: string]: any // index signature for optional events
  buttonClick: { label: string }
  download: { fileName: string }
}

interface Props {
  text: string
  link: string
  center: boolean
  bgColor: backgroundColorVariant
  textColor: TextColorVariant
  className?: string
  chevronDirection: ChevronType
  plausibleEventName?: string
  plausibleEventProps?: Record<string, string | number | boolean>
}

function Button_Filled({
  text,
  link,
  center,
  bgColor,
  textColor,
  className,
  chevronDirection,
  plausibleEventName,
  plausibleEventProps,
}: Props) {
  const plausible = usePlausible<CustomEvents>()

  const handleClick = () => {
    if (plausibleEventName) {
      plausible(plausibleEventName, { props: plausibleEventProps })
    }
  }

  return (
    <Link
      href={link}
      hrefLang='en-US'
      className={cn(
        'block my-3 py-3 rounded-lg px-6 max-w-sm hover-99',
        backgroundColorVariants[bgColor],
        { 'mx-auto': center },
        className,
      )}
    >
      {/* Child element that handles the click event */}
      <span
        onClick={plausibleEventName ? handleClick : undefined}
        className={cn(
          'font-geologica font-bold text-xl lowercase flex flex-row',
          textColorVariants[textColor],
        )}
      >
        <span
          className={cn(
            '-mt-[0.1em] py-0 text-center flex-grow self-center tracking-wide',
            textColorVariants[textColor],
          )}
        >
          {text}
        </span>
        <i
          className={cn('p-2 self-center', Chevron[chevronDirection], textColorVariants[textColor])}
        >
          {chevronDirection === 'download' ? <DownloadIcon /> : <ChevronRightIcon />}
        </i>
      </span>
    </Link>
  )
}

export default Button_Filled
