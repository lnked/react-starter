import * as React from 'react'
import * as css from './styles.scss'

import classNames from 'classnames/bind'

interface P {
    value: string;
    label: string;
    handleChange: (e: any) => void;
}

const cx = classNames.bind(css)

export const Template = ({ value, label, handleChange }: P) => (
    <div className={cx({ wrapper: true })}>
        <p>{label}</p>
        <p>value: {value}</p>
        <input
            value={value}
            onChange={handleChange}
        />
    </div>
)
