import {DocumentNode} from "graphql/language";

export const siteConfigGql: DocumentNode = gql`
    query seoTag(
        $site_id:Int
    ){
        seoTag(
            site_id:$site_id
        ) {
            slug
            h1
            title
            description
            crumbs{
                link
                title
            }
        }
        siteSettings(
            site_id: $site_id) {
            id
            settings{
                key
                value
            }
        }
        catalog(site_id: $site_id) {
            id
            title
            title_cyrillic
            slug
            priority
            warranty_year
            warranty_km
            offers_count
            is_active
            folders {
                id
                title
                availability
                arrival
                title_cyrillic
                offers_count
                slug
                taxi
            }
        }
        sets(site_id: $site_id) {
            title
            slug
        }
    }`