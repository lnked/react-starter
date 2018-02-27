import * as React from 'react'
import * as css from './styles'

import * as PropTypes from 'prop-types'

import { SvgFixer } from 'utils'

export default class AuthLayout extends React.Component<{}, {}> {
    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.object,
            PropTypes.string,
            PropTypes.array
        ])
    }

    state = {
        title: 'Auth :: React Starter App'
    }

    componentWillMount () {
        window.prerenderReady = true
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
