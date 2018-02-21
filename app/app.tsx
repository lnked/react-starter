import 'app.scss'

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
