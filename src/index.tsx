import * as React from 'react'
import { render } from 'react-dom'
import App from './app'
import 'index.scss'

// if (process.env.NODE_ENV !== 'production') {
//     const {whyDidYouUpdate} = require('why-did-you-update');
//     whyDidYouUpdate(React);
// }

render(<App />, document.getElementById('app'))

document.body.classList.remove('loading')
