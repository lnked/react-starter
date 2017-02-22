import React, { Component } from 'react';
import styles from './styles.scss';

export default class Button extends Component {

    static propTypes = {
        mod: React.PropTypes.string,
        type: React.PropTypes.string,
        label: React.PropTypes.string
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
                className={[styles.button, ['button', this.props.mod].join('--')].join(' ')}
                onClick={this.handleClick}
            >
                {this.props.label}
            </button>
        );
    }
}
