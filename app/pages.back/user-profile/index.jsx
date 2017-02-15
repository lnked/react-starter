import React, { Component } from 'react';

export default class UserProfile extends Component {
    render () {
        return (
            <h1>User Profile for userId: {this.props.params.userId}</h1>
        );
    }
}

UserProfile.propTypes = {
    params: {
        userId: React.PropTypes.string
    }
};
