import * as React from 'react'
import * as PropTypes from 'prop-types'
import * as css from './styles'

export default class HintText extends React.Component<{}, {}> {
    static propTypes = {
        text: PropTypes.string.isRequired
    }

    render () {
        return (
            <div className={css.hint}>
                { this.props.text }
            </div>
        )
    }
}
