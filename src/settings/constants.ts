export const STORE_UI = 'ui'
export const STORE_APP = 'app'
export const STORE_ROUTER = 'router'

// export enum ActionType {
//     init = 'init',
//     buyGood = 'buyGood',
//     removeGood = 'removeGood',
//     deleteGood = 'deleteGood',
//     fillCat = 'fillCat',
//     fillGoods = 'fillGoods',
//     order = 'order',
//     emptyCart = 'emptyCart',
// };

// enum A {
//     a = 'a',
//     b = 'b',
//     c = 'c'
// }

// trying to type generic vars
// interface Entity {
//     id: number;
//     parentId: number;
//     state: string[]
//     path: string;
//     route: string;
//     lazyPath?: string;
// }

// type Entities<T> = { [key in keyof T]: Entity }

// type RoutesEntity<T> = { [key in keyof T]: Entities<any> }

// interface Nums {
//     one;
//     two;
//     three;
// }

// interface Strs {
//     a;
//     b;
//     c;
// }

// interface MyEntity {
//     nums: Entities<Nums>;
//     strs: Entities<Strs>;
// }
