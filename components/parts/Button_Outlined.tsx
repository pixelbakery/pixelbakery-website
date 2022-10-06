import Link from 'next/link'
import { ChevronRightIcon, DownloadIcon, CloseIcon } from '@images/UI_Icons/index'
import cn from 'classnames'

type Props = {
  text: string
  link: string
  center?: boolean
  color: string
  chevronDirection?: string
}

function Button_Filled({ center, text, link, color, chevronDirection }: Props) {
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
    <Link hrefLang={'en-US'} href={link} passHref>
      <a
        className={cn(
          'block relative my-3 py-3 rounded-sm px-6 w-full max-w-sm  text-center cursor-pointer transition-all ease-in-out duration-400 hover:scale-99 drop-shadow-sm hover:drop-shadow-xs',
          `border-${color} border-2`,
          { ['mx-auto']: center },
        )}
      >
        <div className={cn('font-extrabold text-xl lowercase flex')}>
          <div
            className={cn(
              'text-center flex-grow flex flex-col justify-center leading-none',
              `text-${color}`,
            )}
          >
            {text}
          </div>

          <i
            className={cn(
              'mx-0 px-0 self-center h-8 w-8 flex flex-col justify-center',
              chevronRotation,
              `text-${color}`,
            )}
          >
            {chevronDirection === 'download' ? <DownloadIcon /> : <ChevronRightIcon />}
          </i>
        </div>
      </a>
    </Link>
  )
}

export default Button_Filled
