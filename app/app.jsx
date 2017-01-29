import React from 'react';
import { render } from 'react-dom';
import Navbar from './components/navbar/index';

class App extends React.Component {
    constructor (props) {
        super(props);
        this.displayName = 'App';
    }

    render () {
        return (
            <div>
                <Navbar />
                <h1>React It works.</h1>
            </div>
        );
    }
}

render(<App />, document.getElementById('react-app'));
