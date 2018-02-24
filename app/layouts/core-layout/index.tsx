import * as React from 'react'
import * as css from './styles'

import { PropTypes } from 'prop-types'

import { Sidebar, Navigation } from 'segments'

export default class CoreLayout extends React.Component<{}, {}> {
    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.object,
            PropTypes.string,
            PropTypes.array
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
        const { children } = this.props

        return (
            <div className={css.layout}>
                <section className={css.main}>
                    <header className={css.header}>
                        <Navigation />
                    </header>

                    <aside className={css.sidebar}>
                        <Sidebar />
                    </aside>

                    <div className={css.content}>
                        {children}
                    </div>
                </section>
            </div>
        )
    }
}

// import React, { Component } from 'react'
// import { oneOfType, object, string, array } from 'prop-types'
// import css from './styles.scss'

// import { SvgFixer } from 'utils'
// import { Sidebar } from 'segments'

// export default class CoreLayout extends Component {
//     static propTypes = {
//         children: oneOfType([
//             object,
//             string,
//             array
//         ])
//     }

//     state = {
//         title: 'React Starter App'
//     }

//     componentWillMount () {
//         document.title = this.state.title
//         window.prerenderReady = true
//     }

//     // componentDidMount () {
//     //     SvgFixer()
//     // }

//     render () {
//         // import {Helmet} from "react-helmet"
//         // <div className="application">
//         //     <Helmet>
//         //         <meta charSet="utf-8" />
//         //         <title>My Title</title>
//         //         <link rel="canonical" href="http://mysite.com/example" />
//         //     </Helmet>
//         // </div>

//         // <Parent>
//         //     <Helmet>
//         //         <title>My Title</title>
//         //         <meta name="description" content="Helmet application" />
//         //     </Helmet>

//         //     <Child>
//         //         <Helmet>
//         //             <title>Nested Title</title>
//         //             <meta name="description" content="Nested component" />
//         //         </Helmet>
//         //     </Child>
//         // </Parent>

//         // <header className={css.header}>
//         //     <Navigation />
//         // </header>

//         // <aside className={css.sidebar}>
//         //     <Sidebar />
//         // </aside>

//         return (
//             <div className={css.layout}>
//                 <section className={css.main}>
//                     <div className={css.content}>
//                         { this.props.children }
//                     </div>
//                 </section>
//             </div>
//         )
//     }
// }
