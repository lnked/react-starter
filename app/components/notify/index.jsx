import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import css from './styles.scss'

export default class Notify extends PureComponent {
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
