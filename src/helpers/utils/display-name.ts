export const getDisplayName = (component: any): string =>
    component && (component.displayName || component.name || 'Component')
