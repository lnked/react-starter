import * as React from 'react'
import * as css from './styles.scss'
import { Classes } from 'helpers'

export interface P {
  className?: string;
  children?: JSX.Element[] | JSX.Element | string;
}

const cx = Classes.bind(css)

export function Layout ({ children = '', className = '' }: P) {
  return (
    <div className={cx({ layout: true }, className)}>
      {children}
    </div>
  )
}
