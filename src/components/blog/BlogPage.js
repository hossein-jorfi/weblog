import React from 'react';

// Router
import { useParams, useNavigate, Link } from 'react-router-dom';

// GraprhQL
import { GET_POST_DATA } from '../../graphql/queries';
import { useQuery } from '@apollo/client';

// Components
import Loading from '../shared/Loading';
import CommentForm from '../comment/CommentForm';
import Comments from '../comment/Comments';

// MUI
import { Avatar, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const BlogPage = () => {

     const navigate = useNavigate()

     const slug = useParams().slug
     const { loading, data, error } = useQuery(GET_POST_DATA, {
          variables: {
               slug: slug
          }
     })

     if (loading) return <Loading />
     if (error) return <h4>Error</h4>
     const { author: { avatar, name, field }, content: { html }, coverPhoto: { url }, title } = data.post
     return (
          <Container>
               <Grid container mt={9}>
                    <Grid xs={12} display='flex' alignItems='center' justifyContent='space-between'>
                         <Typography component='h2' variant='h5' color='primary' fontWeight='700'>
                              {title}
                         </Typography>
                         <ArrowBackIcon
                              onClick={() => navigate(-1)}
                              sx={{
                                   padding: 1,
                                   borderRadius: '50%',
                                   transition: 'all ease-in-out .2s',
                                   ":hover": {
                                        backgroundColor: '#dbdbdb',
                                        padding: 1
                                   }
                              }}
                         />
                    </Grid>
                    <Grid xs={12} mt={6}>
                         <img src={url} alt="cover" style={{ borderRadius: '10px', width: '100%', border: '2px solid #ccc' }} />
                    </Grid>
                    <Grid container xs={12} mt={7} display='flex' justifyContent='start' alignItems='center'>
                         <Link to={`/authors/${data.post.author.slug}`} style={{ textDecoration: 'none' }}>
                              <Grid>
                                   <Avatar src={avatar.url} sx={{ width: '80px', height: '80px', marginLeft: 2 }} />
                              </Grid>
                         </Link>
                         <Link to={`/authors/${data.post.author.slug}`} style={{ textDecoration: 'none' }}>
                              <Grid>
                                   <Typography color='black' component='p' variant='h6' fontWeight='700'>{name}</Typography>
                                   <Typography color='text.secondary' component='p' variant='p' fontWeight='500'>{field}</Typography>
                              </Grid>
                         </Link>
                    </Grid>
                    <Grid xs={12} mt={7}>
                         <div dangerouslySetInnerHTML={{ __html: html }}></div>
                    </Grid>
                    <Grid xs={12}>
                         <CommentForm slug={slug} />
                    </Grid>
                    <Grid xs={12}>
                         <Comments slug={slug} />
                    </Grid>
               </Grid>
          </Container>
     );
};

export default BlogPage;