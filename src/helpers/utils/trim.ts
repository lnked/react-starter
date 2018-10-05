import { isUndefined } from 'helpers'

export const trim = (str: string): string =>
    str && str.toString().replace(/^\s+|\s+$/g, '')

export const clean = (str: string): string =>
    (
        str &&
            str
                .toString()
                .replace(/\s+/gm, '')
                .replace(/_/gm, '')
                .replace(/-/gm, '')
                .replace(/[()]+/gm, '')
    ) || ''

export const trimmed = (str: string): string =>
    str && (!isUndefined(str) ? clean(str || '').toString() : '')
