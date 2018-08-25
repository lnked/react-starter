import * as React from 'react'
import * as css from './styles.scss'

import { classes } from 'helpers'

import { NavLink } from 'react-router-dom'

export interface P {
    className?: string;
    handleChange?: () => void | boolean;
}

const cx = classes.bind(css)

export class Locale extends React.Component<P, {}> {
    static defaultProps = {
        className: '',
        handleChange: false,
    }

    handleChange = (e: any) => {
        const { handleChange } = this.props

        if (handleChange) {
            handleChange(e)
        }
    }

    render() {
        const list: string[] = ['ru', 'en', 'de']

        const { className } = this.props

        return (
            <div className={cx({ locale: true }, className)}>
                {list &&
                    list.map((lang: string) => (
                        <NavLink key={lang} to={`/${lang}`} className={css.link} activeClassName={css.active}>
                            {lang}
                        </NavLink>
                    ))}
            </div>
        )
    }
}
