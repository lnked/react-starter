import * as React from 'react'

import { routes } from 'settings/routes'

import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'

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

                        {/*
                        {routes.map(({ component: Component, ...rest }: any, key) => (
                            <Route {...rest} key={key} render={(props: any) =>
                                <Component {...props} className={`fade fade-${status}`} />
                            } />
                        ))}
                        */}
                    </Switch>
                </CoreLayout>
            </Router>
            // </Provider>
        )
    }
}

export { App }
