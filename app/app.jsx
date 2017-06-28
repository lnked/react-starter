import 'app.scss'
import React from 'react'
import { render } from 'react-dom'

// Layouts
import { CoreLayout } from 'layouts'

// Pages
import { Home } from 'containers'

performance.mark('start')

render((
    <CoreLayout>
        <Home />
    </CoreLayout>
), document.getElementById('root'))

if (process.env.NODE_ENV === 'development') {
    console.log('is development')

    if (module.hot) {
        module.hot.accept()
    }
}

performance.mark('end')
performance.measure('t', 'start', 'end')
