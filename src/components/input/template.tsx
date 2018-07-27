import * as React from 'react'
import * as css from './styles.scss'

import classNames from 'classnames/bind'

export interface P {
    value: string;
    handleChange: (e: any) => void;
}

const cx = classNames.bind(css)

export const Template = ({ value, handleChange }) => (
    <div className={cx({ wrapper: true })}>
        <p>value: {value}</p>
        <input
            value={value}
            onChange={handleChange}
        />
    </div>
)
