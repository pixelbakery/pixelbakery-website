import { SVGProps } from 'react'
interface SVGRProps {
  title?: string
  titleId?: string
}

const SvgFacebook = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    fill='currentColor'
    className='facebook_svg__bi facebook_svg__bi-facebook'
    viewBox='0 0 16 16'
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}

    <g>
      <path
        d='M8,0C3.6,0,0,3.6,0,8c0,4.4,3.6,8,8,8s8-3.6,8-8C16,3.6,12.4,0,8,0z M6,9.2c-0.4,0.6-1.1,1.1-1.9,1.1
		c-1.2,0-2.2-1-2.2-2.2s1-2.2,2.2-2.2c0.8,0,1.5,0.4,1.9,1.1C5.8,7.2,5.7,7.6,5.7,8S5.8,8.8,6,9.2z M9.8,9.2
		c-0.4,0.6-1.1,1.1-1.9,1.1c-0.8,0-1.5-0.4-1.9-1.1C6.2,8.8,6.4,8.4,6.4,8S6.2,7.2,6,6.8c0.4-0.6,1.1-1.1,1.9-1.1
		c0.8,0,1.5,0.4,1.9,1.1C9.6,7.2,9.5,7.6,9.5,8S9.6,8.8,9.8,9.2z M11.7,10.2c-0.8,0-1.5-0.4-1.9-1.1C10,8.8,10.2,8.4,10.2,8
		c0-0.4-0.1-0.8-0.3-1.2c0.4-0.6,1.1-1.1,1.9-1.1C13,5.8,14,6.8,14,8S13,10.2,11.7,10.2z'
      />
    </g>
  </svg>
)

export default SvgFacebook
