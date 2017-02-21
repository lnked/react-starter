import React, { Component } from 'react';
import axios from 'axios';
import Posts from 'components/posts';

export default class Load extends Component {

    static propTypes = {
        posts: React.PropTypes.object.isRequired,
        subreddit: React.PropTypes.string
    }

    static defaultProps = {
        subreddit: 'frontend'
    }

    constructor (props) {
        super(props);

        this.state = {
            posts: []
        };
    }

    componentDidMount () {
        this.handleRedditLoad(this.props.subreddit);
    }

    handleRedditLoad (type) {
        axios.get(`https://www.reddit.com/r/${type}.json`)
            .then((res) => {
                const posts = res.data.data.children.map((obj) => obj.data);
                this.setState({ posts });
            });
    }

    render () {
        return (
            <Posts data={this.state.posts} title={this.props.subreddit} />
        );
    }
}
