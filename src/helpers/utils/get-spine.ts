export const getSpine = (Z: number | string, F: number | string, compare?: number | null): string => {
    const P = parseFloat(F) * 1.05

    if (compare === null) {
        return 'failed'
    }

    if (Z && F && parseFloat(Z) >= parseFloat(F)) {
        return 'success'
    }

    if (Z && F && (parseFloat(F) - parseFloat(Z)) < (P - parseFloat(F))) {
        return 'pending'
    }

    return 'failed'
}
