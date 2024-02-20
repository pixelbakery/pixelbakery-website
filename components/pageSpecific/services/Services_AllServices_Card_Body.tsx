import { ChevronRightIcon } from 'components/icons/Icons_UI/index'
import cn from 'classnames'
interface ServicesCard {
  service: any
  textColor: string
  isHovered: boolean
  primaryColor: string
  isFilled: boolean
  detailsHoverColor?: string
}

function Services_AllServices_Card_Body({
  service,
  textColor,
  isHovered,
  primaryColor,
  isFilled,
  detailsHoverColor,
}: ServicesCard) {
  let color
  if (isHovered && isFilled) color = primaryColor
  else color = textColor

  return (
    <div className='flex-grow flex flex-col justify-between p-4'>
      <div className={` duration-300 ease-out text-${color} group-hover:${color} p-2 xl:p-4`}>
        <h4 className={`  md:mt-2 md:mb-4 font-bold text-2xl xl:text-3xl font-Heading`}>
          {service.service}
        </h4>
        <p
          className={cn(
            'pb-0 mb-0 text-lg lg:text-base',
            {
              ['group-hover:text-blue']: isFilled && !detailsHoverColor,
              [`group-hover:text-${detailsHoverColor}`]: isFilled && detailsHoverColor,
            },
            {
              ['text-cream']: !isFilled,
            },
          )}
        >
          {service.description}
        </p>
      </div>
      <div className='self-end lg:self-end p-2'>
        <i className={`text-2xl text-${color}`}>
          <ChevronRightIcon
            className={`duration-300 ease-out h-12 w-12 text-${color} group-hover:${color} ml-auto`}
          />
        </i>
      </div>
    </div>
  )
}

export default Services_AllServices_Card_Body
