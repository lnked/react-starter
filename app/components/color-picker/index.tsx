import * as React from 'react'
import * as css from './styles.scss'
import { Icon } from 'components'

import ClipboardButton from 'react-clipboard.js'

interface T {
    color?: string;
}

interface S {
    color: string;
}

export default class ColorPicker extends React.Component<T, S> {
    static defaultProps = {
        color: 'ffffff'
    }

    state = {
        color: this.props.color || ''
    }

    handleChange = (e) => {
        const color = e.target.value
        const symbol = color[color.length - 1]
        const isColor = /^([0-9a-f])$/i

        if (isColor.test(symbol) || !color) {
            this.setState({ color })
        }
    }

    handleClear = () => {
        this.setState({...this.state, color: ''})
    }

    renderControl = () => {
        const clearButton: any = []

        const { color } = this.state

        const pureColor = color ? color.replace('#', '') : ''

        if (pureColor) {
            clearButton.push(
                <button className={css.clear} key="clear" onClick={this.handleClear}>
                    <Icon symbol="close" className={css.icon} hidden={true} />
                </button>
            )
        }

        return (
            <div className={css.control}>
                <div className={css.grill}>#</div>

                <input
                    name="color"
                    maxLength={6}
                    placeholder=""
                    className={css.input}
                    value={pureColor}
                    onChange={this.handleChange}
                />

                { clearButton }
            </div>
        )
    }

    onSuccess = () => {
        console.info('successfully coppied')
    }

    renderPaint = () => {
        let { color } = this.state
        const isColor = /^(?:[0-9a-f]{3}){1,2}$/i

        if (!isColor.test(color)) {
            color = 'ffffff'
        }

        const style = {
            backgroundColor: `#${color}`
        }

        return (
            <ClipboardButton
                className={css.paint}
                data-clipboard-text={color}
                onSuccess={this.onSuccess}
                style={style}
            />
        )
    }

    render () {
        return (
            <div className={css.picker}>
                { this.renderControl() }
                { this.renderPaint() }
            </div>
        )
    }
}
