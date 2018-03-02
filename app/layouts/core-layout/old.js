
import React, { Component } from 'react'
import * as PropTypes from 'prop-types'
import css from './styles.scss'

import { Sidebar } from 'segments'

export default class CoreLayout extends Component {
    static propTypes = {
        children: oneOfType([
            object,
            string,
            array
        ])
    }

    state = {
        title: 'React Starter App'
    }

    componentWillMount () {
        document.title = this.state.title
        window.prerenderReady = true
    }

    render () {
        // import {Helmet} from "react-helmet"
        // <div className="application">
        //     <Helmet>
        //         <meta charSet="utf-8" />
        //         <title>My Title</title>
        //         <link rel="canonical" href="http://mysite.com/example" />
        //     </Helmet>
        // </div>

        // <Parent>
        //     <Helmet>
        //         <title>My Title</title>
        //         <meta name="description" content="Helmet application" />
        //     </Helmet>

        //     <Child>
        //         <Helmet>
        //             <title>Nested Title</title>
        //             <meta name="description" content="Nested component" />
        //         </Helmet>
        //     </Child>
        // </Parent>

        // <header className={css.header}>
        //     <Navigation />
        // </header>

        // <aside className={css.sidebar}>
        //     <Sidebar />
        // </aside>

        return (
            <div className={css.layout}>
                <section className={css.main}>
                    <div className={css.content}>
                        { this.props.children }
                    </div>
                </section>
            </div>
        )
    }
}
