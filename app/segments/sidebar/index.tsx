import * as React from 'react'
import * as css from './styles.scss'

import { Logo, SidebarIcon } from 'components'

interface T {
    pages: any;
}

export default class Sidebar extends React.Component<T, {}> {
    static defaultProps = {
        pages: []
    }

    render () {
        const base = ''
        const { pages } = this.props

        return (
            <nav className={css.sidebar}>
                <Logo link={'/'} />

                {pages.map((props: any, id: number) =>
                    (<SidebarIcon key={id} {...props}
                        link={`${base}/${props.system}`}
                    />)
                )}

                <SidebarIcon
                    key="site.settings"
                    icon="settings"
                    title="Настройки сайта"
                    link={`${base}/settings`}
                    className={css.settings}
                />
            </nav>
        )
    }
}
