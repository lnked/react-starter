import * as React from 'react'

import {
    BrowserRouter as Router,
    Route
    // browserHistory
} from 'react-router-dom'

// import Loadable from 'react-loadable'

// Layouts
import { CoreLayout } from 'layouts'

// Containers
import { Auth } from 'containers'

// function Loading(props) {
//     if (props.error) {
//         return <div>Error!</div>
//     } else if (props.timedOut) {
//         return <div>Taking a long time...</div>
//     } else if (props.pastDelay) {
//         return <div>Loading...</div>
//     } else {
//         return null
//     }
// }

// const LoadableComponent = Loadable({
//     loader: () => import('./my-component'),
//     loading: Page1
// })

// Loadable({
//     loader: () => import('components/'),
//     loading: Loading,
//     delay: 300, // 0.3 seconds
// })

// class App extends React.Component<{}, {}> {
//     render () {
//         return (
//             <div>hello world</div>
//         )
//     }
// }

// <CoreLayout>
//     <ComponentPage />
// </CoreLayout>

export default class App extends React.Component<{}, {}> {
    render () {
        return (
            <Router>
                <CoreLayout>
                    <Route exact path="/" component={Auth}/>
                    <Route path="/dashboard" component={Auth}/>
                    <Route path="/structure" component={Auth}/>
                    <Route path="/settings" component={Auth}/>
                </CoreLayout>
            </Router>
        )
    }
}

// export default () => (
//     <Router history={browserHistory}>
//         <Route path='/' component={Home} />
//     </Router>
// )

// export default class App extends Component { }

// import Page1 from './my-loading-component'
