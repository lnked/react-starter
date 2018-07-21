import Loadable from 'react-loadable'

import { Loading } from 'components'

export const Preloader = (opts: any): any =>
    Loadable({
        loading: Loading,
        delay: 300,
        timeout: 1000,
        ...opts
    })

export default Preloader

// const getChunk = chunkName =>
//     import(/*  webpackMode: "lazy", webpackChunkName: "[request]" */ `pages/${chunkName}`)

// const AboutUs = props => <ComponentChunk componentProps={props} loadChunk={getChunk('about-us')} />

// const ProfilePage = props => (
//     <ComponentChunk componentProps={props} loadChunk={getChunk('profile')} />
// )
