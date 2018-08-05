import * as React from 'react'
import * as css from './styles.scss'

import classNames from 'classnames/bind'

import { SvgFixer } from 'utils'

import { Header } from 'compound'

interface P {
    children?: JSX.Element[] | JSX.Element | string;
}

interface S {
    title: string;
}

const cx = classNames.bind(css)

export class CoreLayout extends React.Component<P, S> {
    static defaultProps = {
        children: '',
    }

    state = {
        title: 'React Starter App',
    }

    componentDidMount () {
        this.withRender()
    }

    componentDidUpdate () {
        this.withRender()
    }

    withRender = () => {
        SvgFixer()
        this.fixScroll()
        this.documentTitle()
    }

    documentTitle = () => {
        document.title = this.state.title
    }

    fixScroll = () =>
        window.scrollTo(0, 0)

    render () {
        const { children } = this.props

        return (
            <div className={cx({ layout: true })}>
                <Header />

                <section className={cx({ main: true })}>
                    {children}
                </section>
            </div>
        )
    }
}

export default CoreLayout
