import { crop } from 'store/crop'
import { request } from 'helpers/request'
// import { actions } from 'store/actions'

interface P {
    ON_CHANGE_CROP: any;
}

export const subscribes: P = {
    ON_CHANGE_CROP () {
        console.log('onCropChange: invoked. counter.count = ', crop.id)
        console.log('onCropChange: invoked. counter.count = ', crop.crops)

        request.get(`/marketplace/declaration?crop_id=${this.getCrop}`)
            .then(response => response.data.results)
            .then(data => {
                console.log(data)

                // data.map(item => {
                //     const current = crop.crops[item.crop_id]

                //     item.title = item.crop_title
                //     item.spine = true

                //     if (item.attributes.length) {
                //         item.attributes.map(attr => {
                //             const finded = current.attributes.find(element =>
                //                 element.slug === attr.slug
                //             )

                //             attr.name = finded.name
                //         })
                //     }
                // })

                // actions.SET_DECLARATION(data)
            })
    }
}
