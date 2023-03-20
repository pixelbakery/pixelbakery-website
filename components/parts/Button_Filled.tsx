import Link from 'next/link'
import { ChevronRightIcon, DownloadIcon } from '@images/UI_Icons/index'
import cn from 'classnames'

interface Props {
  text: string
  link: string
  center: boolean
  bgColor: string
  textColor: string
  chevronDirection: string
  className?: string
}

function Button_Filled({
  center,
  text,
  link,
  textColor,
  bgColor,
  chevronDirection,
  className,
}: Props) {
  let chevronRotation = ''
  if (chevronDirection === 'right') {
    chevronRotation = ''
  } else if (chevronDirection === 'down') {
    chevronRotation = 'rotate-90'
  } else if (chevronDirection === 'left') {
    chevronRotation = 'order-first rotate-180'
  } else if (chevronDirection === 'up') {
    chevronRotation = ' -rotate-90'
  } else if (chevronDirection === 'download') {
    chevronRotation = ''
  } else {
    chevronRotation = ''
  }
  return (
    <Link
      hrefLang={'en-US'}
      href={link}
      className={cn('block my-3 py-3 rounded-lg px-6 max-w-sm  hover-99', `bg-${bgColor}`, {
        ['mx-auto']: center,
        [`${className}`]: className,
      })}
    >
      <div className={cn(' font-bold text-xl lowercase flex flex-row')}>
        <span
          className={cn(
            '-mt-[0.1em] py-0 text-center flex-grow self-center  tracking-wide',
            `text-${textColor}`,
          )}
        >
          {text}
        </span>

        <i className={cn('p-2 self-center ', chevronRotation, `text-${textColor}`)}>
          {chevronDirection === 'download' ? <DownloadIcon /> : <ChevronRightIcon />}
        </i>
      </div>
    </Link>
  )
}

export default Button_Filled
