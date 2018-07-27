// import { observable, action } from 'mobx'
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
        console.log({...AppStore.defaultState, ...initialState})

        if (initialState && Object.keys(initialState).length) {
            // extendObservable(this, {...AppStore.defaultState, ...initialState})
            extendObservable(this, initialState)
        }
    }

    @action loadTags = (query: string) => {
        this.query = query
    }
}

export default AppStore
