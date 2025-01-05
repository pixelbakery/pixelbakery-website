import { ChevronRightIcon } from 'components/icons/Icons_UI'
import cn from 'classnames'
import { usePlausible } from 'next-plausible'

interface SlideProgressionProps {
  current: number
  total: number
  navColor: string
}

interface DotButtonProps {
  scrollSnaps: number[]
  selectedIndex: number
  scrollTo: (index: number) => void
}

interface PrevButtonProps {
  enabled: boolean
  onClick: () => void
  navColor?: string
}

interface DotButtonDotProps {
  selected: boolean
  onClick: () => void
}

export const DotButton = ({ scrollSnaps, selectedIndex, scrollTo }: DotButtonProps) => {
  const plausible = usePlausible()

  return (
    <div
      className={cn('hidden md:flex list-none justify-center mt-4 gap-x-3', {
        'hidden md:hidden': scrollSnaps.length > 6,
      })}
    >
      {scrollSnaps.map((_, index) => (
        <DotButton_Dot
          key={index}
          selected={index === selectedIndex}
          onClick={() => {
            plausible('DotButtonClick', { props: { dotIndex: index } })
            scrollTo(index)
          }}
        />
      ))}
    </div>
  )
}

const DotButton_Dot = ({ selected, onClick }: DotButtonDotProps) => (
  <button
    aria-label={selected ? 'Current slide' : 'Go to slide'}
    className={cn(
      'relative bg-transparent cursor-pointer w-[40px] flex align-items-center after:w-full after:h-2 after:rounded-sm transition-all duration-700',
      {
        'after:bg-blue-dark': selected,
        'after:bg-wine-100': !selected,
      },
    )}
    type='button'
    onClick={onClick}
  />
)

export const PrevButton = ({ enabled, onClick, navColor }: PrevButtonProps) => {
  const plausible = usePlausible()

  return (
    <button
      aria-label='Go to previous slide'
      className={cn(
        `m-0 p-0 self-center flex font-medium text-lg text-${navColor} transition-opacity duration-300`,
        {
          'cursor-default opacity-50': !enabled,
          'cursor-pointer opacity-100': enabled,
        },
      )}
      onClick={() => {
        plausible('PrevButtonClick')
        onClick()
      }}
      disabled={!enabled}
    >
      <i className='p-2 rotate-180 text-md'>
        <ChevronRightIcon />
      </i>
      <span className='self-center py-0 my-0 leading-none'>Prev</span>
    </button>
  )
}

export const NextButton = ({ enabled, onClick, navColor }: PrevButtonProps) => {
  const plausible = usePlausible()

  return (
    <button
      aria-label='Go to next slide'
      className={cn(
        `m-0 p-0 self-center flex font-medium text-lg text-${navColor} transition-opacity duration-300`,
        {
          'cursor-default opacity-50': !enabled,
          'cursor-pointer opacity-100': enabled,
        },
      )}
      onClick={() => {
        plausible('NextButtonClick')
        onClick()
      }}
      disabled={!enabled}
    >
      <span className='self-center py-0 my-0 leading-none'>Next</span>
      <i className='p-2 text-md'>
        <ChevronRightIcon />
      </i>
    </button>
  )
}

export const SlideProgression = ({ current, total, navColor }: SlideProgressionProps) => (
  <div className={cn(`text-md my-0 py-0 leading-none self-center text-${navColor}`)}>
    <span>
      {current + 1} / {total}
    </span>
  </div>
)
