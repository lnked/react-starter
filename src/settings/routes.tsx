// import { CoreLayout } from 'layouts'

// const routes: any = []

// function errorLoading (err) {
//     console.error('Dynamic page loading failed', err)
// }

// function loadRoute (cb) {
//     return (module) => cb(null, module.default)
// }

// export default {
//     component: CoreLayout,
//     childRoutes: [
//         {
//             path: '/',
//             getComponent (location, cb) {
//                 console.log(location)
//                 System.import('pages/Home').then(loadRoute(cb)).catch(errorLoading)
//             }
//         },
//         {
//             path: 'blog',
//             getComponent (location, cb) {
//                 console.log(location)
//                 System.import('pages/Blog').then(loadRoute(cb)).catch(errorLoading)
//             }
//         },
//         {
//             path: 'about',
//             getComponent (location, cb) {
//                 console.log(location)
//                 System.import('pages/About').then(loadRoute(cb)).catch(errorLoading)
//             }
//         }
//     ]
// }

// module.exports.config = routes
