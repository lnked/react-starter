// react.d.ts
// function createRef<T>(): RefObject<T>

// react.d.ts
declare interface RefObject<T> {
    // immutable
    readonly current: T | null
}

declare interface HTMLInputElement {

}

declare namespace JSX {
    export interface Element {}

    export interface IntrinsicElements { div: any; }

    // export interface IntrinsicElements {
    //     [elemName: string]: any;
    // }

    export interface ElementClass {
        render: any;
    }

    export interface ElementChildrenAttribute {
        children: {};
    }
}
