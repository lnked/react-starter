import React from 'react'
import App from 'router'
import { render } from 'react-dom'

// import { Provider } from 'react-redux'
// import store from './store'
// import router from './router'

// if (process.env.NODE_ENV !== 'production') {
//     const {whyDidYouUpdate} = require('why-did-you-update')
//     whyDidYouUpdate(React)
//     // whyDidYouUpdate(React, { include: /^pure/, exclude: /^Connect/ })
// }

render(<App />, document.getElementById('root'))
// render(<Provider store={store}>{router}</Provider>,, document.getElementById('root'))

// ReactDOM.render(
// <Provider store={store}>
//     <Router>
//         <div id="main">
//         <Route component = {Header} />
//         <Switch id='mainContent'>
//           <Route exact path="/" component={Home}/>
//         <Route path="/leagues" component={Leagues}/>
//         <Route path="/tournaments" component={Tournaments}/>
//         <Route path="/players" component={Players}/>
//         <Route path="/saved" component={Saved}/>
//     </Switch>
//     <Route component = {Footer} />
//         </div>
//     </Router>
// </Provider>,
// document.getElementById('app')
// );
