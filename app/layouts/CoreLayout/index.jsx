import React, { Component } from 'react'
import Sidebar from 'components/sidebar'
import Navigation from 'components/navigation'
import styles from './styles.scss'

export default class CoreLayout extends Component {

    static propTypes = {
        children: React.PropTypes.element.isRequired
    }

    constructor (props) {
        super(props);
    }

    componentWillMount () {
        window.prerenderReady = true;
    }

    render () {
        return (
            <div className={styles.layout}>
                <header className={styles.layout__header}>
                    <Navigation />
                </header>

                <sidebar className={styles.layout__sidebar}>
                    <Sidebar />
                </sidebar>

                <section className={styles.layout__main}>
                    <div className={styles.layout__main__content}>
                        {this.props.children}
                    </div>
                </section>
            </div>
        );
    }
}
