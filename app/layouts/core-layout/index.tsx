import * as React from 'react'
import * as axios from 'axios'
import * as css from './styles'

import { SvgFixer } from 'utils'

import { Aside, Navigation, RequestsPanel, Sidebar } from 'segments'

import { GroupLinks } from 'components'

interface T {
    links?: any;
    children?: React.ReactChild | {} | any[] | boolean;
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
            .get('http://react-template.loc/api/pages')
            .then((response) => {
                if (typeof (response.data.json) !== 'undefined') {
                    this.setState({ pages: response.data.json })
                }
            })
            .catch((err) => {
                console.log('err: ', err)
            })
    }

    render () {
        const sbc: any = []
        const scc: any = []
        const { children, links } = this.props
        const { pages } = this.state

        scc.push(css.body)
        sbc.push(css.sidebar)

        const submenuBlock: any = []

        if (links.length) {
            scc.push(css.body_short)
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

        console.log(sbc)

        return (
            <div className={css.layout}>
                <section className={css.main}>
                    <div className={sbc.join(' ')}>
                        <Sidebar pages={pages} />
                        {submenuBlock}
                    </div>

                    <div className={scc.join(' ')}>
                        <header className={css.header}>
                            <Navigation />
                        </header>

                        <RequestsPanel />

                        <div className={css.content}>
                            {children}
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
