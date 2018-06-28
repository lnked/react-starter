import * as React from 'react'

import { Spinner } from 'components'

export interface T {
    error: any | null;
    pastSpinnerDelay: boolean;
    timedOut: boolean;
    loading: boolean;
    pastDelay: null;
}

export const Loading = ({error, loading, pastSpinnerDelay, timedOut, pastDelay}: T) => {
    console.log(error, loading, pastSpinnerDelay, timedOut, pastDelay)

    if (error) {
        return <div>Error!</div>
    } else if (timedOut) {
        return <div>Taking a long time...</div>
    } else if (pastDelay) {
        return <div><Spinner />Loading...</div>
    } else {
        return null
    }
}
