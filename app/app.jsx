import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
    constructor (props) {
        super(props);
        this.displayName = 'App';
    }

    render () {
        return (
            <div>
                <h1>React It works.</h1>
            </div>
        );
    }
}

render(<App />, document.getElementById('react-app'));
