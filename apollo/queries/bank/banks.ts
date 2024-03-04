import {DocumentNode} from "graphql/language";

export const banksGql: DocumentNode = gql`
query banks(
    $site_id: Int!
){
   banks(
        site_id: $site_id
   ) { 
        id
        name
        title
        slug
        license_title
        license_file
        request
        approval
        rating
        rate
        image       
      }
}`
