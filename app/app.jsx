import 'app.scss'
import React from 'react'
import { render } from 'react-dom'

// https://github.com/minhtranite/react-progress-bar-plus

// Layouts
import { CoreLayout } from 'layouts'

// Pages
import { ComponentPage } from 'containers'

performance.mark('start')

render((
    <CoreLayout>
        <ComponentPage />
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

// import { importCss } from 'babel-plugin-dual-import/importCss.js'

// importCss('react-select/dist/react-select.css')
// importCss('react-virtualized/styles.css')
// importCss('react-virtualized-select/styles.css')
