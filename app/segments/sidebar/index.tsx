import * as React from 'react'
import * as css from './styles'

import { Logo, SidebarIcon } from 'components'

const base = ''

interface T {
    pages: any;
}

export default class Sidebar extends React.Component<T, {}> {
    static defaultProps = {
        pages: []
    }

    render () {
        const { pages } = this.props

        return (
            <nav className={css.sidebar}>
                <Logo link={base} />

                {pages.map((props: any, id: number) =>
                    (<SidebarIcon key={id} {...props}
                        link={`${base}/${props.system}`}
                    />)
                )}

                <SidebarIcon
                    key="site.settings"
                    icon="settings"
                    title="Настройки сайта"
                    system="settings"
                    component="settings"
                    link={`${base}/settings`}
                    className={css.settings}
                />
            </nav>
        )
    }
}
