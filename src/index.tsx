import * as React from 'react'
import { render } from 'react-dom'
import App from './app'
import 'index.scss'

// if (process.env.NODE_ENV !== 'production') {
//     const {whyDidYouUpdate} = require('why-did-you-update');
//     whyDidYouUpdate(React);
// }

render(<App />, document.getElementById('root'))

document.body.classList.remove('loading')

// d3json('/api/v1/events/pavilions/stands/equipment/' + eq.id)
//     .header("X-CSRFToken", getCookie('csrftoken'))
//     .header("Content-Type", "application/json;charset=UTF-8")
//     .post(JSON.stringify(eq), function (e) {
//         if (e) {
//             store(a.EQUIPMENT_UPDATED, e);
//         }
//         else
//             console.error('Equipment not updated on server!')
//     });
