import * as React from 'react'
import * as css from './styles.scss'

import { SvgFixer } from 'utils'

interface T {
    children?: string | React.ReactChild | React.ReactNode | any[];
}

interface S {
    title: string;
}

export default class CoreLayout extends React.Component<T, S> {
    state = {
        title: 'CORE :: React Starter App'
    }

    componentWillMount () {
        document.title = this.state.title
    }

    componentDidMount () {
        SvgFixer()
    }

    render () {
        return (
            <div className={css.layout}>
                <section className={css.main}>
                    {this.props.children}
                </section>
            </div>
        )
    }
}
