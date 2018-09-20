export const nonBreaking = (str: string): string =>
    str && str.replace(/\s/g, '&nbsp;')
