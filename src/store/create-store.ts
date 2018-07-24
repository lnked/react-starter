import { History } from 'history'

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

export const createStores = (history: History, defaultStore?: any[]) => {
    const uiStore = new UiStore()
    const appStore = new AppStore(defaultStore)
    const routerStore = new RouterStore(history)

    return {
        [STORE_UI]: uiStore,
        [STORE_APP]: appStore,
        [STORE_ROUTER]: routerStore
    }
}
