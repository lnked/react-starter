import { isUndefined } from '../predicts/is-undefined'

export const calculate = (item: any, crop: any): string => {
    let value = ''

    if ((crop.hasOwnProperty('datatype') && crop.datatype === 'range' && item.value)) {
        const half = parseInt(crop.min_max.max, 10) / 2

        if (isUndefined(item.value.min) || isUndefined(item.value.max)) {
            value = ''
        } else if (parseInt(item.value.min, 10) === parseInt(item.value.max, 10)) {
            value = `${item.value.min}`
        } else if (parseInt(item.value.max, 10) === parseInt(crop.min_max.max, 10)) {
            value = `≥ ${item.value.min}`
        } else if (item.value.min >= half) {
            value = `≥ ${item.value.min}`
        } else if (item.value.min < half) {
            value = `≤ ${item.value.max}`
        }

        if (!isUndefined(crop.suffix) && crop.suffix !== null) {
            const withSuffix = [value, crop.suffix]
            const isSymbol = [ '%' ].indexOf(crop.suffix) >= 0
            value = withSuffix.join(isSymbol ? '' : ' ')
        }
    } else {
        value = item.value
    }

    return value
}
