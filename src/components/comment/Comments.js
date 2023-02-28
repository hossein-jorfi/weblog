import React from 'react';

// GraphQL
import { GET_POST_COMMENTS } from '../../graphql/queries';
import { useQuery } from '@apollo/client';

// Components
import Loading from '../shared/Loading';

// MUI
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { Avatar, Typography } from '@mui/material';
import { Box } from '@mui/system';

const Comments = ({ slug }) => {

     const { loading, data, error } = useQuery(GET_POST_COMMENTS, {
          variables: { slug }
     })

     if (loading) return <Loading />
     if (error) console.log(error);
     const { comments } = data
     return (
          <Grid container sx={{
               boxShadow: 'rgba(0, 0, 0 , .2) 0px 4px 12px',
               borderRadius: '4px',
               py: 1,
               mt: 4,
               pb: 2
          }}>
               <Grid xs={12} mx={2} my={1}>
                    <Typography component='p' variant='h6' fontWeight={700} color='primary'>
                         کامنت ها
                    </Typography>
               </Grid>
               {
                    comments.map(item =>
                         <Grid
                              container
                              key={item.id}
                              xs={12}
                              mx={2}
                              my={1}
                              p={2}
                              border="1px silver solid"
                              borderRadius={2}
                              display='flex'
                              flexDirection='column'
                         >
                              <Box component="div" display="flex" alignItems="center" mb={3}>
                                   <Avatar sx={{ marginLeft: 2}}>
                                        {item.name[0]}
                                   </Avatar>
                                   <Typography component="span" variant="p" fontWeight={700} mt='4px'>
                                        {item.name}
                                   </Typography>
                              </Box>
                              <Typography component="p" variant="p" px={3}>
                                   {item.text}
                              </Typography>
                         </Grid>)
               }
          </Grid>
     );
};

export default Comments;