import * as React from 'react'

import { Spinner } from 'components'

import { P } from './types'

export const Loading = ({ error, loading, pastSpinnerDelay, timedOut, pastDelay }: P) => {
    if (error) {
        return <div>Error!</div>
    }

    if (loading || pastDelay || pastSpinnerDelay) {
        return <Spinner />
    }

    if (timedOut) {
        return <div>Taking a long time...</div>
    }

    return null
}
