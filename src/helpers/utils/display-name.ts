export const getDisplayName = (Component: any) => {
    return Component.displayName || Component.name || 'Component'
}
