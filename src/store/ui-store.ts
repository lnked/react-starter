// import { AppStore } from './'
import { observable, action, computed } from 'mobx'

export class UiStore {
    @observable
    type: string = 'grid'

    // constructor (initialState?: any) {}

    @computed
    get view_type () {
        return this.type
    }

    @action
    set (type: string) {
        this.type = type
    }
}

export default UiStore
