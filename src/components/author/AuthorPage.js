import React from 'react';

// Router
import { useParams } from 'react-router-dom';

// GraphQL
import { GET_AUTHOR_DATA } from '../../graphql/queries';
import { useQuery } from '@apollo/client';

// MUI
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { Container, Avatar, Typography } from '@mui/material';

// Components
import CardEl from '../shared/CardEL';
import Loading from '../shared/Loading';

const AuthorPage = () => {

     const slug = useParams().slug

     const { loading, data, error } = useQuery(GET_AUTHOR_DATA, {
          variables: { slug }
     })


     if (loading) return <Loading />
     if (error) return <h4>Error</h4>
     const { author: { avatar, name, description, field, posts } } = data
     return (
          <Container sx={{minHeight:'90vh'}}>
               <Grid container mt={10} >
                    <Grid xs={12} display='flex' flexDirection='column' alignItems='center'>
                         <Avatar sx={{ width: '250px', height: '250px' }} src={avatar.url} />
                         <Typography component='h3' variant='h5' fontWeight='700'>{name}</Typography>
                         <Typography component='h3' variant='h5' mt={1} color='text.secondary'>{field}</Typography>
                    </Grid>
                    <Grid mt={2} fontWeight='700'>
                         <div
                              style={{ textAlign: 'center' }}
                              dangerouslySetInnerHTML={{ __html: description.html }}
                         >
                         </div>
                    </Grid>

                    <Typography component='p' variant='h6' sx={{
                         marginTop: 5,
                         paddingRight: 1
                    }}>
                         مقالات {name}
                    </Typography>
                    <Grid container spacing={2} mt={1}>
                         {
                              posts.map(item =>
                                   <Grid key={item.id} xs={12} sm={6} lg={4}>
                                        <CardEl slug={item.slug} title={item.title} coverPhoto={item.coverPhoto} />
                                   </Grid>)
                         }
                    </Grid>
               </Grid>
          </Container>
     );
};

export default AuthorPage;