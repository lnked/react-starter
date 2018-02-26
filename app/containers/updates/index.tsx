import * as React from 'react'
import * as css from './styles'

// import 'whatwg-fetch'
import axios from 'axios'

export default class Updates extends React.Component<{}, {}> {
    state = {
        releases: []
    }

    componentDidMount () {
        this.handleRedditLoad('reactjs')
    }

    handleRedditLoad (type) {
        // fetch(`https://www.reddit.com/r/${type}.json`)
        //     .then((response) => response.json())
        //     .then((response) => {
        //         const releases = response.data.children.map((obj) => obj.data)

        //         this.setState({ releases })
        //     })

        axios.patch('./request.json')
            .then(response => response.data)
            .then(releases => {
                console.log(releases)

                // const data = this.state.data.map(item => {
                //     if (item.id !== updatedItem.id) return item

                //     return {
                //         ...item,
                //         ...updatedItem
                //     }
                // })

                // this.setState({ data })
            })
    }

    render () {
        const { releases } = this.state

        console.log(releases)

        return (
            <div>
                <h1>1 update available</h1>

                <div className={css.release}>
                    <h2 className={css.version}>2.6.3010</h2>
                    <p className={css.date}>Released on 2/20/2018</p>
                    <div className={css.notes}>
                        <ul>
                            <li className={css.added}>The Control Panel.</li>
                            <li className={css.improved}>The Control Panel.</li>
                            <li className={css.improved}>Rich Text fields no longer</li>
                            <li className={css.fixed}>Fixed a bug where run charts .</li>
                            <li className={css.fixed}>Fixed a bug where the New.</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
