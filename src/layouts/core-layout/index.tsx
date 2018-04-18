import * as React from 'react'
import * as css from './styles.scss'
import axios from 'axios'

import { SvgFixer } from 'utils'

import { Aside, Navigation, RequestsPanel, Sidebar } from 'segments'

import { GroupLinks } from 'components'

interface T {
    links?: any;
    children?: string | React.ReactChild | React.ReactNode | any[];
}

interface S {
    title: string;
    pages: any;
}

export default class CoreLayout extends React.Component<T, S> {
    static defaultProps = {
        links: []
    }

    state = {
        title: 'React Starter App',
        pages: []
    }

    componentWillMount () {
        document.title = this.state.title
    }

    componentDidMount () {
        SvgFixer()
        this.handleLoadPages()
    }

    handleLoadPages = () => {
        axios
            .get('/api/pages')
            .then((response) => {
                if (typeof (response.data.json) !== 'undefined') {
                    this.setState({ ...this.state, pages: response.data.json })
                }
            })
            .catch((err) => {
                console.log('err: ', err)
            })
    }

    renderSidebar = () => {
        const sbc: any = []
        const { pages } = this.state
        const { links } = this.props

        const submenuBlock: any = []

        if (links.length) {
            sbc.push(css.sidebar_long)

            submenuBlock.push(
                <Aside title="Интернет магазин" key="submenu">
                    <GroupLinks
                        base="shop"
                        links={links}
                    />
                </Aside>
            )
        }

        return (
            <div className={sbc.join(' ')}>
                <Sidebar pages={pages} />
                {submenuBlock}
            </div>
        )
    }

    renderContent = () => {
        const scc: any = []

        const { children, links } = this.props

        scc.push(css.body)

        if (links.length) {
            scc.push(css.body_short)
        }

        return (
            <div className={scc.join(' ')}>
                <header className={css.header}>
                    <Navigation />
                </header>

                <RequestsPanel />

                <div className={css.content}>
                    {children}
                </div>
            </div>
        )
    }

    render () {
        return (
            <div className={css.layout}>
                <section className={css.main}>
                    { this.renderSidebar() }
                    { this.renderContent() }
                </section>
            </div>
        )
    }
}
