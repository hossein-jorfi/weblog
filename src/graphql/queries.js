import { gql } from "@apollo/client";

const GET_BLOG_DATA = gql`
     query {
          posts {
               id
               slug
               title
          author {
               name
               slug
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

const GET_AUTHOR_DATA = gql`
     query getAuthorData($slug: String!) {
          author(where: {slug: $slug}) {
               slug
               avatar {
                    url
               }
               field
               name
               description {
                    html
               }
               posts {
                    coverPhoto {
                         url
                    }
                    id
                    slug
                    title
               }
          }
     }
`

export { GET_BLOG_DATA, GET_AUTHORS_DATA, GET_AUTHOR_DATA }