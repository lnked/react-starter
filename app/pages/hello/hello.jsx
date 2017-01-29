import React, { Component } from 'react';

class Hello extends Component {
    constructor (props) {
        super(props);
    }
    render () {
        return <div>Hello <x-search>{this.props.name}</x-search>!</div>;
    }
}

export default Hello;
