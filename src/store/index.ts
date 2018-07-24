import { configure } from 'mobx'

import { UiState } from 'store/ui'
import { AppState } from 'store/app'

configure({
    enforceActions: process.env.NODE_ENV !== 'production'
})

const ui = new UiState()
const app = new AppState({
    query: '',
    isLoading: false,
    results: []
})

export {
    ui,
    app
}

export interface StoreMap {
    ui: UiState,
    app: AppState
}
