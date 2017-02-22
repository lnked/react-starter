import React, { Component } from 'react';
import Navigation from 'components/navigation';
import Button from 'components/button';
import styles from './styles.scss';

export default class CoreLayout extends Component {

    static propTypes = {
        children: React.PropTypes.element.isRequired
    }

    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div className={styles.layout}>
                <Navigation />
                <Button />
                {this.props.children}
            </div>
        );
    }
}
