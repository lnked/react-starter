import styles from './styles.scss';
import React, { Component } from 'react';
import { Link } from 'react-router';
import axios from 'axios';

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
        axios.get(`http://www.reddit.com/r/${type}.json`)
            .then((res) => {
                const posts = res.data.data.children.map((obj) => obj.data);
                this.setState({ posts });
            });
    }

    render () {
        console.log('posts: ', this.state.posts);
        return (
            <div>
                <h1>{`/r/${this.props.subreddit}`}</h1>
                <ul className={styles.post}>
                {this.state.posts.map((post) =>
                    <li className={styles.post__item} key={post.id}>
                        {['self', 'default'].indexOf(post.thumbnail) < 0 && (
                            <img src={post.thumbnail} alt="" />
                        )}
                        <br />
                        <Link to={post.url} target="_blank">{post.title}</Link>
                        <p>{post.author_flair_text}</p>
                    </li>
                )}
                </ul>
            </div>
        );
    }
}
