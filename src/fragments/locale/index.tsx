import * as React from 'react'
import * as css from './styles.scss'

import { classes } from 'helpers'

import { Link } from 'react-router-dom'

export interface P {
    checked?: string;
    className?: string;
    // handleChange?: () => void | boolean;
}

const cx = classes.bind(css)

export const Locale = ({ checked, className = '' }: P) => {
    const list: string[] = ['ru', 'en', 'de']

    return (
        <div className={cx({ locale: true }, className)}>
            {list &&
                list.map((lang: string) => (
                    <Link
                        key={lang}
                        to={`/${lang}`}
                        className={cx(css.link, { active: checked === lang })}>
                        {lang}
                    </Link>
                ))}
        </div>
    )
}
