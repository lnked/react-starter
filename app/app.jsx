// import React from 'react';
// import { render } from 'react-dom';

// import Router from './router';

// console.log(Router);

// render(<Router />, document.getElementById('react-root'));
import React, { Component } from 'react';
import { render } from 'react-dom';
import Router from './router';

class App extends Component {
    render () {
        return (
            <div>
                <header>
                    <h1>React It works.</h1>
                </header>

                <aside className="primary-aside">
                    Aside
                </aside>

                <main>
                    <Router />
                </main>
            </div>
        );
    }
}

render(<App />, document.getElementById('react-root'));
