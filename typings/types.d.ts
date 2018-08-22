declare module "json-loader!*";
declare module "*.json";
declare module '*.css' {
    const content: any;
    export default content;
}

declare module '*.scss' {
    interface IClassNames {
        [className: string]: string
    }

    const classNames: IClassNames

    export = classNames
}

// shared folder
declare module "pages/*";
declare module "modules/*";
declare module "components/*";
declare module "segments/*";
declare module "helpers/*";
declare module "utils/*";
declare module "store/*";

declare const CLIENT_ASSETS: string;
declare module "react-loadable/webpack";

interface Window {
    __INITIAL_STATE__: any;
    __REDUX_DEVTOOLS_EXTENSION__: () => any;
}

declare namespace Express {
    interface Request {
        todoId: number;
    }
}

declare module "*.woff";
declare module "*.woff2";
declare module "*.jpg";
declare module "*.png";
declare module "*.svg";
declare module "*.webp";
