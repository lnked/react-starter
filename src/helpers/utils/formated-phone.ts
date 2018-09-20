export const formatedPhone = (phone: string): string =>
    phone && phone.replace(/\+/g, '').replace(/(\d)(\d{3})(\d{3})(\d{2})(\d{2})/, '+$1 ($2) $3-$4-$5')
