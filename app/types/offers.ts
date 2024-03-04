import {LocationQueryValue} from "vue-router";
import exp from "constants";

export type OffersCatalogInputType = {
    mark_slug: string | string[] | LocationQueryValue | LocationQueryValue[]
    folder_slug: string | string[] | LocationQueryValue | LocationQueryValue[]
    body_type?: string | LocationQueryValue | LocationQueryValue[]
    gearbox?: string | LocationQueryValue | LocationQueryValue[]
    engine_type?: string | LocationQueryValue | LocationQueryValue[]
    drive_type?: string | LocationQueryValue | LocationQueryValue[]
    price_from?: number
    price_to?: number
    sort?: string | LocationQueryValue | LocationQueryValue[]
    page?: number
    set?: string | LocationQueryValue | LocationQueryValue[]
}
export type OffersCatalogDataType = {
    offers: {
        data: OfferCatalogType[]
        total: number
        current_page: number
        last_page: number
        has_more_pages: boolean
    }
}
export type OfferCatalogType = {
    id: number
    name: string
    price: number
    type: {
        name: string
        title: string
    }
    mark: {
        id: number
        title: string
        slug: string
    }
    folder: {
        id: number
        title: string
        slug: string
    }
    modification: {
        id: number
        engine_volume: number
        engine_power: number | null
        engine_power_kvt: number | null
        drive_type: {
            name: string
            title: string
        }
        engine_type: {
            name: string
            title: string
        }
    }
    images: {
        tiny: string
        small_webp: string
        medium_webp: string
    }[]
}
export type OfferModalTechType = {
    name?: string
    value: string
    slug: string
}
export type OfferModalType = {
    id: number
    mark: string
    folder: string
    modification: string

    title: string
    image: string
    price: number
    tech?: {
        name: string
        value: string
    }[]
    equipment?: any

    folderId?: number
    modificationId?: number
    complectationId?: number
    colorId?: number
    folderSlug?: string
    markSlug?: string
    type?: string
    taxi?: boolean
}


export type OfferPageInputType = {
    mark_slug: string
    folder_slug: string
    id: number
}

export type OfferPageDataType = {
    offer: OfferPageType

}

export type OfferComplectationType = {
    id: number
    title: string
    equipment: {
        title: string
        values: string[]
    }[]
}

export type OfferPageType = {
    id: number
    name: string
    price: number
    price_old: number
    type: {
        name: string
        title: string
    }
    mark: {
        id: number
        title: string
        slug: string
    }
    folder: {
        id: number
        title: string
        slug: string
        bodyType: {
            id: number,
            title: string
        }
    }
    color?: {
        title: string
        hex_code: string
    }
    modification: {
        id: number
        title: string
        engine_volume: number
        engine_power: number | null
        engine_power_kvt: number | null
        gearbox: {
            name: string
            title: string
        }
        drive_type: {
            name: string
            title: string
        }
        engine_type: {
            name: string
            title: string
        }
        tech_params: {
            title: string
            value: string
        }[]
    }
    complectation: OfferComplectationType
    images: {
        original: string
        tiny_webp: string
        tiny: string
        small_webp: string
        medium_webp: string
    }[]
    is_active: boolean
}

