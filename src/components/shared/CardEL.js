import React from 'react';

// MUI
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { Card, CardHeader, CardMedia, Avatar, CardContent, Typography, CardActions, Button, Divider } from '@mui/material';

// Router
import { Link } from 'react-router-dom';

const CardEl = ({ data }) => {

     const { slug, title, author: { name, avatar }, coverPhoto: { url } } = data

     const shorter = text => {
          const splitedText = text.split(' ')
          let result
          if (splitedText.length > 3) {
               result = `
                    ${splitedText[0]}
                    ${splitedText[1]}
                    ${splitedText[2]}
                    ${splitedText[3]}
                    ...
                    `
          } else {
               result = text
          }
          return result
     }

     return (

          <Grid xs={12} sm={6} lg={4}>
               {/* <Link to={`/blogs/${slug}`}> */}
               <Card
                    sx={{
                         borderRadius: 4,
                         boxShadow: 'rgba(0, 0, 0, 0.2) 0px 4px 12px'
                    }}
               >
                    <CardHeader
                         avatar={
                              <Avatar
                                   sx={{ bgcolor: 'red[500]', marginLeft: '1rem' }}
                                   aria-label="recipe"
                              >
                                   <img src={avatar.url} alt="#" width='100%' />
                              </Avatar>
                         }
                         title={
                              <Typography component='p' variant='p' color='text.primary' fontWeight='500'>
                                   {name}
                              </Typography>
                         }
                    >
                    </CardHeader>
                    <CardMedia
                         component="img"
                         height="194"
                         image={url}
                         alt="cover"
                    >
                    </CardMedia>
                    <CardContent>
                         <Typography component='h3' variant="p" color="text.secondary" fontWeight='600' >
                              {shorter(title)}
                              {/* {(title)} */}
                         </Typography>
                    </CardContent>
                    <Divider variant='middle' />
                    <CardActions>
                         <Button variant="outlined" sx={{ width: '100%', borderRadius: 4 }} >دیدن مقاله</Button>
                    </CardActions>
               </Card>
               {/* </Link> */}
          </Grid >
     );
};

export default CardEl;