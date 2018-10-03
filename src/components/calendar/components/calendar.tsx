import * as React from 'react'
import * as css from './styles.scss'

import { classes } from 'helpers'

import DatePicker from 'react-datepicker'
import moment from 'moment'

export interface P {
    name?: string;
    error?: string | boolean;
    value?: string | number;
    label?: string;
    format?: string;
    className?: string;
    requestFormat?: string;
    handleFocus?: () => void;
    handleChange?: (date: string) => void;
}

export interface S {
    value?: any;
}

const cx = classes.bind(css)

export class Calendar extends React.Component<P, S> {
    static defaultProps = {
        label: '',
        className: '',
        format: 'DD.MM.YYYY',
        requestFormat: 'YYYY-MM-DD',
    }

    state = {
        value: '',
    }

    static getDerivedStateFromProps (props: P, state: S) {
        const { value } = props

        if (!moment(state.value).isSame(value)) {
            return {
                value: (value && moment(value)) || null,
            }
        }

        return null
    }

    handleFocus = () => {
        if (this.props.handleFocus) {
            this.props.handleFocus()
        }
    }

    handleChange = (value: any) =>
        this.setState({ value }, () => {
            const { requestFormat } = this.props

            if (this.props.handleChange) {
                this.props.handleChange(moment(value).format(requestFormat))
            }
        })

    render () {
        const { value } = this.state
        const { label, format, className } = this.props

        const props: any = {
            locale: 'ru-Ru',
            format,
            onChange: this.handleChange,
            onFocus: this.handleFocus,
        }

        props.selected = value

        return (
            <div className={cx({ calendar: true }, className)}>
                {label &&
                    <div className={css.label}>{label}</div>
                }

                <DatePicker {...props} />
            </div>
        )
    }
}
