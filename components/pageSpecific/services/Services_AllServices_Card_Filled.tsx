import Link from 'next/link'
import Services_AllServices_Card_Body from './Services_AllServices_Card_Body'
import cn from 'classnames'
import { useState } from 'react'
interface ServicesCard {
  service: any
  primaryColor: string
  textColor: string
  detailsHoverColor?: string
}
const Services_AllServices_Card = ({
  service,
  primaryColor,
  textColor,
  detailsHoverColor,
}: ServicesCard) => {
  const [hovered, setHovered] = useState(false)
  return (
    <Link
      hrefLang={'en-US'}
      href={service.url}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(`group hover-98 card `, {
        [`bg-${textColor}`]: hovered,
        [`bg-${primaryColor}`]: !hovered,
      })}
    >
      <Services_AllServices_Card_Body
        isFilled={true}
        service={service}
        textColor={textColor}
        detailsHoverColor={detailsHoverColor}
        primaryColor={primaryColor}
        isHovered={hovered}
      />
    </Link>
  )
}
export default Services_AllServices_Card
