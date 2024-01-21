const data = {
    zalo: 'https://zalo.me/',
    facebook: 'https://facebook.com/',
    phone: 'tel:'
} as const

export const generateContact = (type: keyof typeof data, suffix: string | number) => data[type] + suffix;