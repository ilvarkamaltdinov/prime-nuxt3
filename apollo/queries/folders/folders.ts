import {DocumentNode} from "graphql/language";

export const foldersGql: DocumentNode = gql`query folders($site_id: Int!, $popular: Boolean, $taxi: Boolean, $mark_slug:String, $sort: String, $page:Int, $limit:Int) {
    folders(site_id: $site_id,mark_slug:$mark_slug,sort:$sort,page: $page,limit: $limit , popular:$popular, taxi:$taxi)
    {
        data{
            id
            title
            slug
            arrival
            availability
            min_price
            engine_power
            engine_power_kvt
            time
            fuel
            max_speed
            colors{
                id
                hex_code
            }
            mark{
                id
                title
                slug
            }
            image{
                image_medium
                image_medium_webp
                image_large
                image_large_webp
            }
            exterior_images{
                medium
                medium_webp
            }
            modifications{
                id
                title
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
                engine_volume
                engine_power
                engine_power_kvt
                tech_params{
                    title
                    value
                }
                complectations(site_id: $site_id) {
                    id
                    title
                    equipment {
                        title
                        values
                    }
                    price
                    price_old
                }
            }
        }
    }
}`



