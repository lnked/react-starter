declare namespace JSX {
    export interface Element {}

    // export interface IntrinsicElements { div: any; }

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
