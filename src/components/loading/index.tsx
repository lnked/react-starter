import * as React from 'react'

import { Spinner } from 'components'

export interface P {
    error: any | null;
    pastDelay: null;
    loading: boolean;
    timedOut: boolean;
    pastSpinnerDelay: boolean;
}

export const Loading = ({ error, loading, pastSpinnerDelay, timedOut, pastDelay }: P) => {
    if (error) {
        return <div>Error!</div>
    }

    if (loading) {
        return <div>Loading...</div>
    }

    if (pastSpinnerDelay) {
        return <div>pastSpinnerDelay...</div>
    }

    if (timedOut) {
        return <div>Taking a long time...</div>
    }

    if (pastDelay) {
        return <Spinner />
    }

    return null
}
