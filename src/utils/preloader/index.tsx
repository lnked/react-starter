import * as React from 'react'
import Loadable from 'react-loadable'

import { Spinner } from 'components'

interface T {
    error: Error | null;
    pastSpinnerDelay: boolean;
    timedOut: boolean;
    loading: boolean;
    pastDelay: null;
}

const Loading = ({error, loading, pastSpinnerDelay, timedOut, pastDelay}: T) => {
    console.log('Loading: ', error, loading, pastSpinnerDelay, timedOut, pastDelay)

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

export default function Preloader (opts) {
    return Loadable({
        loading: Loading,
        delay: 300,
        timeout: 10000,
        ...opts
    })
}
