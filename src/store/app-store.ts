import { observable, action, extendObservable } from 'mobx'

export class AppStore {
    static defaultState: any = {
        query: '',
        isLoading: false,
        results: []
    }

    // @observable results: string[]

    // @observable isLoading: boolean

    @observable query: string = ''

    constructor (initialState?: any) {
        extendObservable(this, {...AppStore.defaultState, ...initialState})
    }

    @action loadTags = (query: string) => {
        this.query = query
    }
}

export default AppStore
