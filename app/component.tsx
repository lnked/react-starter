import * as React from 'react'

export interface IMessageProps {
    text: string;
    message: string;
}

export default ({
    text,
    message,
}

IMessageProps) => (
    <div>
        <h1>{text}</h1>
        <div>{message}</div>
    </div>
)


import * as React from "react";

export class App extends React.Component<any, any> {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}



interface IProps { name: string; }

export class App extends React.Component<IProps, {}> {}


import * as React from "react";
import * as ReactDOM from "react-dom";

import { App } from "./components/App";

const ROOT = document.querySelector(".container");

ReactDOM.render(<App name="Jamala" />, ROOT);
