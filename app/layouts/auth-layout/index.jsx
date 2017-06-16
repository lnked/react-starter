import React, { PureComponent } from 'react'
import { oneOfType, object, string, array } from 'prop-types'
import css from './styles.scss'

import { SvgFixer } from 'utils'

export default class AuthLayout extends PureComponent {

    static propTypes = {
        children: oneOfType([
            object,
            string,
            array
        ])
    }

    componentWillMount () {
        window.prerenderReady = true
    }

    componentDidMount () {
        SvgFixer()
    }

    // state = { expanded: false }

    // handleSubmit = (e) => {
    //     e.preventDefault()
    //     this.props.model.save()
    // }

    // handleNameChange = (e) => {
    //     this.props.model.name = e.target.value
    // }

    // handleExpand = (e) => {
    //     e.preventDefault()
    //     this.setState({ expanded: !this.state.expanded })
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
