import * as React from 'react'
import * as css from './styles.scss'

import { Spinner } from 'components'

import { P } from './types'

export function Fetching ({ pending = true, children }: P) {

  return <div className={css.fetch}>{pending ? <Spinner /> : children}</div>

}
