import React from 'react'
import { render } from 'react-dom'
import App from 'router'

require('es6-promise').polyfill()

// import { Provider } from 'react-redux'
// import store from './store'
// import router from './router'

render(<App />, document.getElementById('root'))
// render(<Provider store={store}>{router}</Provider>,, document.getElementById('root'))
