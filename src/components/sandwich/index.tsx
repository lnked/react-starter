import * as React from 'react'
import * as css from './styles.scss'

export interface T {
    isOpened?: boolean;
}

export interface S {
    isOpened: boolean;
}

export class Sandwich extends React.PureComponent<T, S> {
    static defaultProps = {
        isOpened: false
    }

    state = {
        isOpened: false
    }

    static getDerivedStateFromProps (nextProps, prevState) {
        if (prevState.isOpened !== nextProps.isOpened) {
            return {
                isOpened: nextProps.isOpened
            }
        }

        return null
    }

    handleChange = () => {
        this.setState({
            isOpened: !this.state.isOpened
        })
    }

    render () {
        const { isOpened } = this.state

        return (
            <button className={css.sandwich} onClick={this.handleChange}>
                <span className={!isOpened
                    ? css.sandwich__ln
                    : [
                        css.sandwich__ln, css.sandwich__ln_open
                    ].join(' ')}
                />
            </button>
        )
    }
}
