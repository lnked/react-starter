// react.d.ts
// function createRef<T>(): RefObject<T>

declare interface RefObject<T> {
    readonly current: T | null
}

declare interface HTMLInputElement {

}

// type State = Readonly<typeof initialState>

// type Props = {
//     onClick(e: MouseEvent<HTMLElement>): void
//     color: string
// }

declare global {
    type MouseEvent = React.TouchEvent | React.MouseEvent
    // type MouseEvent = React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>

    namespace JSX {
        // tslint:disable-next-line:no-empty-interface
        interface Element extends React.ReactElement<any> { }
        interface ElementClass extends React.Component<any> {
            render(): React.ReactNode;
        }
        interface ElementAttributesProperty { props: {}; }
        interface ElementChildrenAttribute { children: {}; }

        // tslint:disable-next-line:no-empty-interface
        interface IntrinsicAttributes extends React.Attributes { }

        // tslint:disable-next-line:no-empty-interface
        interface IntrinsicClassAttributes<T> extends React.ClassAttributes<T> { }

        interface IntrinsicElements {
            [elemName: string]: any;
        }
    }
}
