import * as React from 'react'
import * as css from './styles.scss'

import { Classes } from 'helpers'

export interface P {
  href: string;
  children: JSX.Element[] | JSX.Element | any;
  className: string;
}

const cx = Classes.bind(css)

export default function Link ({ href, children = '', className = '', ...props }: P) {
  return (
    <a href={href} className={cx(css.link, className)} {...props}>
      {children}
    </a>
  )
}
