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

const GET_AUTHORS_DATA = gql`
     query  {
          authors {
               id
               name
               slug
               avatar {
                    url
               }
          }
     }   
`

export { GET_BLOG_DATA, GET_AUTHORS_DATA }