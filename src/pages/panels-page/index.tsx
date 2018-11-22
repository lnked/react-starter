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
        progress: any;
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

      progress && Object.keys(progress).map((id: string) => {

        this.interval[id] = setInterval(() => {

          this.setState((state: S) => ({
            progress: {
              ...state.progress,
              [id]: {
                ...state.progress[id],
                progress: state.progress[id].progress - 1,
              },
            },
          }), () => {

            const prog: any = this.state.progress

            if (prog && prog[id] && prog[id].progress === 0) {

              this.stopInterval(id)

            }

          })

        }, 500)

      })

    }

    componentWillUnmount () {

      const { progress } = this.state

      progress && Object.keys(progress).map((id: any) => {

        this.stopInterval(id)

      })

    }

    stopInterval = (id: string): void => {

      clearInterval(this.interval[id])

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
                    content={progress[id].progress}
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

export { PanelsPage }
export default PanelsPage
