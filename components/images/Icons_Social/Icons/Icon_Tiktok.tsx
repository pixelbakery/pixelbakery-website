import { SVGProps } from 'react'
interface SVGRProps {
  title?: string
  titleId?: string
}

const SvgTiktok = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    fill='currentColor'
    className='tiktok_svg__bi tiktok_svg__bi-tiktok'
    viewBox='0 0 16 16'
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d='M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z' />
  </svg>
)

export default SvgTiktok
