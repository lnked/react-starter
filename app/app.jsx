import React, { Component } from 'react';
import { render } from 'react-dom';
// import Router from './router';

class HelloMessage extends Component {
    static propTypes = {
        name: React.PropTypes.string
    }

    static defaultProps = {
        name: 'User'
    }

    render () {
        return <div>Hello {this.props.name}</div>;
    }
}

render(
    <HelloMessage name="Mariana + Amiran" />, document.getElementById('app-root')
);
