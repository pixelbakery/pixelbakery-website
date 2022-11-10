import Link from 'next/link'
import Services_AllServices_Card_Body from './Services_AllServices_Card_Body'

interface ServicesCard {
  service: any
  primaryColor: string
  textColor: string
}
function Services_AllServices_Card({ service, primaryColor, textColor }: ServicesCard) {
  return (
    <Link hrefLang={'en-US'} href={service.url} passHref>
      <a className={`border-6 border-${primaryColor} group hover-98 card shadow-sm`}>
        <Services_AllServices_Card_Body
          isFilled={false}
          service={service}
          textColor={textColor}
          isHovered={false}
          primaryColor={primaryColor}
        />
      </a>
    </Link>

    // <a hrefLang={'en-US'} href="#" className="">
    //     <article className="w-1/2 flex flex-col bg-pink-lighter rounded-lg text-pink" id="serviceAnimation">
    //         <h3 className="flex-grow">{service.service}</h3>
    //     </article>
    // </a>
  )
}
export default Services_AllServices_Card
