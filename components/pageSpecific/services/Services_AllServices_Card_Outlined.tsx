import Link from 'next/link'
import Services_AllServices_Card_Body from './Services_AllServices_Card_Body'

interface ServicesCard {
  service: any
  primaryColor: string
  textColor: string
}
function Services_AllServices_Card({ service, primaryColor, textColor }: ServicesCard) {
  return (
    <Link
      hrefLang={'en-US'}
      href={service.url}
      className={`border-6 border-${primaryColor} group hover-98 card shadow-sm`}
    >
      <Services_AllServices_Card_Body
        isFilled={false}
        service={service}
        textColor={textColor}
        isHovered={false}
        primaryColor={primaryColor}
      />
    </Link>
  )
}
export default Services_AllServices_Card
