import { History } from 'history'

import { configure } from 'mobx'

import { UiStore, AppStore, RouterStore } from 'store'

import { STORE_UI, STORE_APP, STORE_ROUTER } from 'settings/constants'

configure({
    enforceActions: 'observed', // 'never' | 'always' | 'observed'
})

export const createStore = (history: History, initialState?: any[]) => {
    console.log(initialState)
    const uiStore = new UiStore()
    const appStore = new AppStore()
    const routerStore = new RouterStore(history)

    return {
        [STORE_UI]: uiStore,
        [STORE_APP]: appStore,
        [STORE_ROUTER]: routerStore,
    }
}
