import * as React from 'react'
import * as css from './styles'

import axios from 'axios'

export default class Updates extends React.Component<{}, {}> {
    state = {
        releases: []
    }

    componentDidMount () {
        this._handleReleasesLoad()
    }

    _handleReleasesLoad () {
        axios
            .get('/api/releases')
            .then(response => response.data)
            .then(({ data }) => {
                const releases = JSON.parse(data)
                this.setState({ releases })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    _createReleaseItem (release: any) {
        const notes = []

        Object.keys(release.notes).map(key => {
            const items = release.notes[key]
            console.log(key, items)

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
        const list = []
        const { releases } = this.state

        if (releases.hasOwnProperty('list')) {
            releases.list.forEach(release => {
                list.push(this._createReleaseItem(release))
            })
        }

        return (
            <div className={css.list}>
                <h1 className={css.count}>{releases.count} update available</h1>
                { list }
            </div>
        )
    }
}
