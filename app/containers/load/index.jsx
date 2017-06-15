import React, { Component } from 'react'
import { oneOfType, object, string, array } from 'prop-types'
import { Posts } from 'segments'

import 'whatwg-fetch'

export default class Load extends Component {
    static propTypes = {
        subreddit: string,
        posts: oneOfType([
            object,
            array
        ])
    }

    static defaultProps = {
        subreddit: 'reactjs'
    }

    constructor (props) {
        super(props)

        this.state = {
            posts: []
        }
    }

    componentDidMount () {
        this.handleRedditLoad(this.props.subreddit)
    }

    handleRedditLoad (type) {
        fetch(`https://www.reddit.com/r/${type}.json`)
            .then((response) => {
                return response.json()
            })
            .then((response) => {
                const posts = response.data.children.map((obj) => obj.data)
                this.setState({ posts })
            })
    }

    render () {
        return (
            <Posts data={this.state.posts} title={this.props.subreddit} />
        )
    }
}
