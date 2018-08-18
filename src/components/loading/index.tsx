import * as React from 'react'

import { Spinner } from 'components'

export interface P {
    error: any | null
    pastDelay: null
    loading: boolean
    timedOut: boolean
    pastSpinnerDelay: boolean
}

export const Loading = ({ error, loading, pastSpinnerDelay, timedOut, pastDelay }: P) => {
    if (error) {
        return <div>Error!</div>
    } else if (loading) {
        return <div>Loading...</div>
    } else if (pastSpinnerDelay) {
        return <div>pastSpinnerDelay...</div>
    } else if (timedOut) {
        return <div>Taking a long time...</div>
    } else if (pastDelay) {
        return <Spinner />
    } else {
        return null
    }
}
