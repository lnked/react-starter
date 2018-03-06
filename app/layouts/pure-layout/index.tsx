import * as React from 'react'
import * as css from './styles.scss'

import { SvgFixer } from 'utils'

interface T {
    children?: string | React.ReactChild | React.ReactNode | any[];
}

interface S {
    title: string;
}

export default class PureLayout extends React.Component<T, S> {
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
        const { children } = this.props

        return (
            <div className={css.layout}>
                {children}
            </div>
        )
    }
}
