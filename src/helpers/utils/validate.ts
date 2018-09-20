import { trim } from '../utils/trim'
import { isEmail } from '../predicts/is-email'
import { isUndefined } from '../predicts/is-undefined'

export const validateBlocks = (value: string, options: any): boolean => {
    const blocks = trim(value).split(' ')

    if (blocks.length !== options.length) {
        return false
    }

    const failed = blocks.filter((part: any, index: number) => {
        return !options[index] || part.length < options[index]
    })

    return !failed.length
}

export const validate = (data: any, options: any): any => {
    const errors = {}

    Object.keys(options).map(name => {
        const check = options[name]

        if (check) {
            if (!data[name] && (isUndefined(check.required) || check.required)) {
                errors[name] = true
            } else if (check.hasOwnProperty('cyrillic') && !/[ЁА-яё]/.test(data[name])) {
                errors[name] = 'Можно использовать только кириллицу'
            } else if (check.hasOwnProperty('blocks') && !validateBlocks(data[name], check.blocks)) {
                errors[name] = 'Не правильный формат'
            }

            if (check.isEmail && (data[name] && !check.required && !isEmail(data[name]))) {
                errors[name] = 'Неправильный адрес электронной почты'
            }

            if (typeof data[name] === 'object') {
                Object.keys(check).map(k => {
                    if (typeof data[name][k] === 'undefined' || data[name][k] === '') {
                        errors[name] = true
                    }
                })
            }
        }
    })

    return errors
}
