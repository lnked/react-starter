import * as React from 'react'
import * as css from './styles.scss'

import { Group } from 'fragments'

import { Card, CircularProgress } from 'components'

import { STORE_UI, STORE_APP } from 'settings/constants'

import { inject, observer } from 'mobx-react'

export interface Action {
    [key: number]: {
        name: string;
        color: string,
        seconds: number;
    }
}

export interface S {
    progress: Action[];
}

@inject(STORE_UI, STORE_APP)
@observer
class PanelsPage extends React.Component<any, S> {
    state = {
        progress: {
            1: {
                name: '1',
                color: 'red',
                seconds: 25,
                progress: 25,
            },
            2: {
                name: '2',
                color: 'green',
                seconds: 60,
                progress: 60,
            },
            3: {
                name: '3',
                color: 'blue',
                seconds: 120,
                progress: 120,
            },
        },
    }

    interval: any[] = []

    componentDidMount () {
        this.startInterval()
    }

    startInterval = () => {
        const { progress } = this.state

        progress && Object.keys(progress).map(name => {
            this.interval[name] = setInterval(() => {
                this.setState((state: S) => {
                    return {
                        progress: {
                            ...state.progress,
                            [name]: {
                                ...state.progress[name],
                                progress: state.progress[name].progress - 1,
                            },
                        },
                    }
                })

                if (this.state.progress[name].progress === 0) {
                    this.stopInterval(name)
                }
            }, 500)
        })
    }

    componentWillUnMount () {
        const { progress } = this.state

        progress && Object.keys(progress).map(name => {
            this.stopInterval(name)
        })
    }

    stopInterval = (name: string) => {
        clearInterval(this.interval[name])
    }

    progress = (seconds: number, value: number) => {
        return value / seconds * 100
    }

    render () {
        const type = 'grid'
        const { progress } = this.state

        return (
            <div className={css.content}>
                <Group type={type}>
                    {progress && Object.keys(progress).map(id => {
                        const value = this.progress(progress[id].seconds, progress[id].seconds - progress[id].progress)

                        return (
                            <Card key={id} className={css.product}>
                                <CircularProgress
                                    stroke={4}
                                    color={progress[id].color}
                                    content={`${progress[id].progress}`}
                                    progress={value}
                                />
                            </Card>
                        )
                    })}
                </Group>
            </div>
        )
    }
}

export default PanelsPage
