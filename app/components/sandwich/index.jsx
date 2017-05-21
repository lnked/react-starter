import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import css from './styles.scss'

export default class Sandwich extends PureComponent {

    static propTypes = {
        isOpened: PropTypes.bool
    }

    static defaultProps = {
        isOpened: false
    }

    constructor (props) {
        super(props)

        this.state = {
            isOpened: false
        }
    }

    handleOpenMenu () {
        this.setState({
            isOpened: !this.state.isOpened
        })
    }

    render () {
        const { isOpened } = this.state

        return (
            <div className={css.sandwich} onClick={this.handleOpenMenu.bind(this)}>
                <div className={!isOpened
                    ? css.sandwich__ln
                    : [
                        css.sandwich__ln, css.sandwich__ln_open
                    ].join(' ')}
                />
            </div>
        )
    }
}
