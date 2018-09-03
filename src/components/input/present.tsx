import * as React from 'react'
import * as css from './styles.scss'

// const Number = styled.h1`
//   font-size: 36px;
//   line-height: 40px;
//   margin-right: 5px;
//   padding: 0px;
// `;
// //..
// <Container>
//   <Number>{skipRatePre}</Number>
//   <InfoName>Skip Rate</InfoName>
// </Container>

import { classes } from 'helpers'

export interface P {
    value?: string;
    label?: string;
    referrer: any;
    handleChange: (e: any) => void;
}

const cx = classes.bind(css)

export const Present = ({ referrer, value, label, handleChange }: P) => (
    <label className={cx({ wrapper: true })}>
        {label &&
            <div className={cx(css.label)}>{label}</div>
        }

        <input
            ref={referrer}
            value={value}
            onChange={handleChange}
            className={cx(css.control, css.controlInput)}
        />
    </label>
)
