// react.d.ts
// function createRef<T>(): RefObject<T>

declare module 'react';

// react.d.ts
interface RefObject<T> {
    // immutable
    readonly current: T | null
}

interface HTMLInputElement {

}
