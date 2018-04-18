import * as React from 'react'
import * as css from './styles.scss'

interface T {
    title: string;
}

export default class Tabs extends React.Component<T, {}> {
    static defaultProps = {
        title: ''
    }

    render () {
        return (
            <div className={css.tabs} />
        )
    }
}
