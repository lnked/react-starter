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
        console.log(release)
        return (<div />)
        // return (
        //     <li className={css.post__item} key={post.id}>
        //         {['self', 'default'].indexOf(post.thumbnail) < 0 && (
        //             <div>
        //                 <img src={post.thumbnail} alt="" />
        //             </div>
        //         )}
        //         <Link to={post.url} target="_blank" rel="noopener">{post.title}</Link>
        //         <p>{post.author_flair_text}</p>
        //     </li>
        // )
    }

    render () {
        const { releases } = this.state

        console.log('releases: ', releases)
        console.log('releases list: ', releases.list)

        // (this._createReleaseItem) }
        // {
        //     releases.list.forEach(release => {
        //         console.log(release)
        //     })
        // }
        return (
            <div className={css.list}>
                <h1>{releases.count} update available</h1>
            </div>
        )
    }
}
