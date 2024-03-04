import {DocumentNode} from "graphql/language";

export const offersCatalogGql: DocumentNode = gql`query offers(
    $site_id: Int!,
    $folder_slug:String,
    $set:String,
    $mark_slug:String,
    $body_type:String,
    $gearbox:GearboxEnumType,
    $engine_type:EngineTypeEnumType,
    $drive_type:DriveTypeEnumType,
    $sort: String,
    $price_from: Int,
    $price_to: Int,
    $page:Int,
    $limit:Int
) {
    offers(
        site_id: $site_id,
        mark_slug:$mark_slug,
        sort:$sort,
        set:$set,
        page: $page,
        limit: $limit,
        folder_slug:$folder_slug
        body_type:$body_type
        gearbox:$gearbox
        engine_type:$engine_type
        drive_type:$drive_type
        price_from: $price_from,
        price_to: $price_to,
    )
    {
        data{
            id
            name
            price
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
            modification{
                id
                engine_volume
                engine_power
                engine_power_kvt
                drive_type{
                    name
                    title
                }
                engine_type{
                    name
                    title
                }
            }
            images{
                tiny
                small_webp
                medium_webp
            }

        }
        total
        last_page
        current_page
        has_more_pages
    }
}`



