import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
    constructor (props) {
        super(props);
        this.displayName = 'App';
    }

    render () {
        return (
            <div className="app">
                <header>
                    <h1>React It works.</h1>
                <header>

                <aside className="primary-aside"></aside>

                <main>
                    {this.props.children}
                </main>
            </div>
        );
    }
}

render(<App />, document.getElementById('react-root'));
