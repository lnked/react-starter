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

type Func = (...args?: any[]) => void;

// React.SyntheticEvent<HTMLLinkElement>
// type MouseEvent = React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>

type SyntheticEvent = React.SyntheticEvent

type MouseEvent = React.TouchEvent | React.MouseEvent

type EventHandler<E extends SyntheticEvent<any>> = (event: E) => void;

type Route = {
    path: string;
    component: any;
    exact?: boolean;
    title?: string;
    status?: number;
    robots?: string;
    keywords?: string;
    description?: string;
    statusCode?: number;
    rest?: any;
}

type NodeModule = {
    hot: {
        accept(dependencies: string[], callback: (updatedDependencies: string[]) => void): void;
        accept(dependency: string, callback: () => void): void;
        accept(errHandler?: (err: any) => void): void;
        decline(dependencies?: string[]): void;
        // decline(dependency: string): void;
        // decline(): void;
        dispose(callback: (data: any) => void): void;
        addDisposeHandler(callback: (data: any) => void): void;

        removeDisposeHandler(callback: (data: any) => void): void;
        // ...
    }
}

declare global {
    type unknown = { [key: string]: any } | object | number | string | boolean | symbol | undefined | null | void

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
