// react.d.ts
// function createRef<T>(): RefObject<T>

// export const fail = <T>(message: string): T => {
//     throw message;
// }

// let fromStage: Stage = stages
//         .filter(s => s.id === stageRelation.fromId)
//         .shift() || fail<Stage>('Should have found at least one stage.');

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

type Func = (...args: any[]) => void;

// React.SyntheticEvent<HTMLLinkElement>
// type MouseEvent = React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>

type SyntheticEvent = React.SyntheticEvent

// type MouseEvent = React.TouchEvent | React.MouseEvent

// type EventHandler<E extends SyntheticEvent<any>> = (event: E) => void;

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

declare interface NodeModule {
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

declare class Component<P, S> {
    setState<K extends keyof S>(f: (prevState: S, props: P) => Pick<S, K>, callback?: () => any): void;
}

type unknown = { [key: string]: any } | object | number | string | boolean | symbol | undefined | null | void

// function setState<T, K extends keyof T>(obj: T, state: Pick<T, K>) {
//     for (let k in state) {
//         obj[k] = state[k];
//     }
// }

// setState<K extends keyof S>(f: (prevState: S, props: P) => Pick<S, K>, callback?: () => any): void;
// setState<K extends keyof S>(state: Pick<S, K>, callback?: () => any): void;

// namespace JSX {
//     // tslint:disable-next-line:no-empty-interface
//     interface Element extends React.ReactElement<any> { }
//     interface ElementClass extends React.Component<any> {
//         render(): React.ReactNode;
//     }
//     interface ElementAttributesProperty { props: {}; }
//     interface ElementChildrenAttribute { children: {}; }

//     // tslint:disable-next-line:no-empty-interface
//     interface IntrinsicAttributes extends React.Attributes { }

//     // tslint:disable-next-line:no-empty-interface
//     interface IntrinsicClassAttributes<T> extends React.ClassAttributes<T> { }

//     interface IntrinsicElements {
//         [elemName: string]: any;
//     }
// }
