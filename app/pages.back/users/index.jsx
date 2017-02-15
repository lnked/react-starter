import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Users extends Component {
    // {this.state.users.map((user) => (
    //     <li key={user.id}><Link to={`/user/${user.id}`}>{user.name}</Link></li>
    // ))}
    render () {
        return (
            <div>
                <h1>Users</h1>
                <div className="master">
                    <ul>
                        <li key="10"><Link to={'/user/10'}>XXX</Link></li>
                        <li key="20"><Link to={'/user/20'}>XXX</Link></li>
                    </ul>
                </div>

                <div className="detail">
                    xxxx
                </div>
            </div>
        );
    }
}
