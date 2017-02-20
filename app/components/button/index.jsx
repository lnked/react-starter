import React, { Component } from 'react';
import styles from './styles.scss';

export default class Button extends Component {

    static propTypes = {
        mod: React.PropTypes.string.isRequired,
        type: React.PropTypes.string.isRequired,
        label: React.PropTypes.string.isRequired
    }

    static defaultProps = {
        mod: 'green',
        type: 'button',
        label: 'Button'
    }

    constructor (props) {
        super(props);
    }

    handleClick () {
        console.log('click');
    }

    render () {
        return (
            <button
                type={this.props.type}
                className={[styles.button, ['is', this.props.mod].join('-')].join(' ')}
                onClick={this.handleClick}
            >
                {this.props.label}
            </button>
        );
    }
}
