import * as React from 'react'
import * as css from './styles'

import axios from 'axios'

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
                this.setState({ pages: response.data.json })
            })
            .catch((err) => {
                console.log('err: ', err)
            })
    }

    render () {
        const { children, links } = this.props
        const { pages } = this.state

        const submenuBlock: any = []

        if (links.length) {
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
            <div className={css.layout}>
                <section className={css.main}>
                    <div className={css.sidebar}>
                        <Sidebar pages={pages} />
                        {submenuBlock}
                    </div>

                    <div className={css.body}>
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
