import UiState from 'store/ui'
import AppState from 'store/app'

import { configure } from 'mobx'

configure({
    enforceActions: process.env.NODE_ENV !== 'production'
})

const ui = new UiState()
const app = new AppState()

export {
    ui,
    app
}

export default {}
