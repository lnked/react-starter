declare let Event: any;

type Func = () => void;

declare let Reflect: Reflect;

declare global {
    // how io-ts's `mixed` type is currently defined
    type unknown = { [key: string]: any } | object | number | string | boolean | symbol | undefined | null | void
}
/**
 * Describe a new type to require non-typescript source files like CSS and other resources.
 */
declare const require: {
    <T>(path: string): T;
    (paths: string[], callback: (...modules: any[]) => void): void;
    ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void) => void;
};

// for style loader
declare module '*.scss' {
    const styles: any;
    export = styles;
}

// ... existing global typing defs
declare module 'tslib' {
    export function __extends(d: Func, b: Func): void;
    export function __assign(t: any, ...sources: any[]): any;
    export function __rest(t: any, propertyNames: string[]): any;
    export function __decorate(decorators: Func[], target: any, key?: string | symbol, desc?: any): any;
    export function __param(paramIndex: number, decorator: Func): Func;
    export function __metadata(metadataKey: any, metadataValue: any): Func;
    export function __awaiter(thisArg: any, _arguments: any, P: Func, generator: Func): any;
    export function __generator(thisArg: any, body: Func): any;
}

interface Reflect {
  get: (target: any, propertyKey: any) => void;
  has: (target: any, propertyKey: any) => boolean;
  apply: (target: any, thisArgument: any, argumentsList: any[]) => void;
  defineProperty: (target: any, propertyKey: number | string, attributes: any) => boolean;
  deleteProperty: (target: any, propertyKey: number | string) => boolean;
  prop: string;
}

declare namespace JSX {
    export interface IntrinsicElements {
        [elemName: string]: any;
    }

    export interface ElementClass {
        render: any;
    }

    export interface ElementChildrenAttribute {
        children: {};
    }
}

// shared folder
declare module 'pages/*'
declare module 'fragments/*'
declare module 'components/*'
declare module 'helpers/*'
declare module 'utils/*'
declare module 'store/*'
declare module 'hocs/*'
declare module 'theme'
declare module 'config'
declare module 'assets'
declare module 'typings'
declare module 'layouts'
declare module 'helpers/api'
declare module 'helpers/get'
declare module 'helpers/store'
declare module 'helpers/token'
declare module 'helpers/request'
declare module 'helpers/handlers'
declare module 'helpers/predicts'
declare module 'loadable-components'
declare module 'mobx'
declare module 'mobx-react'
declare module 'mobx-react-router'
declare module 'images'
declare module 'styles'
declare module 'scripts'
declare module 'svgstore'
declare module 'settings'
declare module 'settings/routes'
declare module 'settings/firebase'
declare module 'settings/constants'
