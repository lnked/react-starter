// (name: string, …rest: string[]) => string;
// (name: string = 'test', …rest: string[]) => string;

export const isActive = (match: any = false, location: any): boolean => {
    // if (!match) {
    //     return false
    // }

    return location.pathname === match.url
}
