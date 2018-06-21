import {
    observable,
    action,
    computed
} from 'mobx'

export default class UiState {
    @observable viewType: string = 'grid'

    @computed
    get view_type () {
        return this.viewType
    }

    @action
    SET_VIEW_TYPE (type: string) {
        this.viewType = type
    }
}
