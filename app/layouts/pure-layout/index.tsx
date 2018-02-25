import * as React from 'react'
import * as css from './styles'

import { PropTypes } from 'prop-types'

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
        window.prerenderReady = true
    }

    componentDidMount () {
        SvgFixer()
    }

    render () {
        return (
            <div className={css.layout}>
                { this.props.children }
            </div>
        )
    }
}
