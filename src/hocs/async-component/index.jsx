import React, {Component} from 'react'

const asyncComponent = (importComponent) => {
    return class extends Component {
        static displayName = `RequestHOC(${importComponent.displayName || importComponent.name || 'Component'})`

        state = {
            component: null
        }

        componentDidMount () {
            importComponent()
                .then(cmp => {
                    this.setState({component: cmp.default})
                })
        }

        render () {
            const C = this.state.component
            return C ? <C {...this.props}/> : null
        }
    }
}

export default asyncComponent

// usage

// import React from 'react';
// import asyncComponent from '../../hoc/asyncComponent';

// const AsyncButton = asyncComponent(() => {
//     return import('../Button');
// });

// const container = () => {
//     return (
//         <div>
//             <h1>Here goes an async loaded button component</h1>
//             <AsyncButton/>
//         </div>
//     );
// };

// export default container;

// import React, {Component} from 'react';
// import {Route, Switch} from 'react-router-dom';

// import HomePage from './containers/HomePage';

// const AsyncProfilePage    = asyncComponent(() => {
//     return import('./containers/ProfilePage');
// });

// class Routes extends Component {
//     render() {
//         return (
//             <Switch>
//                 <Route exact path='/' component={HomePage}/>
//                 <Route exact path='/profile' component={AsyncProfilePage}/>
//             </Switch>
//         );
//     }
// }

// export default Routes;
