import React, { Component } from 'react'

interface Props {
    value: string,
    format?: string
}

// export default function DateTime ({ value, format }: Props) {
//     return (
//         <div>
//             {value} in format {format}
//         </div>
//     )
// }

export default class DateTime extends Component<Props, {}> {
    render () {
        return <div>{this.props.value} as {this.props.format}</div>
    }
}
