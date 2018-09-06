interface Window {
    __INITIAL_STATE__: any;
    __REDUX_DEVTOOLS_EXTENSION__: () => any;
}

declare module 'json-loader!*';
declare module '*.json';
declare module '*.css' {
    const content: any;
    export default content;
}

declare namespace Express {
    interface Request {
        todoId: number;
    }
}

declare module '*.scss' {
    interface IClassNames {
        [className: string]: string
    }

    const classNames: IClassNames

    export = classNames
}

declare module '*.woff';
declare module '*.woff2';
declare module '*.jpg';
declare module '*.png';
declare module '*.svg';
declare module '*.webp';
