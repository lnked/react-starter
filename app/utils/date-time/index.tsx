import * as React from 'react'
import T from 'typings/date-time'

export const DateTime = ({ value, format }: T) => {
    return (
        <div>
            {value} in format {format}
        </div>
    )
}
