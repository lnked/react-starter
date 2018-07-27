import * as React from 'react'

import { Template } from './template'

export interface P {
    name: string;
    integer: boolean;
    floating: boolean;
    value?: string | number;
}

export interface S {
    value?: string | number;
}

export class Input extends React.Component<P, S> {
    static defaultProps = {
        integer: false,
        floating: false
    }

    state = {
        value: ''
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
                ...state, value
            }
        })
    }

    render () {
        const { value } = this.state

        return (
            <Template
                value={value}
                handleChange={this.handleChange}
            />
        )
    }
}
