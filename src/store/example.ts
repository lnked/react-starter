// import { observable, action, extendObservable } from 'mobx';

// export class TagsStore {
//     private static defaultState: any = {
//         query: '',
//         isLoading: false,
//         results: [],
//     };

//     @observable public results: string[];

//     @observable public isLoading: boolean;

//     @observable public query: string;

//     constructor(initialState: any) {
//         extendObservable(this, {...defaultState, ...initialState});
//     }

//     @action public loadTags = (query: string) => {
//         this.query = query;

//         // do something here ..
//     }
// }

// export interface StoreMap {
//     tags: TagsStore,
// }
