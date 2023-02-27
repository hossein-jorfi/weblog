import React from 'react';

// Router
import { useParams } from 'react-router-dom';

// GraprhQL
import { GET_POST_DATA } from '../../graphql/queries';
import { useQuery } from '@apollo/client';

const BlogPage = () => {

     const slug = useParams().slug
     const { loading, data, error } = useQuery(GET_POST_DATA, {
          variables: {
               slug: slug               
          }
     })

     if (loading) return <h4>Loading..</h4>
     if (error) return <h4>Error</h4>
     console.log(data);
     return (
          <div>
               Blog Page
          </div>
     );
};

export default BlogPage;