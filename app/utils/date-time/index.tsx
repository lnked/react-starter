import * as React from 'react'
import { DTProps } from 'typings/date-time'

export default function DateTime ({ value, format }: DTProps) {
    return (
        <div>
            {value} in format {format}
        </div>
    )
}

// export default class DateTime extends Component<DTProps, {}> {
//     render () {
//         return <div>{this.props.value} as {this.props.format}</div>
//     }
// }
