import { request } from 'helpers/request'

import { formatMoney } from 'helpers/handlers'

import {
    observable,
    action,
    computed
} from 'mobx'

export default class DeclarationsState {
    @observable list: Array<any> = []

    load (id, crops, filters) {
        // console.log('declarations load: crop_id = ', id)
        // console.log('declarations load: crops = ', crops)
        console.log('declarations load: filters = ', filters)

        const query: Array<string> = []
        const attributes: any = []

        if (id) {
            query.push(`crop_id=${id}`)
        }

        Object.keys(filters).map(slug => {
            if (slug !== 'crop_id') {
                const data = filters[slug]

                let param: string = ''

                if (data.hasOwnProperty('checked') && data.value) {
                    param += '['

                    if (data.checked === 'min') {
                        param += 0
                        param += ','
                        param += data.value
                    } else {
                        param += data.value
                        param += ','
                        param += 100
                    }

                    param += ']'
                } else if (data.value) {
                    param = `"${data.value}"`
                } else {
                    param = `"${data}"`
                }

                attributes.push(`{"slug": "${slug}", "value": ${param}}`)
            }
        })

        if (attributes.length) {
            query.push(`attributes=[${attributes.join(',')}]`)
        }

        request.get(`/marketplace/declaration${query.length ? `?${query.join('&')}` : ''}`)
            .then(response => response.data.results)
            .then(data => {
                data.map(item => {
                    item.title = item.crop_title
                    item.spine = true

                    const current = crops[item.crop_id]

                    if (item.hasOwnProperty('attributes') && item.attributes.length &&
                        current.hasOwnProperty('attributes') && current.attributes.length) {
                        item.attributes.map(dec_attr => {
                            const finded = current.attributes.find(element =>
                                element.slug === dec_attr.slug
                            )

                            dec_attr.name = finded.name

                            if (finded.datatype === 'range') {
                                const half = parseInt(finded.min_max.max, 10) / 2

                                // console.log('------------------------------')
                                // console.log('dec_attr: ', item)
                                // console.log('finded min: ', finded.min_max.min)
                                // console.log('finded max: ', finded.min_max.max)
                                // console.log('------------------------------')

                                let value = ''

                                if (parseInt(dec_attr.value.min, 10) === parseInt(dec_attr.value.max, 10)) {
                                    value = `${dec_attr.value.min}`
                                } else if (dec_attr.value.min >= half) {
                                    value = `≥ ${dec_attr.value.min}`
                                } else if (dec_attr.value.min < half) {
                                    value = `≤ ${dec_attr.value.max}`
                                }

                                dec_attr.value = value

                                // dec_attr.value = `
                                //     item: {${dec_attr.value.min} : ${dec_attr.value.max}} |
                                //     crop: {${finded.min_max.min} : ${finded.min_max.max}} |
                                //     result: ${value}
                                // `
                            }
                        })

                        item.locked = item.is_active

                        if (item.is_active) {
                            item.relevance = 'Снято с публикации'
                        }

                        if (item.volume) {
                            item.attributes.push({
                                slug: 'volume',
                                name: 'Объем',
                                value: `${item.volume} т`
                            })
                        }

                        if (item.price) {
                            item.attributes.push({
                                slug: 'price',
                                name: 'Без логистики',
                                value: `${formatMoney(item.price)} ₽`
                            })
                        }
                    }
                })

                this.set(data)
            })
    }

    @computed
    get declarations () {
        return this.list
    }

    @action
    set (list: Array<any>) {
        this.list = list
    }
}
