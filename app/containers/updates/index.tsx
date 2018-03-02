import * as React from 'react'
import * as css from './styles'

import axios from 'axios'

import { Content } from 'segments'

interface S {
    releases: any;
}

export default class Updates extends React.Component<{}, S> {
    state = {
        releases: []
    }

    componentDidMount () {
        this._handleReleasesLoad()
    }

    _handleReleasesLoad () {
        axios
            .get('/api/releases')
            .then((response) => {
                this.setState({ releases: response.data.json })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    _createReleaseItem (release: any) {
        const notes: any = []

        Object.keys(release.notes).map((key: string) => {
            const items = release.notes[key]

            items.map((note: any, index: number) => {
                notes.push(<li className={css[key]} key={`${key}.${index}`}>{note}</li>)
            })
        })

        return (
            <div className={css.release} key={release.version}>
                <div className={css.version}>{release.version}</div>
                <div className={css.date}>{release.date}</div>
                <ul className={css.notes}>{notes}</ul>
            </div>
        )
    }

    render () {
        const list: any = []
        const { releases }: any = this.state

        if (releases.hasOwnProperty('list')) {
            releases.list.forEach((release: any) => {
                list.push(this._createReleaseItem(release))
            })
        }

        return (
            <Content>
                <h1 className={css.count}>{releases.count} update available</h1>
                {list}
            </Content>
        )
    }
}
