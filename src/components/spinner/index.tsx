import * as React from 'react'
import * as css from './styles.scss'

import { Classes } from 'helpers'

import { P } from './types'

const cx = Classes.bind(css)

export default function Spinner ({ className = '' }: P) {
  return <div className={cx({ spinner: true }, className)} />
}
