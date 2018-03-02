import * as React from 'react'
import * as css from './styles'

import * as PropTypes from 'prop-types'

import { SvgFixer } from 'utils'

export default class PureLayout extends React.Component<{}, {}> {
    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.object,
            PropTypes.string,
            PropTypes.array
        ])
    }

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
