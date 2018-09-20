export const infiniteScrollCalculator = (): any => {
    const elementWidth = 280
    const helpersWidth = 20 + 20

    const elementHeight = 160
    const helpersHeight = 50 + 50 + 50 + 110

    const w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
    const h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)

    let cols = Math.floor((w - helpersWidth) / elementWidth)
    const rows = Math.ceil((h - helpersHeight) / (elementHeight + 8)) + 2

    if (cols > 4) {
        cols = 4
    }

    const count = rows * cols

    return {
        cols: cols || 4,
        rows: rows || 3,
        count: count || 12,
        height: h,
        helpersHeight,
    }
}
