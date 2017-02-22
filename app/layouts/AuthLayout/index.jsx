import React, { Component } from 'react';
import styles from './styles.scss';

export default class AuthLayout extends Component {

    static propTypes = {
        children: React.PropTypes.object.isRequired
    }

    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div className={styles.layout}>
                {this.props.children}
            </div>
        );
    }
}
