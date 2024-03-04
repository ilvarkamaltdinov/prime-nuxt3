export const newApiDomain = 'api-new.ru'
export const byApiDomain = 'api-used.ru'

export type Site = {
    id: number | null,
    domain: string,
    title: string,
    link: string,
    root: boolean
}
export type Domains = Site[]
export const domains: Domains = [
    {
        id: 7,
        domain: 'prime-new.ru',
        title: 'Прайм-Авто',
        link: 'https://prime-new.ru',
        root: true
    },
    {
        id: 12,
        domain: 'official-prime.ru',
        title: 'Прайм-Авто',
        link: 'https://official-prime.ru',
        root: false
    },
]

export function currentSite(host: string) {
    return domains.find(value => value.domain === host) || domains[0]
}
