import { SVGProps } from 'react'

const CopyIcon = ({ fill = 'currentColor', ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 20 20'
    fill={fill}
    aria-hidden='true'
    {...props}
  >
    <path
      fillRule='evenodd'
      d='M8.8,0C7.4,0,6.2,1.1,6.2,2.5v8.8c0,1.4,1.1,2.5,2.5,2.5h8.8c1.4,0,2.5-1.1,2.5-2.5V2.5C20,1.1,18.9,0,17.5,0H8.8z M2.5,6.2C1.1,6.2,0,7.4,0,8.8v8.8C0,18.9,1.1,20,2.5,20h8.8c1.4,0,2.5-1.1,2.5-2.5V15h-2.5v2.5H2.5V8.8H5V6.2H2.5z'
      clipRule='evenodd'
    />
  </svg>
)

export default CopyIcon
