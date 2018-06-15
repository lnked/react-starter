import { ui } from 'store/ui'
import { crop } from 'store/crop'
import { subscribes } from 'store/subscribes'
import { declaration } from 'store/declaration'

interface P {
    SET_CROP: (id: number) => void;
    SET_CROPS: (list: any) => void;
    SET_VIEW_TYPE: (type: string) => void;
    SET_DECLARATION: (list: any) => void;
}

export const actions: P = {
    SET_CROP (id: number) {
        crop.id = id
        subscribes.ON_CHANGE_CROP()
    },

    SET_CROPS (list: any) {
        crop.crops = list
    },

    SET_DECLARATION (list: any) {
        declaration.list = list
    },

    SET_VIEW_TYPE (type: string) {
        ui.viewType = type
    }
}
