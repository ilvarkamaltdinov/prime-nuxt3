import {DocumentNode} from "graphql/language";
import {FolderPageInput, FolderPageDataType, FoldersInput, FolderDataType} from "~/app/types/folders";
import {folderGql} from '~/apollo/queries/folders/folder'
import {foldersGql} from '~/apollo/queries/folders/folders'
import {OfferPageGql} from "~/apollo/queries/new/newOffer";
import {sendNewFeedbackGql, SendNewFeedback, SendNewFeedbackData} from "~/apollo/mutations/newFeedback";
import {filterNewGql, OfferFilterNewDataType, OfferFilterNewInputType} from "~/apollo/queries/new/filters";
import {OfferPageDataType, OfferPageInputType} from "~/app/types/offers";
import {useSiteConfig} from "~/store/siteConfig";


export const request = async <Response, Request = undefined>(query: DocumentNode, variables?: Request, isLazy?: boolean, cache: boolean = true) => {
    let assignVariables = {
        site_id: useSiteConfig().site.id
    }
    let params = {...assignVariables, ...variables}
    let removeEmptyParams = Object.fromEntries(Object.entries(params).filter(([_, v]) => v != null));

    return isLazy ? useLazyAsyncQuery<Response>({
        query,
        variables: removeEmptyParams,
        cache
    }) : useAsyncQuery<Response>({query, variables: removeEmptyParams, cache})
}
export const postRequest = async <Response, Request = undefined>(query: DocumentNode, variables?: Request) => {
    let assignVariables = {
        site_id: useSiteConfig().site.id
    }
    let params = {...assignVariables, ...variables}
    let removeEmptyParams = Object.fromEntries(Object.entries(params).filter(([_, v]) => v != null))
    return useMutation<Response>(query, {variables: removeEmptyParams});
}


// export const requestOffers = async (variables: OffersInputType) => {
//     return await request<OffersTypeData, OffersInputType>(offersGql, variables, false, true)
// }
// export const requestOffer = async (variables: OfferPageInputType) => {
//     return await request<OfferPageDataType, OfferPageInputType>(offerGql, variables, false, true)
// }
export const requestOffer = async (variables: OfferPageInputType) => {
    return await request<OfferPageDataType, OfferPageInputType>(OfferPageGql, variables, true)
}
// export const requestFilters = async (variables: OfferFiltersInputType) => {
//     return await request<OfferFiltersDataType, OfferFiltersInputType>(filterGql, variables, false, true)
// }
export const requestNewFilters = async (variables: OfferFilterNewInputType) => {
    return await request<OfferFilterNewDataType, OfferFilterNewInputType>(filterNewGql, variables, true)
}
// export const requestFiltersCount = async (variables: CountInputType) => {
//     return await request<CountTypeData, CountInputType>(countGql, variables, false, true)
// }
export const requestCatalogFolders = async (variables: FoldersInput) => {
    return await request<FolderDataType, FoldersInput>(foldersGql, variables, true)
}
export const requestCatalogFolder = async (variables: FolderPageInput) => {
    return await request<FolderPageDataType, FolderPageInput>(folderGql, variables, true, false)
}
export const sendNewFeedback = async (variables: SendNewFeedback) => {
    return await postRequest<SendNewFeedbackData, SendNewFeedback>(sendNewFeedbackGql, variables)
}