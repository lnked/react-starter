import 'app.scss'

// import 'core-js/es6/map'
// import 'core-js/es6/set'

import * as React from 'react'
import * as ReactDOM from 'react-dom'

class App extends React.Component<{}, {}> {
    render () {
        return (
            <div>hello world</div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))
