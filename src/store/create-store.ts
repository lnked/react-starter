import { History } from 'history'

import { configure } from 'mobx'

import {
    UiStore,
    AppStore,
    RouterStore
} from 'store'

import {
    STORE_UI,
    STORE_APP,
    STORE_ROUTER
} from 'settings/constants'

export const createStore = (history: History, initialState?: any[]) => {
    const uiStore = new UiStore()
    const appStore = new AppStore(initialState)
    const routerStore = new RouterStore(history)

    configure({
        enforceActions: true
    })

    return {
        [STORE_UI]: uiStore,
        [STORE_APP]: appStore,
        [STORE_ROUTER]: routerStore
    }
}
