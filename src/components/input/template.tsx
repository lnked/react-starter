import * as React from 'react'
import * as css from './styles.scss'

import classNames from 'classnames/bind'

interface P {
    value?: string;
    label?: string;
    referrer: any;
    handleChange: (e: any) => void;
}

const cx = classNames.bind(css)

export const Template = ({ referrer, value, label, handleChange }: P) => (
    <div className={cx({ wrapper: true })}>
        <p>{label}</p>
        <p>value: {value}</p>
        <input
            ref={referrer}
            value={value}
            onChange={handleChange}
        />
    </div>
)
