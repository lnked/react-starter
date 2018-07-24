import {
    observable,
    action,
    computed
} from 'mobx'

export class UiState {
    @observable type: string = 'grid'

    @computed get view_type () {
        return this.type
    }

    @action set (type: string) {
        this.type = type
    }
}
