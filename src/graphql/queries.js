import { gql } from "@apollo/client";

const GET_BLOG_DATA = gql`
     query {
          posts {
               id
               slug
               title
          author {
               name
               avatar {
                    url
               }
          }
          coverPhoto {
               url
          }
     }
}
`

export { GET_BLOG_DATA }