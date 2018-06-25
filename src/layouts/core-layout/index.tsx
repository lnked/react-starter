import * as React from 'react'
import * as css from './styles.scss'

import classNames from 'classnames/bind'

import { SvgFixer } from 'utils'

interface T {
    children?: React.ReactChild;
}

interface S {
    title: string;
}

const cx = classNames.bind(css)

export class CoreLayout extends React.Component<T, S> {
    static defaultProps = {
        children: ''
    }

    state = {
        title: 'React Starter App'
    }

    componentDidMount () {
        document.title = this.state.title

        this.fixScroll()
        SvgFixer()
    }

    componentDidUpdate () {
        this.fixScroll()
    }

    fixScroll = () =>
        window.scrollTo(0, 0)

    render () {
        const { children } = this.props

        return (
            <div className={cx({ layout: true })}>
                <section className={cx({ main: true })}>
                    {children}
                </section>
            </div>
        )
    }
}

export default CoreLayout
