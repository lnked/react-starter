// import { observable, action, extendObservable } from 'mobx'
import { observable, action } from 'mobx'

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
        console.log(initialState)
        // extendObservable(this, {...AppStore.defaultState, ...initialState})
    }

    @action loadTags = (query: string) => {
        this.query = query
    }
}

export default AppStore
