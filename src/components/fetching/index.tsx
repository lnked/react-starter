import * as React from 'react'
import * as css from './styles.scss'

import { Spinner } from 'components'

export interface P {
    pending?: boolean
    children?: React.ReactNode
}

export const Fetching = ({ pending = true, children }: P) => {
    return <div className={css.fetch}>{pending ? <Spinner /> : children}</div>
}
