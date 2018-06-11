export const isActive = (match, location) => {
    if (!match) {
        return false
    }

    return location.pathname === match.path
}
