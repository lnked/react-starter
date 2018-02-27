import * as React from 'react'
import * as PropTypes from 'prop-types'
import * as css from './styles'

import InputMask from 'react-input-mask'

export default class MaskedText extends React.Component<{}, {}> {
    static propTypes = {
        name: PropTypes.string.isRequired,
        placeholder: PropTypes.string,
        value: PropTypes.string,
        mask: PropTypes.string,
        maskChar: PropTypes.string
    }

    static defaultProps = {
        value: '',
        maskChar: '_',
        placeholder: ''
    }

    render () {
        return (
            <div className={css.masked}>
                <InputMask
                    name={this.props.name}
                    mask={this.props.mask}
                    maskChar={this.props.maskChar}
                    defaultValue={this.props.value}
                    placeholder={this.props.placeholder}
                    className={css.input}
                />
            </div>
        )
    }
}
