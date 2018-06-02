declare module "json-loader!*";
declare module "*.css";
declare module "*.json";

// shared folder
declare module "components/*";
declare module "services/*";
declare module "utils/*";

declare const CLIENT_ASSETS: string;
declare module "react-loadable/webpack";

interface Window {
    __INITIAL_STATE__: any;
    __REDUX_DEVTOOLS_EXTENSION__: () => any;
}

declare namespace Express {
    export interface Request {
        todoId: number;
    }
}

declare module "*.woff";
declare module "*.woff2";
declare module "*.jpg";
declare module "*.png";
declare module "*.svg";
declare module "*.webp";
