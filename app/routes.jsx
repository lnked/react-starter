// import React from 'react'
// import App from 'containers/App'

// // import reactRouterToArray from 'react-router-to-array'
// // console.log(reactRouterToArray(
// //     <Route path="/" component={Page1}>
// //         <IndexRoute component={Page1} />
// //             <Route path="about" component={Page1}>
// //             <Route path="home" component={Page1} />
// //             <Route path="/home/:userId" component={Page1} />
// //         </Route>
// //         <Route path="users" component={Page1} />
// //         <Route path="*" component={Page1} />
// //     </Route>)
// // )

// // {
// //     # needle
// //     <Route
// //       path="books/:bookId"
// //       getComponent={(nextState, callback) => {
// //         import('./components/Book').then(module =>
// //           callback(null, module.default)
// //         )
// //       }}
// //     />

// //     <Route path="/page/:slug" component={CreatePageView} />

// //     <Redirect from="/some/where/:id" to="/somewhere/else/2"/>
// //     <Route path="/:slug" name="ideas" handler={CreateIdeaView} />
// //     <Link to={{ pathname: '/foo', query: { the: 'query' } }}/>
// //     <Route path="users/:userId" component={UserProfile} />
// //     <Route name="ideas/:value" handler={CreateIdeaView} />
// //     <Link to={{ pathname: '/foo', query: { the: 'query' } }}/>
// //     <Route name="ideas" path="/:testvalue" handler={CreateIdeaView} />
// //     <Route path="/auth" component={Home} onEnter={this.requireAuth} />

// //     <Route path="/" component={SecretStuffComponent}
// //         onEnter={(nextState, replace, callback) => { this.requireAuth(nextState, replace, callback) }}>

// //     <Route path="inbox" component={Inbox}>
// //         <Redirect from="messages/:id" to="/messages/:id" />
// //     </Route>

// //     <Route component={Inbox}>
// //         <Route path="messages/:id" component={Message} />
// //     </Route>
// // }

// function errorLoading (err) {
//     console.error('Dynamic page loading failed', err)
// }

// function loadRoute (cb) {
//     return (module) => cb(null, module.default)
// }

// const routes = {

//     component: App,

//     childRoutes: [
//         {
//             path: '/',
//             getComponent(location, cb) {
//                 System.import('pages/Home')
//                     .then(loadRoute(cb))
//                     .catch(errorLoading)
//             }
//         },
//         {
//             path: 'blog',
//             getComponent(location, cb) {
//                 System.import('pages/Blog')
//                     .then(loadRoute(cb))
//                     .catch(errorLoading)
//             }
//         },
//         {
//             path: 'about',
//             getComponent(location, cb) {
//                 System.import('pages/About')
//                     .then(loadRoute(cb))
//                     .catch(errorLoading)
//             },
//             childRoutes: [
//                 {
//                     path: 'company',
//                     getComponent(location, cb) {
//                         System.import('pages/About/Company')
//                             .then(loadRoute(cb))
//                             .catch(errorLoading)
//                     }
//                 },
//                 {
//                     path: 'terms',
//                     getComponent(location, cb) {
//                         System.import('pages/About/Terms')
//                             .then(loadRoute(cb))
//                             .catch(errorLoading)
//                     }
//                 }
//             ]
//         },
//         {
//             path: 'new-page',
//             getComponent(location, cb) {
//                 System.import('pages/New')
//                     .then(loadRoute(cb))
//                     .catch(errorLoading)
//             }
//         }
//     ]
// }

// export default () => <Router history={browserHistory} routes={routes} />
