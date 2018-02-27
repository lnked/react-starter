import * as React from 'react'
// import * as PropTypes from 'prop-types'
import { Posts } from 'segments'

import 'whatwg-fetch'

interface T {
    subreddit: string;
    posts?: React.ReactChild | [] | any[];
}

interface S {
    posts: any;
}

export default class Load extends React.Component<T, S> {
    static defaultProps = {
        subreddit: 'reactjs'
    }

    state = {
        posts: []
    }

    componentDidMount () {
        this.handleRedditLoad(this.props.subreddit)
    }

    handleRedditLoad (type: any) {
        fetch(`https://www.reddit.com/r/${type}.json`)
            .then((response) => response.json())
            .then((response) => {
                const posts = response.data.children.map((obj: any) => obj.data)

                this.setState({ posts })
            })
    }

    render () {
        return (
            <Posts data={this.state.posts} title={this.props.subreddit} />
        )
    }
}
