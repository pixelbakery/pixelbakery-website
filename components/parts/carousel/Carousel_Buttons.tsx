import { ChevronRightIcon } from 'components/icons/Icons_UI'
import cn from 'classnames'

export const DotButton = ({ scrollSnaps, selectedIndex, scrollTo }) => (
  <div
    className={cn('hidden md:flex list-none justify-center mt-4  gap-x-3', {
      [`hidden md:hidden`]: scrollSnaps.length > 6,
    })}
  >
    {scrollSnaps.map((_, index) => (
      <DotButton_Dot
        key={index}
        selected={index === selectedIndex}
        onClick={() => scrollTo(index)}
      />
    ))}
  </div>
)

export const DotButton_Dot = ({ selected, onClick }) => (
  <button
    className={cn(
      `relative bg-transparent cursor-pointer w-[40px]  flex align-items-center after:w-full after:h-2 after:rounded-sm transition-all duration-700`,
      {
        ['after:bg-blue-dark']: selected,
        ['after:bg-wine-100 ']: !selected,
      },
    )}
    type='button'
    onClick={onClick}
  />
)

export const PrevButton = ({ enabled, onClick, navColor }) => (
  <button
    className={cn(
      `m-0 p-0 self-center flex font-medium text-lg text-${navColor} transition-opacity duration-300 `,
      {
        [' cursor-default opacity-50']: !enabled,
        [` cursor-pointer opacity-100`]: enabled,
      },
    )}
    onClick={onClick}
    disabled={!enabled}
  >
    <i className='text-md p-2 rotate-180'>
      <ChevronRightIcon />
    </i>
    <span className='self-center my-0 py-0 leading-none'>Prev</span>
  </button>
)

export const NextButton = ({ enabled, onClick, navColor }) => (
  <button
    className={cn(
      `m-0 p-0 self-center flex font-medium text-lg text-${navColor} transition-opacity duration-300 `,
      {
        [' cursor-default opacity-50']: !enabled,
        [` cursor-pointer opacity-100`]: enabled,
      },
    )}
    onClick={onClick}
    disabled={!enabled}
  >
    <span className='self-center my-0 py-0 leading-none'>Next</span>
    <i className='text-md p-2'>
      <ChevronRightIcon />
    </i>
  </button>
)

export const SlideProgression = ({ current, total, navColor }) => (
  <div className={cn(`text-md my-0 py-0 leading-none self-center  text-${navColor}`)}>
    <span>
      {current + 1} / {total}
    </span>
  </div>
)
