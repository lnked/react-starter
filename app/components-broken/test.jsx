'use strict';

import React from 'react';
import { Link } from 'react-router';


const Header = (props) => {

    return (
        <header className="main">
        <div className="container">

            <div className="logo">
                <Link to="/">Productivity Application</Link>
            </div>

            <nav>
                <Link to="/" activeClassName="active">Home</Link>
                <span className="sep"></span>
                <Link to="/features" activeClassName="active">Features</Link>
                <span className="sep"></span>
                <Link to="/about" activeClassName="active">About</Link>
                <span className="sep"></span>
                <Link to="/contact-us" activeClassName="active">Contact Us</Link>
            </nav>

        </div>
        </header>
    );

}

export default Header;


'use strict';

import React from 'react';
import Header from 'app/components/Header';


const DefaultLayout = (props) => {

    return (
        <div className="website--layout">

            <Header />

            <div className="page-content">
            <div className="container">
                { props.children }
            </div>
            </div>

        </div>
    );

}

export default DefaultLayout;


'use strict';

import React from 'react';
import { Row, Col } from 'antd';


const Heading = (props) => {

    return (
        <Row>
        <Col span={14} offset={5}>
            <div className="heading">
                { props.title }
                { props.subtitle &&
                    <div className="subtitle">{ props.subtitle }</div>
                }
            </div>
        </Col>
        </Row>
    );

}


const URL = (props) => {
    return (
        <a href={props.to} target="_blank" rel="nofollow">{ props.title ? props.title : props.to }</a>
    )
}


export {
    Heading,
    URL,
};



'use strict';

import React from 'react';
import DefaultLayout from 'app/layouts/Default';
import { Heading } from 'app/components/UI';
import { Row, Col, Carousel } from 'antd';


const Home = (props) => {

    return (
        <DefaultLayout>

            <Heading
                title="Hey You, Yes You!, Want to be More Productive? Have lists of things you care about? Love simple and sexy UI?"
            />

            <Col span={24} className="component--slider">
                <Carousel autoplay autoplaySpeed={5000}>
                    <div>
                        <div className="image">
                            <img src="/images/slider/1.png" />
                        </div>
                        <div className="title">This is a screenshot of the Board view page</div>
                    </div>
                    <div>
                        <div className="image">
                            <img src="/images/slider/2.png" />
                        </div>
                        <div className="title">This is a screenshot of The Login page in Chinese Language.</div>
                    </div>
                </Carousel>
            </Col>

        </DefaultLayout>
    );

}

export default Home;

'use strict';

import React from 'react';
import DefaultLayout from 'app/layouts/Default';
import { Heading } from 'app/components/UI';
import { Row, Col, Icon } from 'antd';


