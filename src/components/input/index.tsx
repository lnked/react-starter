import * as React from 'react'

import { Template } from './template'

export interface P {
    name: string;
    value?: string | number;
}

export interface S {
    value?: string | number;
}

export class Input extends React.Component<P, S> {
    state = {
        value: ''
    }

    static getDerivedStateFromProps (props: P, state: S) {
        if (state.value !== props.value) {
            return {
                value: props.value
            }
        }

        return null
    }

    handleChange = (e: any) => {
        const { value } = e.target

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
