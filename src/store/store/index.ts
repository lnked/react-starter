import { ui } from 'store/ui'
import { crop } from 'store/crop'
import { actions } from 'store/actions'
import { computed } from 'store/computed'
import { declaration } from 'store/declaration'

import {
    observable,
    configure,
    // reaction,
    // autorun,
    action
    // when
} from 'mobx'

configure({
    enforceActions: process.env.NODE_ENV !== 'production'
})

export const store = observable({
    ...ui,
    ...crop,
    ...actions,
    ...computed,
    ...declaration
}, {
    SET_CROP: action,
    SET_CROPS: action,
    SET_VIEW_TYPE: action,
    SET_DECLARATION: action
})
