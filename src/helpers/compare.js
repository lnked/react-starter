export const shallowCompare = (prev, next, uniq) => {
    const prevKeys = prev.map(item => item[uniq])
    const diffData = next.filter(item => prevKeys.indexOf(item[uniq]) < 0)
    return diffData.length === 0
}
