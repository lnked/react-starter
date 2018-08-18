import * as React from 'react'

import { Present } from './present'

export interface P {
    name: string
    label?: string
    value?: string | number
    integer?: boolean
    floating?: boolean
}

export interface S {
    value?: string | number
}

export class Input extends React.Component<P, S> {
    static defaultProps = {
        label: '',
        value: '',
        integer: false,
        floating: false,
    }

    input: any = React.createRef()

    state = {
        value: '',
    }

    // static getDerivedStateFromProps (props: P, state: S) {
    //     if (state.value !== props.value) {
    //         return {
    //             value: props.value,
    //             touch: false
    //         }
    //     }

    //     return {
    //         touch: false
    //     }
    // }

    componentDidMount() {
        if (this.input && this.input.current) {
            this.input.current.value = 'xxx'
        }
    }

    prepared = (value: string) => {
        const { integer, floating } = this.props

        if (integer) {
            return parseInt(value, 10)
        } else if (floating) {
            return parseFloat(value)
        }

        return value
    }

    handleChange = (e: any) => {
        const value = this.prepared(e.target.value)

        this.setState((state: S) => {
            return {
                ...state,
                value,
            }
        })
    }

    render() {
        const { value } = this.state
        const { label } = this.props

        return <Present label={label} value={value} referrer={this.input} handleChange={this.handleChange} />
    }
}
