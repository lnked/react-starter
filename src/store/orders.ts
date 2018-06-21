import { request } from 'helpers/request'

import {
    observable,
    action,
    computed
} from 'mobx'

export default class OrdersState {
    @observable list: Array<any> = []
    @observable company_id: number = 13

    load = () => {
        request.get(`/marketplace/${this.company_id}/declaration`)
            .then(res => res.data)
            .then(response => {
                const list: Array<any> = []

                response.results.map(item => {
                    item.title = item.crop_title
                    item.attributes = []

                    list.push(item)
                })

                console.log('orders: ', list)

                this.set(list)
            })
            .catch(response => console.log(`marketplace/${this.company_id}/declaration ERROR: `, response))
    }

    @computed
    get orders () {
        return this.list
    }

    @action
    set (list: any) {
        this.list = list
    }
}
