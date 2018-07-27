import * as React from 'react'

import { Template } from './template'

export interface S {
    value: string;
}

export class Input extends React.Component<{}, S> {
    state = {
        value: ''
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
