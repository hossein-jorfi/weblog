import React from 'react';

// GraphQL
import { GET_AUTHORS_DATA } from '../../graphql/queries';
import { useQuery } from '@apollo/client';

// MUI
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { Divider, Avatar, Typography } from '@mui/material';

// Router
import { Link } from 'react-router-dom';

const Authors = () => {

     const { loading, data, error } = useQuery(GET_AUTHORS_DATA)

     if (loading) return <h4>Loading...</h4>
     if (error) return <h4>error...</h4>
     console.log(data);

     return (
          <Grid container sx={{
               borderRadius: 4,
               boxShadow: 'rgba(0, 0, 0, 0.2) 0px 4px 12px',
               margin: '31px 0 0 0',
               padding:0
          }}>
               {data.authors.map((item, index) => {
                    return (
                         <React.Fragment key={item.id}>
                              <Grid xs={12}>
                                   <Link to={`/authors/${item.slug}`} style={{
                                        display: 'flex', alignItems: 'center', textDecoration: 'none'
                                   }} >
                                        <Avatar src={item.avatar.url} sx={{ marginLeft: 2 }} />
                                        <Typography component='p' variant='p' color='text.secondary' fontWeight={500}>
                                             {item.name}
                                        </Typography>
                                   </Link>
                              </Grid>
                              {
                                   index !== data.authors.length - 1 && (
                                        <Grid xs={12}>
                                             <Divider variant='middle' />
                                        </Grid>
                                   )
                              }
                         </React.Fragment>
                    )
               })}
          </Grid>
     );
}

export default Authors;