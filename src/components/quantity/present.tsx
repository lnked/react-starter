import * as React from 'react'
import * as css from './styles.scss'
import { Classes } from 'helpers'

export interface P {
  value: string;
}

const cx = Classes.bind(css)

export default function Present ({ value }: P) {
  return (
    <div className={cx(css.quantity)}>
      <p>value: {value}</p>
    </div>
  )
}
