import React from 'react';

// GraphQL
import { useQuery } from '@apollo/client';
import { GET_BLOG_DATA } from '../../graphql/queries';

// Components
import CardEL from '../shared/CardEL'

// MUI
import Grid from '@mui/material/Unstable_Grid2/Grid2';

const Blog = () => {

     const { loading, data, error } = useQuery(GET_BLOG_DATA)

     if (loading) return <h4>Loading..</h4>
     if (error) return <h4>Error</h4>
     return (
          <Grid container spacing={2}>
               {
                    data.posts.map(item => <CardEL key={item.id} data={item} />)
               }
          </Grid>
     );
};

export default Blog;