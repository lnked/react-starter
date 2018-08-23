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

declare module 'tslib' {
    const __rest: any;
    const __extends: any;

    export = __rest;
    export = __extends;
}

declare let Reflect: Reflect;

interface Reflect {
  deleteProperty: () => void;
  prop: string;
}