const Features = (props) => {

    const APPLICATION_FEATURES = [
        { status: true, title: 'Static Application', description: 'You can host the app on any Static Host/CDN instead of a server', },
        { status: true, title: 'Boards', description: 'Boards are the gateway to your lists, You can have as many boards as you want', },
        { status: true, title: 'Lists', description: 'Each list can easily be re-arranged and updated, You can add multiple cards to a list', },
        { status: true, title: 'Cards', description: 'Cards are the meat of this app, you can add as many cards as you like, re-arrange them, drag them from one list to another, etc', },
        { status: true, title: 'Todo List', description: 'Each card has Todo List tab, There you can add your todo list items, update them, mark them as completed and so on.', },
        { status: true, title: 'Card Meta', description: 'Each card has meta section where you can specify Duedate, Link, Image and the appropriate icons will appear below card in the list view., If image URL is specified, Image will appear above the card title.', },
        { status: true, title: 'Custom Background', description: 'Each board, list and card can have different Background color, Boards can have background images as well. To change the background color of board just edit the board by clicking the Edit icon below the header and there you can update board details along with background color.', },
        { status: true, title: 'Settings', description: 'You can update your details, password and preferred language in the settings page', },
        { status: true, title: 'Public Boards', description: 'Now you can make boards public, Public boards are accessible to all the users with the board URL., By default all boards are private.', },
        { status: true, title: 'Code Splitting', description: "Split the code into different files and only load those files when necessary., Enable tree shaking so we only include the code we're actually using in the app.", },
        { status: true, title: 'Lists Spacing', description: 'Now you can add spaces between lists, You can add space before and after a list. (might be useful to some of you)', },
        { status: true, title: 'Customizations', description: 'Now you have more control over specifying background colors, you can either select it using colorpicker or enter it manually, it can be Color Names, HEX, RGB or RGBA.', },
        { status: true, title: 'Multiple Languages', description: 'Added support for multiple languages, Current translation of Chinese langugae is done using Google Translate.', },
        { status: true, title: 'Card Positioning', description: 'Now you can top and bottom margin to any card, Giving your more flexibility and control over the UI.', },
        { status: true, title: 'Loading Indicator', description: 'Since the project makes use of Webpack code splitting, Sometimes it felt like clicks were unresponsive, Now you can see loading message whenever new script(s) is being loaded.', },
    ];


    return (
        <DefaultLayout>

            <Heading
                title="Some of the Features of this Application."
                subtitle="Given below is a list of features of this application., If you have any suggestions for a feature, Just create a new issue or let me know."
            />
    

            <Row type="flex" className="component--features">
                { APPLICATION_FEATURES.map( (feature,index) => {
                    return (
                        <Col key={index} xs={24} sm={12} md={8} className="feature-container">
                        <div className="feature">
                            <div className="title">
                                <div className="status">{ feature.status ? <Icon type="check-circle-o" /> : <Icon type="close-circle-o" /> }</div>
                                { feature.title }
                            </div>
                            <div className="description">{ feature.description }</div>
                        </div>
                        </Col>
                    );
                }) }
            </Row>


        </DefaultLayout>
    );

}

export default Features;


'use strict';

import React from 'react';
import DefaultLayout from 'app/layouts/Default';
import { Heading, URL } from 'app/components/UI';
import { Row, Col } from 'antd';


const About = (props) => {

    return (
        <DefaultLayout>

            <Heading
                title="Productivity Application - Kanban Style Customizable Boards, Lists and Cards to make you more productive."
                subtitle="Kanban style, Trello inspired Productivity application built using the awesome React, Ant Design, Apollo Client and other fantastic libraries."
            />

            <Col span={14} offset={5} style={{ marginTop: 40 }}>
                <p>For installation instructions and how to use this application, Please visit <URL to="https://github.com/dhruv-kumar-jha/productivity-frontend" /></p>
            </Col>


        </DefaultLayout>
    );

}

export default About;


'use strict';

import React from 'react';
import DefaultLayout from 'app/layouts/Default';
import { Heading } from 'app/components/UI';
import { Row, Col, message } from 'antd';


const ContactUs = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        message.info('Message sending functionality is not yet implemented.');
    }


    return (
        <DefaultLayout>

            <Heading
                title="Who doesn't love to get Feedback and Suggestions?"
                subtitle="We would love to hear from you., Just fill the form below and we will get in touch with you soon (if required)."
            />

            <Col span={14} offset={5}>
            <div className="component__form">
            <form onSubmit={ handleSubmit }>

                <div className="input">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" placeholder="John Doe" autoFocus={true} />
                </div>
                <div className="input">
                    <label htmlFor="email">Email Address</label>
                    <input type="text" id="email" placeholder="john.doe@gmail.com" />
                </div>
                <div className="input">
                    <label htmlFor="message">Your Message</label>
                    <textarea type="text" id="message" placeholder="Please enter your message here..."></textarea>
                </div>

                <button type="submit" className="button">Send Message</button>

            </form>
            </div>
            </Col>

        </DefaultLayout>
    );

}

export default ContactUs;