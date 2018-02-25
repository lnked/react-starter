import * as Loadable from 'react-loadable'

function Loading ({ error, pastDelay, timedOut }) {
    console.log(error, pastDelay, timedOut)

    if (error) {
        return <div>Error!</div>
    } else if (timedOut) {
        return <div>Taking a long time...</div>
    } else if (pastDelay) {
        return <div>Loading...</div>
    } else {
        return null
    }
}

const LoadableComponent = Loadable({
    loader: () => import('components/loader'),
    LoadingComponent: Loading,
    loading: Home,
    delay: 300
})

export default function PreLoader () {
    return <LoadableComponent />
}
