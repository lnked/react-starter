import React, { PureComponent } from 'react'
import { bool } from 'prop-types'
import * as css from './styles'

export default class Sandwich extends React.PureComponent<{}, {}> {

    static propTypes = {
        isOpened: bool
    }

    static defaultProps = {
        isOpened: false
    }

    state = {
        isOpened: false
    }

    handleOpenMenu = () => {
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
