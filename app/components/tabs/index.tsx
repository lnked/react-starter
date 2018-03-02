import * as React from 'react'
import * as css from './styles'

interface T {
    title: string;
}

export default class Tabs extends React.Component<T, {}> {
    static defaultProps = {
        title: ''
    }

    render () {
        const { title } = this.props

        return (
            <div className={css.tabs}>{ title }</div>
        )
    }
}
