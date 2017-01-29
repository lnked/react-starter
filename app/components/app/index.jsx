import React, { Component } from 'react';
import { Link } from 'react-router';

class App extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div className="container">
                <h1>App</h1>

                <ul>
                    <li><Link to="/users">users</Link></li>
                    <li><Link to="/user">user</Link></li>
                    <li><Link to="/home">home</Link></li>
                </ul>

                {this.props.children}
            </div>
        );
    }
}

App.propTypes = {
    children: React.PropTypes.string
};

export default App;
