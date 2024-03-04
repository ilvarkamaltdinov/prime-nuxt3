import {DocumentNode} from "graphql/language";

export const OfferPageGql: DocumentNode = gql`query offer($site_id: Int!,$folder_slug:String, $mark_slug:String, $id:Int) {
    offer(site_id: $site_id,mark_slug:$mark_slug, folder_slug:$folder_slug, id:$id)
    {
        id
        name
        price
        price_old
        type{
            name
            title
        }
        mark{
            id
            title
            slug
        }
        folder{
            id
            title
            slug
            bodyType{
                id
                title
            }
        }
        color{
            title
            hex_code
        }
        modification{
            id
            title
            engine_volume
            engine_power
            engine_power_kvt
            gearbox{
                name
                title
            }
            drive_type{
                name
                title
            }
            engine_type{
                name
                title
            }
            tech_params{
                title
                value
            }
        }
        complectation{
            id
            title
            equipment{
                title
                values
            }
        }
        images{
            tiny
            tiny_webp
            small_webp
            medium_webp
            original
        }
        is_active
    }
}`




