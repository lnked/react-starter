import * as React from 'react'
import * as css from './styles.scss'

import { classes } from 'helpers'

import DatePicker from 'react-datepicker'
import moment from 'moment'

export interface P {
    name?: string;
    label?: string;
    startDate?: string | number;
    endDate?: string | number;
    format?: string;
    requestFormat?: string;
    handleChange?: (date: string) => void;
}

export interface S {
    startDate?: any;
    endDate?: any;
}

const cx = classes.bind(css)

export class RangeCalendar extends React.Component<P, S> {
    static defaultProps = {
        label: '',
        format: 'DD.MM.YYYY',
        requestFormat: 'YYYY-MM-DD',
    }

    state = {
        startDate: '',
        endDate: '',
    }

    static getDerivedStateFromProps (props: P, state: S) {
        const next: S = {}
        const { startDate, endDate } = props

        if (!moment(state.startDate).isSame(startDate)) {
            next.startDate = (startDate && moment(startDate)) || null
        }

        if (!moment(endDate).isSame(state.endDate)) {
            next.endDate = (endDate && moment(endDate)) || null
        }

        if (Object.keys(next).length) {
            return {
                ...next,
            }
        }

        return null
    }

    handleChange = (name: string, date: string) =>
        this.setState((state: S) => ({
            ...state, [name]: date,
        }), () => {
            const { requestFormat } = this.props

            if (this.props.handleChange) {
                this.props.handleChange(name, moment(date).format(requestFormat))
            }
        })

    renderDatePicker (name: string, props: any) {
        return (
            <div className={cx({ half: true })}>
                <DatePicker
                    {...props}
                    onChange={this.handleChange.bind(this, name)}
                />
            </div>
        )
    }

    render () {
        const { label, format } = this.props
        const { startDate, endDate } = this.state

        const props: any = {
            locale: 'ru-Ru',
            format,
        }

        props.startDate = startDate
        props.endDate = endDate

        const propsStartDate: any = {
            ...props,
            selected: startDate,
            selectsStart: true,
        }

        const propsEndDate: any = {
            ...props,
            selected: endDate,
            selectsEnd: true,
        }

        return (
            <div className={cx({ calendar: true })}>
                {label &&
                    <div className={css.label}>{label}</div>
                }

                <div className={cx({ group: true })}>
                    {this.renderDatePicker('startDate', propsStartDate)}
                    {this.renderDatePicker('endDate', propsEndDate)}
                </div>
            </div>
        )
    }
}
