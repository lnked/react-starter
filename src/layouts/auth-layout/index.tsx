import * as React from 'react'
import * as css from './styles.scss'

import { SvgFixer } from 'utils'

interface T {
    children?: string | React.ReactChild | React.ReactNode | any[];
}

interface S {
    title: string;
}

export default class AuthLayout extends React.Component<T, S> {
    state = {
        title: 'Auth :: React Starter App'
    }

    componentWillMount () {
        document.title = this.state.title
    }

    componentDidMount () {
        SvgFixer()
    }

    // handleSubmit = (e) => {
    //     e.preventDefault()
    //     // this.props.model.save()
    // }

    // handleNameChange = (e) => {
    //     // this.props.model.name = e.target.value
    // }

    // handleExpand = (e) => {
    //     e.preventDefault()
    //     // this.setState({ expanded: !this.state.expanded })
    // }

    render () {
        return (
            <div className={css.layout}>
                <section className={css.layout__form}>
                    {this.props.children}
                </section>
            </div>
        )
    }
}
