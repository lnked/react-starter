import * as React from 'react'

import { routes } from 'settings/routes'

import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'

// import { MainPage } from 'pages'

// import { Provider } from 'mobx-react'

// import { ui, app } from 'store'

import { CoreLayout } from 'layouts'

import { Header } from 'segments'

// const store = {
//     ui, app
// }

class App extends React.Component<{}, {}> {
    render () {
        return (
            // <Provider {...store}>
            <Router>
                <CoreLayout>
                    <Header />

                    <Switch>
                        {routes.map(({ ...rest }: any, key) =>
                            <Route key={key} {...rest} />
                        )}
                    </Switch>

                    {/* <Route path="/main" exact={true} component={MainPage} /> */}
                </CoreLayout>
            </Router>
            // </Provider>
        )
    }
}

export { App }
