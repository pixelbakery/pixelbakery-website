import Link from 'next/link'
import Services_AllServices_Card_Body from './Services_AllServices_Card_Body'
import cn from 'classnames'
import { useState } from 'react'
interface ServicesCard {
  service: any
  primaryColor: string
  textColor: string
}
const Services_AllServices_Card = ({ service, primaryColor, textColor }: ServicesCard) => {
  const [hovered, setHovered] = useState(false)
  return (
    <Link hrefLang={'en-US'} href={service.url} passHref>
      <a
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
          primaryColor={primaryColor}
          isHovered={hovered}
        />
      </a>
    </Link>

    // <a hrefLang={'en-US'} href="#" className="">
    //     <article className="w-1/2 flex flex-col bg-pink-light rounded-lg text-pink" id="serviceAnimation">
    //         <h3 className="flex-grow">{service.service}</h3>
    //     </article>
    // </a>
  )
}
export default Services_AllServices_Card
