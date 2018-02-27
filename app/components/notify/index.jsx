import * as React from 'react'
import * as PropTypes from 'prop-types'
import * as css from './styles'

export default class Notify extends React.PureComponent<{}, {}> {
    static propTypes = {
        bullet: PropTypes.bool
    }

    static defaultProps = {
        bullet: false
    }

    renderBullet = () => {
        if (this.props.bullet) {
            return (
                <div className={css.notify__bullet} />
            )
        }
    }

    render () {
        return (
            <div className={css.notify}>
                { this.renderBullet() }
            </div>
        )
    }
}
