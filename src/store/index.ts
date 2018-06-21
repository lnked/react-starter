import UiState from 'store/ui'
import AppState from 'store/app'
import CropsState from 'store/crops'
import OrdersState from 'store/orders'
import BuyersState from 'store/buyers'
import DeclarationsState from 'store/declarations'

import { configure } from 'mobx'

configure({
    enforceActions: process.env.NODE_ENV !== 'production'
})

const ui = new UiState()
const app = new AppState()
const crops = new CropsState()
const orders = new OrdersState()
const buyers = new BuyersState()
const declarations = new DeclarationsState()

export {
    ui,
    app,
    crops,
    buyers,
    orders,
    declarations
}
