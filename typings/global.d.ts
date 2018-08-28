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
    export function __extends(d: Function, b: Function): void;
    export function __assign(t: any, ...sources: any[]): any;
    export function __rest(t: any, propertyNames: string[]): any;
    export function __decorate(decorators: Function[], target: any, key?: string | symbol, desc?: any): any;
    export function __param(paramIndex: number, decorator: Function): Function;
    export function __metadata(metadataKey: any, metadataValue: any): Function;
    export function __awaiter(thisArg: any, _arguments: any, P: Function, generator: Function): any;
    export function __generator(thisArg: any, body: Function): any;
}

declare let Reflect: Reflect;

interface Reflect {
  deleteProperty: () => void;
  prop: string;
}
