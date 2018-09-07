import * as React from 'react'
import * as css from './styles.scss'

import { Group } from 'fragments'

import { Card, CircularProgress } from 'components'

import { STORE_UI, STORE_APP } from 'settings/constants'

import { inject, observer } from 'mobx-react'

export interface S {
    progress: number;
}

@inject(STORE_UI, STORE_APP)
@observer
class PanelsPage extends React.Component<any, S> {
    state = {
        progress: 0,
    }

    interval: any[] = []

    componentDidMount () {
        this.interval[1] = setInterval(() => {
            this.setState((state: S) => {
                return {
                    progress: state.progress + 1,
                }
            })

            if (this.state.progress === 100) {
                clearInterval(this.interval[1])
            }
        }, 100)
    }

    componentWillUnMount () {
        clearInterval(this.interval[1])
    }

    render () {
        const type = 'grid'
        const { progress } = this.state

        return (
            <div className={css.content}>
                <Group type={type}>
                    <Card className={css.product}>
                        <CircularProgress
                            color="red"
                            radius={60}
                            stroke={4}
                            progress={progress}
                        />
                    </Card>

                    <Card className={css.product}>
                        <CircularProgress
                            color="blue"
                            radius={60}
                            stroke={4}
                            progress={progress}
                        />
                    </Card>

                    <Card className={css.product}>
                        <CircularProgress
                            color="green"
                            radius={60}
                            stroke={4}
                            progress={progress}
                        />
                    </Card>
                </Group>
            </div>
        )
    }
}

export default PanelsPage
