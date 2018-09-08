// react.d.ts
// function createRef<T>(): RefObject<T>

declare module 'react';
declare module 'react-dom';
declare module 'react-helmet';
declare module 'react-router-dom';

// react.d.ts
interface RefObject<T> {
    // immutable
    readonly current: T | null
}

interface HTMLInputElement {

}
