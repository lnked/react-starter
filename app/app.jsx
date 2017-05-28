import React from 'react'
import { render } from 'react-dom'

// Layouts
import { CoreLayout } from 'layouts'

// Pages
import { Home } from 'containers'

import routes from './routes'

console.log('routes: ', routes)

render((
    <CoreLayout>
        <Home />
    </CoreLayout>
), document.getElementById('root'))

// import React from 'react'
// import { render } from 'react-dom'

// import App from 'router'

// import console from 'better-console'

// console.log('This is a log information')
// console.warn('Warning!')
// console.info('Information')
// console.table([[1, 2], [3, 4]])
// console.time('Timer')
// console.timeEnd('Timer')
// console.dir(App)

// // import { Provider } from 'react-redux'
// // import store from './store'
// // import router from './router'

// // if (process.env.NODE_ENV !== 'production') {
// //     const {whyDidYouUpdate} = require('why-did-you-update')
// //     whyDidYouUpdate(React)
// //     // whyDidYouUpdate(React, { include: /^pure/, exclude: /^Connect/ })
// // }

// render(<App />, document.getElementById('root'))
// // render(<Provider store={store}>{router}</Provider>,, document.getElementById('root'))

// // ReactDOM.render(
// // <Provider store={store}>
// //     <Router>
// //         <div id='main'>
// //         <Route component = {Header} />
// //         <Switch id='mainContent'>
// //           <Route exact path='/' component={Home}/>
// //         <Route path='/leagues' component={Leagues}/>
// //         <Route path='/tournaments' component={Tournaments}/>
// //         <Route path='/players' component={Players}/>
// //         <Route path='/saved' component={Saved}/>
// //     </Switch>
// //     <Route component = {Footer} />
// //         </div>
// //     </Router>
// // </Provider>,
// // document.getElementById("app")
// // );
