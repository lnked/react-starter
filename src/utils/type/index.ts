// // export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
// // export type Required<T> = T & {
// //     [P in keyof T]: T[P];
// // }
// // @ts-ignore
// export type Diff<T extends string, U extends string> = ({[P in T]: P} & {[P in U]: never} & {[x: string]: never})[T]
// // @ts-ignore
// export type Omit<T, K extends keyof T> = Pick<T, Diff<keyof T, K>>
// export type Overwrite<T, U> = { [P in Diff<keyof T, keyof U>]: T[P] } & U;
// // export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
// export type PartialProperties<T, K extends keyof T> = Partial<Pick<T, K>> & Omit<T, K>
// // -{ [P in keyof PartialProperties<T, "prop">]: PartialProperties<T, "prop">[P]; }; // Expected
// // +{ [P in "prop" | Exclude<keyof T, "prop">]: PartialProperties<T, "prop">[P]; };  // Actual

// // export type Required<T> = {
// //     [P in Purify<keyof T>]: NonNullable<T[P]>;
// // };
// // export type Purify<T extends string> = { [P in T]: T; }[T];
// // export type NonNullable<T> = T - 'undefined' - null;
