import React from 'react'
import App from 'router'
import { render } from 'react-dom'

// import { Provider } from 'react-redux'
// import store from './store'
// import router from './router'

if (process.env.NODE_ENV !== 'production') {
    const {whyDidYouUpdate} = require('why-did-you-update')
    whyDidYouUpdate(React)
    // whyDidYouUpdate(React, { include: /^pure/, exclude: /^Connect/ })
}

render(<App />, document.getElementById('root'))
// render(<Provider store={store}>{router}</Provider>,, document.getElementById('root'))
