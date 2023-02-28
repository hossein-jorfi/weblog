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

const GET_POST_DATA = gql`
     query getPostData($slug: String!) {
          post(where: {slug: $slug}) {
               author {
                    avatar {
                         url
                    }
                    name
                    field
                    slug
               }
               title     
               coverPhoto {
                    url
               }
               content {
                    html
               }
          }      
     }

`

const GET_POST_COMMENTS = gql`
     query getPostCommets($slug: String!) {
          comments(where: { post: { slug: $slug } }) {
               id
               name
               text
          }
     }
`

export { GET_BLOG_DATA, GET_AUTHORS_DATA, GET_AUTHOR_DATA, GET_POST_DATA, GET_POST_COMMENTS }