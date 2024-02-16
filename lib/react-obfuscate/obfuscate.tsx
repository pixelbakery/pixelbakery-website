import React, { useState, ElementType, CSSProperties, ReactNode, MouseEvent } from 'react'

// Assuming obfuscate.d.ts is in the same project and properly configured in tsconfig
import { ObfuscateProps } from 'obfuscate'

function Obfuscate({
  element: Component = 'a',
  children,
  tel,
  sms,
  facetime,
  email,
  href,
  headers,
  obfuscate = true,
  obfuscateChildren = true,
  linkText,
  style,
  onClick,
  ...others
}: ObfuscateProps) {
  const [humanInteraction, setHumanInteraction] = useState(false)

  const generateLink = (): string => {
    if (email) {
      let link = `mailto:${email}`
      if (headers) {
        const combineHeaders = (params: { [key: string]: string }) =>
          Object.keys(params)
            .map((key) => `${key}=${encodeURIComponent(params[key])}`)
            .join('&')
        link += `?${combineHeaders(headers)}`
      }
      return link
    } else if (tel) {
      return `tel:${tel}`
    } else if (sms) {
      return `sms:${sms}`
    } else if (facetime) {
      return `facetime:${facetime}`
    } else if (href) {
      return href
    } else if (typeof children === 'string') {
      return children
    }
    return ''
  }

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    if (onClick) {
      onClick(event)
    }

    if (!humanInteraction) {
      window.location.href = generateLink()
    }
  }

  const reverse = (content: string) =>
    content.split('').reverse().join('').replace('(', ')').replace(')', '(')

  const obfuscatedStyle: CSSProperties = {
    ...style,
    unicodeBidi: 'bidi-override',
    direction: humanInteraction || !obfuscate || !obfuscateChildren ? 'ltr' : 'rtl',
  }

  const renderedLink: ReactNode =
    humanInteraction || !obfuscate || typeof children === 'object' || !obfuscateChildren
      ? children
      : reverse(children as string)

  const clickProps =
    Component === 'a'
      ? {
          href: humanInteraction || !obfuscate ? generateLink() : linkText || 'obfuscated',
          onClick: handleClick,
        }
      : {}

  return (
    <Component
      onFocus={() => setHumanInteraction(true)}
      onMouseOver={() => setHumanInteraction(true)}
      onContextMenu={() => setHumanInteraction(true)}
      {...others}
      {...clickProps}
      style={obfuscatedStyle}
    >
      {renderedLink}
    </Component>
  )
}

export default Obfuscate
