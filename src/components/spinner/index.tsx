import * as React from 'react'
import * as css from './styles.scss'

import { classes } from 'helpers'

import { P } from './types'

const cx = classes.bind(css)

export function Spinner ({ className = '' }: P) {

  return <div className={cx({ spinner: true }, className)} />

}
