import Loadable from 'react-loadable'

import { Loading } from 'components'

export function Preloader (opts) {
    return Loadable({
        loading: Loading,
        delay: 300,
        timeout: 10000,
        ...opts
    })
}

export default Preloader

// const getChunk = chunkName =>
//     import(/*  webpackMode: "lazy", webpackChunkName: "[request]" */ `containers/${chunkName}`)

// const AboutUs = props => <ComponentChunk componentProps={props} loadChunk={getChunk('about-us')} />

// const ProfilePage = props => (
//     <ComponentChunk componentProps={props} loadChunk={getChunk('profile')} />
// )
