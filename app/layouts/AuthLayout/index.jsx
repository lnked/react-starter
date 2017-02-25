import React, { Component } from 'react';
import css from './styles.scss';

export default class AuthLayout extends Component {

    static propTypes = {
        children: React.PropTypes.object.isRequired
    }

    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div className={css.layout}>
                <section className={css.layout__form}>
                    {this.props.children}
                </section>
            </div>
        );
    }
}
