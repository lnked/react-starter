import React, { Component } from 'react';
import { Link } from 'react-router';
import Navbar from '../components/navbar/index';

class Welcome extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div className="container">
                <Navbar />

                <h1>Welcome</h1>

                {this.props.children}
            </div>
        );
    }
}

Welcome.propTypes = {
    children: React.PropTypes.string
};

export default Welcome;
