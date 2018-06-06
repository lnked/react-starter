import * as React from 'react'
import * as css from './styles.scss'
// import classNames from "classnames"
// const collapsed = true
// <div
//     className={classNames({
//         'menu': true,
//         'active': collapsed
//     })}
// />
import { SvgFixer } from 'utils'

interface T {
    children?: string | React.ReactChild | React.ReactNode | any[];
}

interface S {
    title: string;
}

export default class CoreLayout extends React.Component<T, S> {
    static defaultProps = {
        children: ''
    }

    state = {
        title: 'React Starter App'
    }

    componentDidMount () {
        document.title = this.state.title

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
