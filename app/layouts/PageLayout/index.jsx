import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';

// <IndexLink to="/" activeClassName="active">Home</IndexLink>
// <Link to="/" activeClassName="active" onlyActiveOnIndex={true}>Home</Link>
// <li><NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink></li>

export default class PageLayout extends Component {

    static propTypes = {
        children: React.PropTypes.object.isRequired,
        title: React.PropTypes.string
    }

    static defaultProps = {
        title: 'Your Title'
    }

    render () {
        return (
            <div className="app">
                <header className="primary-header">
                    <h1>Page Layout</h1>
                </header>

                <aside className="primary-aside">
                    <ul>
                        <li><Link to="/" activeClassName="active">Home</Link></li>
                        <li><Link to="/page" activeClassName="active">Page</Link></li>
                        <li><Link to="/page/page1" activeClassName="active">Page1</Link></li>
                        <li><Link to="/page/page2" activeClassName="active">Page2</Link></li>
                        <li><Link to="/page/page3" activeClassName="active">Page3</Link></li>
                    </ul>
                </aside>

                <main>
                    {this.props.children}
                </main>
            </div>
        );
    }
}
