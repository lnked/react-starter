// import styles from './styles.scss';
import React, { Component } from 'react';

export default class Users extends Component {
    render () {
        return (
            <div>
                <h1>User list</h1>
                <div className="master">
                    <ul />
                </div>
                <div className="detail">
                    test
                </div>
            </div>
        );
    }
}
// <li key={user.id}><Link to={`/user/${user.id}`}>{user.name}</Link></li>
