// components/parts/Pill.tsx
/* eslint-disable no-unused-vars */
import cn from 'classnames'
// must pass a size: xl, lg, md, sm
//must pass a color without tailwind vernacular
interface PillProps {
  text: string
  bgColor: string
  textColor: string
  size: string
  className?: string
}
export default function Pill({ text, bgColor, textColor, size, className }: PillProps) {
  let px = '',
    py = '',
    fontWeight = '',
    textSize = ''
  const setSize = (size: string) => {
    switch (size) {
      case 'xl':
        py = ' py-4'
        px = ' px-5'
        fontWeight = ' font-bold'
        break
      case 'lg':
        py = ' py-3'
        px = ' px-4'
        fontWeight = ' font-semibold'

        break
      case 'md':
        py = ' py-3'
        px = ' px-4'
        fontWeight = ' font-semibold'
        break

      case 'sm':
        py = ' py-2'
        px = ' px-3'
        fontWeight = ' font-medium'
        break
      case 'xs':
        py = ' py-1'
        px = ' px-3'
        fontWeight = ' font-bold'
        break
      default:
        py = ' py-1'
        px = ' px-3'
        fontWeight = ' font-medium'
        break
    }
    textSize = ' text-' + size
    return [px, py, fontWeight, textSize]
  }

  const getSize = setSize(size)

  const addSize = ' ' + px + ' ' + py
  const addBgColor = ' bg-' + bgColor
  const addTextColor = ' text-' + textColor

  return (
    <div
      className={cn(
        'tag inline whitespace-nowrap rounded-md',
        `${textSize}`,
        `${fontWeight}`,
        `${addBgColor}`,
        `${addTextColor}`,
        `${px}`,
        `${py}`,
        `${className}`,
      )}
    >
      {text}
    </div>
  )
}
