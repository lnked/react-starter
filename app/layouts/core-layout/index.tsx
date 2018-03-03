import * as React from 'react'
import * as css from './styles'

import { SvgFixer } from 'utils'

// import { Aside, Navigation, RequestsPanel, Sidebar } from 'segments'

// import { GroupLinks } from 'components'

interface T {
    links?: any;
    pages: any;
    children?: React.ReactChild | {} | any[] | boolean;
}

interface S {
    title: string;
}

export default class CoreLayout extends React.Component<T, S> {
    static defaultProps = {
        links: [],
        pages: []
    }

    state = {
        title: 'React Starter App'
    }

    componentWillMount () {
        document.title = this.state.title
    }

    componentDidMount () {
        SvgFixer()
    }

    render () {
        return (<div className={css.content}>CoreLayout</div>)
        // const sbc: any = []
        // const scc: any = []
        // const { children, pages, links } = this.props

        // scc.push(css.body)
        // sbc.push(css.sidebar)

        // const submenuBlock: any = []

        // if (links.length) {
        //     scc.push(css.body_short)
        //     sbc.push(css.sidebar_long)

        //     submenuBlock.push(
        //         <Aside title="Интернет магазин" key="submenu">
        //             <GroupLinks
        //                 base="shop"
        //                 links={links}
        //             />
        //         </Aside>
        //     )
        // }

        // return (
        //     <div className={css.layout}>
        //         <section className={css.main}>
        //             <div className={sbc.join(' ')}>
        //                 <Sidebar pages={pages} />
        //                 {submenuBlock}
        //             </div>

        //             <div className={scc.join(' ')}>
        //                 <header className={css.header}>
        //                     <Navigation />
        //                 </header>

        //                 <RequestsPanel />

        //                 <div className={css.content}>
        //                     {children}
        //                 </div>
        //             </div>
        //         </section>
        //     </div>
        // )
    }
}
