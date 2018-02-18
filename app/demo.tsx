// импорт react в TS отличается от привычного import React from 'react' из-за особенностей модульной системы в TS
import * as React from 'react';
import * as ReactDOM from 'react-dom';

// необходимо описывать интерфейсы для props и state компонентов
interface IAppProps {
    title: string;
}

// функциональный компонент
const App = (props: IAppProps) => <h1>{props.title}</h1>;

ReactDOM.render(
    <App title="Hello, React!" />,
    document.getElementById('root')
);
