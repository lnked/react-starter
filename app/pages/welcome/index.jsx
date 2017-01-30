import React, { Component } from 'react';
import { Link } from 'react-router';
import Navbar from '../components/navbar/index';

export default class Welcome extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div>
                <header>Welcome</header>
                <aside>
                    <ul className="navbar">
                        <li><Link to="/" activeClassName="active" className="navbar__link">Home</Link></li>
                        <li><Link to="/users" activeClassName="active" className="navbar__link">Users</Link></li>
                        <li><Link to="/widgets" activeClassName="active" className="navbar__link">Widgets</Link></li>
                    </ul>
                </aside>
                <main>
                    {this.props.children}
                </main>
            </div>
        );
    }
}

Welcome.propTypes = {
    children: React.PropTypes.string
};
